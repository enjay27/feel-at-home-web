<template>
  <div class="diary">
    <h1>diary</h1>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Diary",
};
</script>
<style>
.diary {
  background-color: aqua;
  z-index: 5;
}
</style>
