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
      // attributes: [
      //   {
      //     key: "today",
      //     highlight: {
      //       color: "purple",
      //       fillMode: "solid",
      //       contentClass: "italic",
      //     },
      //     dates: new Date(),
      //     order: 0,
      //   },
      // ],
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

      // const idx = this.days.findIndex((d) => d.id === day.id);
      // console.log(idx);
      // if (idx >= 0) {
      //   this.days.splice(idx, 1);
      // } else {
      //   this.days.push({
      //     id: day.id,
      //     date: day.date,
      //     sentiment: "happy",
      //   });
      // }
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
      axios
        .post(
          "https://language.googleapis.com/v1/documents:analyzeSentiment?key=" +
            key.KEY,
          {
            document: { type: "PLAIN_TEXT", content: this.contents },
          }
        )
        .then(({ data }) => {
          //alert(data);
          console.log(data);
          console.log(data.sentences[0].sentiment.score);

          let msg = this.date + "\n";
          var sentiment = data.sentences[0].sentiment.score;
          if (sentiment > 0) {
            alert(msg + "Happy");
            sentiment = "green";
          } else {
            sentiment = "red";
            alert(msg + "Sad");
          }

          console.log(this.date);
          const idx = this.days.findIndex((d) => d.id === this.date);
          console.log(idx);
          if (idx >= 0) {
            this.days.splice(idx, 1);
          } else {
            this.days.push({
              id: this.getFormatDate(this.date),
              date: this.date,
              sentiment: sentiment,
            });
          }
          this.$emit("showModal", { x: true, y: "sad" });
          // this.$emit("showSentiment", sentiment);
          // this.$emit("showModal", true);
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
