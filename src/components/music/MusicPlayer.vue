<template>
  <div class="player">
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

import test from "@/util/youtube.js";
import axios from "axios";

export default {
  name: "player",
  //TQtsnpgyp6E
  data() {
    var index = Math.floor(Math.random() * test.arrID.length);
    return {
      index: index,
      videoId: test.arrID[index],
      videoTitle: test.arrTitle[index],
      musics: [],
    };
  },
  mounted() {
    this.musics = JSON.parse(localStorage.music);
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
      var musicObject = {
        member_id: this.$cookies.get("user").data.member_id,
        song_id: this.musics[this.index].song_id,
      };

      console.log(musicObject);

      if (!this.musics[this.index].islike) {
        this.musics[this.index].islike = true;

        axios
          .post("http://localhost:8077/music/url", musicObject)
          .then((response) => {
            console.log(response);
            console.log(musicObject.song_id + "를 플레이리스트에 등록");
          });
      } else {
        this.musics[this.index].islike = false;

        axios
          .delete("http://localhost:8077/music/url", {
            data: {
              member_id: this.$cookies.get("user").data.member_id,
              song_id: this.musics[this.index].song_id,
            },
          })
          .then((response) => {
            console.log(response);
            console.log(musicObject.song_id + "를 플레이리스트에 등록해제");
          });
      }

      localStorage.music = JSON.stringify(this.musics);
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
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
