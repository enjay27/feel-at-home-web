<template>
  <div class="player3">
    <youtube :video-id="videoId" ref="youtube" @playing="playing" />
    <!--<button @click="playVideo">play</button>
    <button @click="pauseVideo">pause</button> -->
    <div class="detail-box">
      <h2>{{ videoTitle }}</h2>
      <button class="likeBtn" v-on:click="likeButton">좋아요</button>
    </div>
  </div>
</template>

<script>
//https://developers.google.com/youtube/iframe_api_reference

import test from "@/util/youtube copy 2.js";

export default {
  name: "player3",
  //TQtsnpgyp6E
  data() {
    var index = Math.floor(Math.random() * 10);
    return {
      like: false,
      videoId: test.arrID[index],
      videoTitle: test.arrTitle[index],
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
    likeButton() {
      if (!this.like) {
        this.like = true;
        console.log(this.videoId + "를 플레이리스트에 등록");
        // this.videoId 를 통해 현재 내 플레이리스트로 ID 값을 넘겨줌
      } else {
        this.like = false;
        console.log(this.videoId + "를 플레이리스트에서 등록취소");
        // 등록 취소
      }
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player3;
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
</style>
