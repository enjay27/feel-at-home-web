<script>
import { PolarArea, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
//import http from "@/util/http-common";
export default {
  extends: PolarArea,
  mixins: [reactiveProp],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    console.log("mounted");
    this.renderChart(this.chartData, this.options);
  },
  // methods: {
  //   fillData() {
  //     this.chartData = {
  //       labels: ["Green(Happy)", "Red(Sad)", "Yellow(Soso)"],
  //       datasets: [
  //         {
  //           label: "Polar Area Chart",
  //           borderWidth: 2,
  //           backgroundColor: [
  //             "rgba(154, 230, 180, 0.5)",
  //             "rgba(254, 178, 178, 0.5)",
  //             "rgba(246, 224, 94, 0.5)",
  //           ],
  //           data: [0, 0, 0],
  //         },
  //       ],
  //     };
  //   },
  //   getCharData() {
  //     console.log("[START] getCharData");
  //     http.get(`/diary/sent/${"12345"}`).then(({ data }) => {
  //       console.log(data);
  //       data.forEach((element) => {
  //         console.log(element);
  //         console.log(this.chartData.datasets[0].data);
  //         if (element.sentimentName == "Happy") {
  //           this.chartData.datasets[0].data[0] = element.sentimentCnt;
  //         } else if (element.sentimentName == "Sad") {
  //           this.chartData.datasets[0].data[1] = element.sentimentCnt;
  //         } else {
  //           this.chartData.datasets[0].data[2] = element.sentimentCnt;
  //         }

  //         //   this.days.push({
  //         //     id: element.year + "-" + element.month + "-" + element.day,
  //         //     date: element.year + "-" + element.month + "-" + element.day,
  //         //     sentimentColor: element.sentimentColor,
  //         //     sentimentName: element.sentimentName,
  //         //   });
  //       });
  //     });
  //   },
  // },
};
</script>
