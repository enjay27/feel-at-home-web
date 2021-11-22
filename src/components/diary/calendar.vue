<template>
  <div id="cal">
    <br />
    <vCalendar is-expanded />
    <br />
    <div class="memo">
      <textarea id="contents" name="contents" v-model="contents"></textarea>
      <button id="memoBtn" @click="registContents()">등록</button>
      <!-- <button @click="registComment">등록</button> -->
    </div>
  </div>
</template>
<script>
import vCalendar from "v-calendar/lib/components/calendar.umd";
//import http from "@/util/http-common";
import axios from "axios";
export default {
  name: "Calendar",
  components: {
    vCalendar,
  },
  data() {
    return {
      contents: "",
    };
  },
  methods: {
    registContents() {
      alert("click");
      axios
        .post(
          "https://language.googleapis.com/v1/documents:analyzeSentiment?key=AIzaSyBxttWUhZ6GVuUHRrIwS7bANC_yeL1sRvw",
          {
            document: {
              type: "PLAIN_TEXT",
              content: "오늘은 기분이 좋네요",
            },
          }
        )
        .then(({ data }) => {
          //alert(data);
          console.log(data);
        });

      // http.post("/diary/", {}).then(({ data }) => {
      //   let msg = "How are you feeling? I dont know";
      //   if (data === "success") {
      //     msg = "How are you feeling? I think...";
      //   }
      //   alert(msg);
      // });
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
</style>
