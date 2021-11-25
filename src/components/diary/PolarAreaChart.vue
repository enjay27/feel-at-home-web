<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <!-- <button @click="fillData()">Randomize</button> -->
  </div>
</template>
<script>
//import { PolarArea } from "vue-chartjs";
//import http from "@/util/http-common";
import LineChart from "./LineChart.js";
export default {
  components: {
    LineChart,
  },
  data() {
    return {
      Happy: "",
      Sad: "",
      Soso: "",
      datacollection: null,
    };
  },
  created() {
    console.log("[start] created");
    this.Happy =
      this.$cookies.get("Happy") == null ? 0 : this.$cookies.get("Happy");
    this.Sad = this.$cookies.get("Sad") == null ? 0 : this.$cookies.get("Sad");
    this.Soso =
      this.$cookies.get("Soso") == null ? 0 : this.$cookies.get("Soso");

    console.log(this.happy, this.Sad, this.Soso);
    console.log("[END] created");
  },
  mounted() {
    console.log("mounted");
    this.fillData();
    //this.renderChart(this.chartData, this.options);
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["Green(Happy)", "Red(Sad)", "Yellow(Soso)"],
        datasets: [
          {
            label: "Polar Area Chart",
            borderWidth: 5,
            backgroundColor: [
              "rgba(154, 230, 180, 0.5)",
              "rgba(254, 178, 178, 0.5)",
              "rgba(246, 224, 94, 0.5)",
            ],
            data: [this.Happy, this.Sad, this.Soso],
          },
        ],
        options: {
          scale: {
            ticks: {
              stepSize: 1,
            },
          },
        },
      };
    },
  },
};
</script>
<style>
.small {
  max-width: 400px;
  margin: 10px auto;
}
</style>
