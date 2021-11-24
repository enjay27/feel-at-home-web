<template>
  <div id="cal">
    <br />
    <div id="up">
      <button id="diaryChartBtn" @click="onShowModal">
        <i class="fas fa-info-circle"></i>
      </button>
      <button id="diaryChartBtn" @click="goStatics">
        <i class="far fa-chart-bar"></i>
      </button>
    </div>
    <br />

    <v-calendar
      :attributes="attributes"
      :min-date="new Date()"
      :select-attribute="selectAttribute"
      is-expanded
      @dayclick="onDayClick"
    />
    <br />
    <!-- <p>{{ date }}</p>
    <p>{{ days }}</p> -->
    <div class="memo">
      <textarea id="contents" name="contents" v-model="contents"></textarea>
      <button id="memoBtn" @click="registContents()">등록</button>
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
import vCalendar from "v-calendar/lib/components/date-picker.common";
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
      date: new Date(),
      days: [],
      contents: "",
      selectAttribute: {
        dot: true,
      },
      showModal: false,
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
  methods: {
    createToday() {
      this.days.push({
        id: this.getFormatDate(new Date()),
        date: new Date(),
        sentiment: "grey",
      });
    },
    onDayClick(day) {
      this.date = day.id;
      console.log("onDayclick :" + day.id);
      console.log("onDayclick :" + day.date);
      //this.$emit("showModal", { x: true, y: "Happy" });
      createDiary();
    },
    getFormatDate(date) {
      if (date.length <= 15) return date;
      var year = date.getFullYear(); //yyyy
      var month = 1 + date.getMonth(); //M
      month = month >= 10 ? month : "0" + month; //month 두자리로 저장
      var day = date.getDate(); //d
      day = day >= 10 ? day : "0" + day; //day 두자리로 저장
      return year + "-" + month + "-" + day; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
    },
    registContents() {

      // 감정분석 API Post
      axios
        .post("https://language.googleapis.com/v1/documents:analyzeSentiment?key=" + key.KEY, {
          document: { type: "PLAIN_TEXT", content: this.contents },
        })
        .then(({ data }) => {
          // 감정과 그에따른 색상 맵핑
          let msg = this.date + "\n"; // 확인용 메세지
          let sentiment = data.sentences[0].sentiment.score;
          let sentimentColor;
          let sentimentName;
          if (sentiment > 0.5 ) {
            sentimentName = "Happy";
            sentimentColor = "green";
          } else if(sentiment >= 0) {
            sentimentColor = "yellow";
            sentimentName = "Soso";
          }else{
            sentimentColor = "red";
            sentimentName = "Sad";
          }
          alert(msg + sentimentName);

          // v-calendar에 이미 들어간 날짜인지 확인 후 push ->DB로 전환시키기
          const idx = this.days.findIndex((d) => d.id === this.date);
          console.log(idx);
          if (idx >= 0) 
            this.days.splice(idx, 1);
          
          this.days.push({
            id: this.getFormatDate(this.date),
            date: this.date,
            sentimentColor: sentimentColor,
            sentimentName : sentimentName
          });
          

          // Modal 창 띄우기
          this.$emit("showModal", { x: true, y: sentimentName });
          
        }).then(()=>{
          createDiary();
        });
    },
    createDiary(){
      http
        .post(`/diary`, {
          diary_id: "1",
          member_id: "1",
          year:"1",
          month : "2",
          day:"3",
          memo : "hello",
          sentiment : "Happy"

        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "등록이 완료되었습니다.";
          }
          alert(msg);
          
        });
    },
    onShowModal(){
      // alert("Click");
      this.showModal = true;
    },
    goStatics(){
      this.$router.push('Statics');
    }
  },
};
</script>
<style>
#cal {
  background-color: white;
  z-index: 6;
  padding: 10px;
}

.memo {
  padding: 3px;
  border: 1px solid #cbd5e0;
  border-radius: 7px;
  margin-top: 20px;
  width: 100%;
  height: 100px;

  display: flex;
}
#contents {
  width: 85%;
  height: 100%;
  resize: none;
  border: 0;
  outline: 0;
}
#memoBtn {
  width: 15%;
  height: 90%;
  margin: auto;
  display: block;
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
