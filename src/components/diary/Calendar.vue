<template>
  <div id="cal">
    <br />
    <div id="up">
      <button id="diaryChartBtn" @click="onShowModal">
        <i class="fas fa-info-circle"></i>
      </button>
      <button id="diaryChartBtn" @click="moveStatics()">
        <i class="far fa-chart-bar"></i>
      </button>
    </div>
    <br />

    <v-calendar
      :attributes="attributes"
      :min-date="new Date()"
      :select-attribute="selectAttribute"
      is-expanded
      value=""
      @dayclick="onDayClick"
    />
    <br />
    <!-- <p>{{ date }}</p> -->
    <!-- <p>{{ days }}</p> -->
    <div class="memo">
      <textarea id="contents" name="contents" v-model="contents"></textarea>
      <button id="memoBtn" @click="registContent()">register</button>
      <!-- <button @click="registComment">등록</button> -->
    </div>

    <InfoModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        How to Use
        <!-- <i class="fas fa-times closeModalBtn" @click="showModal = false"></i> -->
      </h3>

      <p slot="body">
        1. 날짜를 선택하고 당신의 공간에서 느낀 감정을 기록해주세요. <br />(날짜
        미선택시, 오늘 날짜에 기록됩니다.)<br /><br />
        2. 등록 버튼을 눌러주시면 감정의 색깔을 추출해드리겠습니다 <br />
        <i style="color: #c6f6d5" class="fas fa-circle"></i>초록 : 오늘 기분이
        행복하셨나요?<br />
        <i style="color: #feb2b2" class="fas fa-circle"></i>빨강 : 조금
        슬펐나요? 내일은 더 행복하기에요.<br />
        <i style="color: #fefcbf" class="fas fa-circle"></i>노랑 : 보통날 또한
        소중하죠.<br />
        <br />
        3. 감정에 따른 음악추천을 받아보세요. 당신의 공간이 더
        행복해질거에요!<br />
      </p>
    </InfoModal>
  </div>
</template>

