<script>
import { PolarArea } from "vue-chartjs";

export default {
  extends: PolarArea,
  data() {
    return {
      chartData: {
        labels: ["Green(Happy)", "Red(Sad)", "Yellow(Soso)"],
        datasets: [
          {
            label: "Polar Area Chart",
            borderWidth: 2,
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            data: [8, 14, 12],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
