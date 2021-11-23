<template>
  <div class="player">
    <youtube :video-id="videoId" ref="youtube" @playing="playing" />
    <!--<button @click="playVideo">play</button>
    <button @click="pauseVideo">pause</button> -->
    <h1>{{ $route.params.q }}</h1>
  </div>
</template>

<script>
//https://developers.google.com/youtube/iframe_api_reference

import test from "@/util/youtube.js";

export default {
  name: "player",
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
  created() {
    console.log(test);
    test.optionParams.q = this.$route.params.q;
    console.log(test.optionParams.q);
    console.log(test.arr[0]);
    test.request(test.url, test.dataArray);
  },
};
</script>

<style>
.music {
  z-index: 5;
}
.category {
  position: absolute;
  left: 50%;
}

.player {
  z-index: 5;
  position: absolute;
  top: 25%;
  left: 25%;
}
</style>
