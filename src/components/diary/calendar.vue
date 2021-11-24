<template>
  <div id="cal">
    <br />
    <div id="up">
      [green= happy / red: sad / yellow : soso]
      <button id="diaryChartBtn"><i class="far fa-chart-bar"></i></button>
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
  </div>
</template>

<script>
/* eslint-disable */
import vCalendar from "v-calendar/lib/components/date-picker.common";

//import http from "@/util/http-common";
import key from "@/util/key";
import axios from "axios";

export default {
  name: "Calendar",
  components: {
    vCalendar,
  },
  data() {
    return {
      date: new Date(),
      days: [],
      contents: "",
      selectAttribute: {
        dot: true,
      },
    };
  },

  computed: {
    dates() {
      return this.days.map((day) => [day.date, day.sentiment]);
    },
    attributes() {
      return this.dates.map((data) => ({
        key: "add",
        highlight: {
          color: data[1],
          fillMode: "light",
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
      this.$emit("showModal", { x: true, y: "Happy" });
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
          if (sentiment > 0.5 ) {
            alert(msg + "Happy");
            sentimentColor = "green";
          } else if(sentiment >= 0) {
            sentimentColor = "yellow";
            alert(msg + "Soso");
          }else{
            sentimentColor = "red";
            alert(msg + "Sad");
          }

          // v-calendar에 이미 들어간 날짜인지 확인 후 push ->DB로 전환시키기
          const idx = this.days.findIndex((d) => d.id === this.date);
          console.log(idx);
          if (idx >= 0) {
            this.days.splice(idx, 1);
          } else {
            this.days.push({
              id: this.getFormatDate(this.date),
              date: this.date,
              sentiment: sentimentColor,
            });
          }

          // Modal 창 띄우기
          this.$emit("showModal", { x: true, y: sentiment });
          
        });
    },
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
}
</style>
