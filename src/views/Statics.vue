<template>
  <div class="StaticsDiv">
    <br />
    <br />
    <polar-area-chart :chart-data="datacollection"></polar-area-chart>
    <p>이번 달의 감정 그래프입니다.</p>
  </div>
</template>

<script>
import PolarAreaChart from "@/components/diary/PolarAreaChart";
import http from "@/util/http-common";

export default {
  name: "Statics",
  components: {
    PolarAreaChart,
  },
  data() {
    return {
      datacollection: null,
      d1: "",
      d2: "",
    };
  },
  created() {
    // this.fillData();
    this.getCharData();
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    fillData() {
      console.log("[START] fillData");
      this.chartData = {
        labels: ["Green(Happy)", "Red(Sad)", "Yellow(Soso)"],
        datasets: [
          {
            label: "Polar Area Chart",
            borderWidth: 2,
            backgroundColor: [
              "rgba(154, 230, 180, 0.5)",
              "rgba(254, 178, 178, 0.5)",
              "rgba(246, 224, 94, 0.5)",
            ],
            data: [this.d1, this.d2],
          },
        ],
      };
    },
    getCharData() {
      console.log("[START] getCharData");
      console.log("[START] fillData");
      http
        .get(`/diary/sent/${"12345"}`)
        .then(({ data }) => {
          console.log(data);
          data.forEach((element) => {
            console.log(element);
            console.log(this.chartData.datasets[0].data);
            if (element.sentimentName == "Happy") {
              this.d1 = element.sentimentCnt;
            } else if (element.sentimentName == "Sad") {
              this.d2 = element.sentimentCnt;
            } else {
              //this.chartData.datasets[0].data[2] = element.sentimentCnt;
            }

            //   this.days.push({
            //     id: element.year + "-" + element.month + "-" + element.day,
            //     date: element.year + "-" + element.month + "-" + element.day,
            //     sentimentColor: element.sentimentColor,
            //     sentimentName: element.sentimentName,
            //   });
          });
        })
        .then(() => {
          this.fillData();
        });
    },
  },
};
</script>
<style>
#chart {
  z-index: 6;
}
</style>