<script>
/* eslint-disable */
import vCalendar from "v-calendar/lib/components/date-picker.umd";
import http from "@/util/http-common";
import key from "@/util/key";
import axios from "axios";
import InfoModal from "../diary/InfoModal";
export default {
  name: "Calendar",
  components: {
    vCalendar,
    InfoModal,
  },
  
  data() {
    return {
      member_id : "",
      date: new Date(),
      days: [],
      contents: "",
      selectAttribute: {
        dot: true,
        
      },
      showModal: false,
      sentimentColor: "",
      sentimentName: "",
      y : "",
      m : "", 
      d : "",
    };
  },

  computed: {
    dates() {
      return this.days.map((day) => [day.date, day.sentimentColor, day.sentimentName]);
    },
    attributes() {
      return this.dates.map((data) => ({
        key: "add",
        highlight: {
          color: data[1],
          fillMode: "light",
        },
        popover: {
          label: data[2],
        },
        order: 1,
        dates: data[0],
      }));
    },
  },
  mounted() {
    this.getFormatDate(this.date);
    this.createToday();
    this.getMemberId();
    this.getDiaryList();
  },
  methods: {
    /**
     * regist Content Process Function
     * 1. sentimentAnalysis
     * 2. process Data
     * 3. save Data
     * 4. recommend Music Modal
     */
    async registContent(){
      //1. sentimentAnalysis
      var data = await this.sentimentAnalysis();
      //console.log("zzzz" , data.data);
      // 2. process Data
      await this.MapColorAndName(data.data);
      await this.checkDataStatus();
      // 3. saveData
      //await this.saveContent(); 
      // 4. recommend Music Modal
      this.$emit("showModal", { x: true, y: this.sentimentName });
    },
    /**
     * getMemberId from Cookie('user')
     */
    getMemberId(){
      console.log("[Start] getMemberId")
      let access_token = this.$cookies.get("user");
      //console.log(access_token);
      console.log('member_id : ',access_token.data.member_id);
      this.member_id = access_token.data.member_id;
      console.log("[End] getMemberId")
    },
    /**
     * Highlighting on Today
     * Push data {this.days}
     */
    createToday() {
      console.log("[Start] createToday")
      this.days.push({
        id: this.getFormatDate(new Date()),
        date: new Date(),
        sentimentColor: "gray",
        sentimentName : "How are You Feeling Today?"
      });
      console.log("[End] createToday")
    },
    /**
     * Triggers when click the date
     */
    onDayClick(day) {
      console.log("[START] onDayClick");
      console.log("onDayclick :" + day.id);
      // console.log(day);
      // this.date = day.id;
      this.getFormatDate(day.date);
      //this.getDiaryList();
      // console.log("onDayclick :" + day.date);
      //this.$emit("showModal", { x: true, y: "Happy" });
      //this.saveContent();
    },
    /**
     * format the date 
     * @example 2021-11-24
     * @param {String} date
     */
    getFormatDate(date) {
      console.log("[START] getFormatDate");
      // If the format is right, return
      if (date.length <= 15) return date;

      var year = date.getFullYear(); 
      this.y = year;
      var month = 1 + date.getMonth(); 
      month = month >= 10 ? month : "0" + month; // set the month to two digits.
      this.m = month;
      var day = date.getDate(); //d
      day = day >= 10 ? day : "0" + day; // set the day to two digits.
      this.d = day;
      var formatedDate = year + "-" + month + "-" + day; //format : yyyy-mm-dd
      this.date = formatedDate;
      return formatedDate; 
    },
    /**
     * sentiment Analysis using Google Cloud NLP API
     */
    sentimentAnalysis(){
      console.log("sentimentAnalysis!");

      const response = axios
        .post("https://language.googleapis.com/v1/documents:analyzeSentiment?key=" + key.KEY, {
          document: { type: "PLAIN_TEXT", content: this.contents },
        })
        .then((data)=>{
          return data;
        })
      console.log(response);
      return response;
    },
    /**
     * Mapping Sentiment Color and Name
     * @param {promise resultSet} analyzed data.
     */
    MapColorAndName(data){
      console.log("[Success] MapColorAndName")

      let msg = this.date + "\n"; // 확인용 메세지
      let sentimentScore = data.sentences[0].sentiment.score;
      if (sentimentScore > 0.5 ) {
          this.sentimentName = "Happy";
          this.sentimentColor = "green";
        } else if (sentimentScore >= 0) {
          this.sentimentColor = "yellow";
          this.sentimentName = "Soso";
        } else {
          this.sentimentColor = "red";
          this.sentimentName = "Sad";
        }
        alert(msg + this.sentimentName);
    },
    /**
     * check Data Status and add/remove data
     * Data : {this.days} 
     */
    checkDataStatus(){
      console.log("[START] checkDataStatus");
      console.log(this.date);
    const idx = this.days.findIndex((d) => d.id === this.date);
      console.log(idx);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      
      
        this.days.push({
          id: this.getFormatDate(this.date),
          date: this.date,
          sentimentColor: this.sentimentColor,
          sentimentName : this.sentimentName
        });
        this.saveContent();
      }
      else{
        this.days.push({
          id: this.getFormatDate(this.date),
          date: this.date,
          sentimentColor: this.sentimentColor,
          sentimentName : this.sentimentName
        });
        this.saveContent();
      }
        
      
          
    },
    /**
     * save the content to DB
     */
    saveContent(){
      http
        .post("/diary/", {
          member_id: this.member_id,
          year: this.y,
          month:this.m,
          day: this.d,
          memo: this.contents,
          sentimentColor: this.sentimentColor,
          sentimentName: this.sentimentName,
        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "등록이 완료되었습니다.";
          }
          alert(msg);
        }).then(()=>{
          this.getCharData();
        });
    },
    /**
     * get Diary List from DB
     */
    getDiaryList(){
      console.log("[START] getDiaryList");
      // http.get(`/diary/${this.member_id}`).then(({ data }) => {
      //   console.log(data);
      // });
      http.get(`/diary/${this.member_id}`).then(({ data }) => {
        console.log(data);
        data.forEach(element => {
          console.log(element)
          this.days.push({
          id: element.year+"-"+element.month+"-"+element.day,
          date: element.year+"-"+element.month+"-"+element.day,
          sentimentColor: element.sentimentColor,
          sentimentName : element.sentimentName
      
          });
        });
      }).then(()=>{
        this.getCharData();
      });
    },
    getCharData() {
      console.log("[START] getCharData");
      
      http.get(`/diary/sent/${this.member_id}`).then(({ data }) => {
        console.log(data);
        data.forEach((element) => {
          console.log(element);
          //console.log(this.chartData.datasets[0].data);
          if (element.sentimentName == "Happy") {
            this.$cookies.set('Happy', element.sentimentCnt, '1d');
            //this.d1 = element.sentimentCnt;
          } else if (element.sentimentName == "Sad") {
            this.$cookies.set('Sad', element.sentimentCnt, '1d');
            //this.d2 = element.sentimentCnt;
          } else {
            this.$cookies.set('Soso', element.sentimentCnt, '1d');
            //this.chartData.datasets[0].data[2] = element.sentimentCnt;
          }

          //   this.days.push({
          //     id: element.year + "-" + element.month + "-" + element.day,
          //     date: element.year + "-" + element.month + "-" + element.day,
          //     sentimentColor: element.sentimentColor,
          //     sentimentName: element.sentimentName,
          //   });
        });
      });
    },
    /**
     * Trigger
     */
    onShowModal(){
      // alert("Click");
      this.showModal = true;
    },
    /** 
     * move Statics Route
     */
    moveStatics(){
      alert("Click");
      this.$router.push('Statics');
    }

  },
};

