<template>
  <div class="player2">
    <youtube :video-id="videoId" ref="youtube" @playing="playing" />
    <!--<button @click="playVideo">play</button>
    <button @click="pauseVideo">pause</button> -->
    <test q="this.$route.params.q"></test>
  </div>
</template>

<script>
//https://developers.google.com/youtube/iframe_api_reference

import test from "@/util/youtube copy.js";

export default {
  name: "player2",
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
      return this.$refs.youtube.player2;
    },
  },
  created() {
    console.log(test);
  },
};

//const q = this.$route.params.q;
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
