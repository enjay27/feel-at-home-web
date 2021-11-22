<template>
  <div id="player">
    <youtube :video-id="videoId" ref="youtube" @playing="playing" />
    <button @click="playVideo">play</button>
    <button @click="pauseVideo">pause</button>
  </div>
</template>

<script>
//https://developers.google.com/youtube/iframe_api_reference

import test from "../util/youtube.js";

export default {
  name: "about",
  //TQtsnpgyp6E
  data() {
    var index = Math.floor(Math.random() * 10);
    return {
      videoId: test.arr[index],
    };
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("play!");
      console.log(test.arr);
    },
    pauseVideo() {
      this.player.pauseVideo();
    },
    pause() {
      console.log("stop!");
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<style></style>
