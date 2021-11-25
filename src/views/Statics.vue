<template>
  <div class="StaticsDiv">
    <br />
    <br />
    <div class="pDiv">
      <p>This month's sentiment chart</p>
    </div>
    <PolarAreaChart></PolarAreaChart>
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
.pDiv {
  display: flex;
  justify-content: center;
  align-items: center;
}
#chart {
  z-index: 6;
}
</style>