// registContentsss() {
//       // 감정분석 API Post
//       axios
//         .post("https://language.googleapis.com/v1/documents:analyzeSentiment?key=" + key.KEY, {
//           document: { type: "PLAIN_TEXT", content: this.contents },
//         })
//         .then(({ data }) => {
//           // 감정과 그에따른 색상 맵핑
          

//           // v-calendar에 이미 들어간 날짜인지 확인 후 push ->DB로 전환시키기
//           const idx = this.days.findIndex((d) => d.id === this.date);
//           console.log(idx);
//           if (idx >= 0) 
//             this.days.splice(idx, 1);
          
//           this.days.push({
//             id: this.getFormatDate(this.date),
//             date: this.date,
//             sentimentColor: sentimentColor,
//             sentimentName : sentimentName
//           });
          

//           // Modal 창 띄우기
//           /**
//            * Triggers when click the "Go To Music" Button
//            * 
//            * @property {boolean} Modal Component Open
//            * @property {String} sentimentName
//            */
//           this.$emit("showModal", { x: true, y: sentimentName });
          
//         }).then(()=>{

//           registerContent();
//         });
//     },
</script>
<style>
#cal {
  background-color: white;
  z-index: 6;
  padding: 10px;
}

.memo {
  padding: 3px;
  
  margin-top: 20px;
  width: 100%;
  height: 100px;

  display: flex;
}
#contents {
  padding : 5px;
  width: 85%;
  height: 100%;
  resize: none;
  /* border: 0; */
  outline: 0;
  border: 1px solid #cbd5e0;
  border-radius: 7px;
}
#memoBtn {
  width: 15%;
  height: 100%;
  margin-left: 10px;
  display: block;
  background-color: #ffbe33;
  border : 0;
  border-radius: 7px;
  color : white;
  font-size: 20px;
  font-family: 'Open Sans',sans-serif;
}
#up {
  float: right;
  margin: 20px;
}
#diaryChartBtn {
  border: 0;
  outline: 0;
  height: 30px;
  width: 30px;
  margin-left : 5px;
  padding: 0;
}
#diaryChartBtn:hover{
  background-color: #ffbe33;
}
</style>
