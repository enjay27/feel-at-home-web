<template>
  <div class="StaticsDiv">
    <br />
    <br />
    <polar-area-chart id="chart"></polar-area-chart>
    <p>이번 달의 감정 그래프입니다.</p>
  </div>
</template>

<script>
import PolarAreaChart from "@/components/diary/PolarAreaChart";

export default {
  name: "Statics",
  components: {
    PolarAreaChart,
  },
};
</script>
<style>
#chart {
  z-index: 6;
}
</style>
