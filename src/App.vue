<template>
  <div class="hero_area">
    <div class="bg-box">
      <img src="./assets/images/music.jpg" alt="" />
    </div>
    <navi-bar />
    <router-view />
    <!-- <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> | -->
    <!-- <footer-bar /> -->
  </div>
</template>
<script>
import NaviBar from "./components/layout/NaviBar.vue";
//import FooterBar from "./components/layout/FooterBar.vue";

export default {
  name: "App",
  components: {
    NaviBar,
    // FooterBar,
  },
};
</script>
