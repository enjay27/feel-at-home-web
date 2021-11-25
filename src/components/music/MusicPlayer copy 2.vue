<template>
  <div class="player">
    <youtube :video-id="videoId" ref="youtube" @playing="playing" />
    <!--<button @click="playVideo">play</button>
    <button @click="pauseVideo">pause</button> -->
    <div class="detail-box">
      <p id="pTag">{{ videoTitle }}</p>
      <div id="main-content">
        <div>
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" v-on:click="likeButton">
            <svg
              id="heart-svg"
              viewBox="467 392 58 57"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Group"
                fill="none"
                fill-rule="evenodd"
                transform="translate(467 392)"
              >
                <path
                  d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                  id="heart"
                  fill="#AAB8C2"
                />
                <circle
                  id="main-circ"
                  fill="#E2264D"
                  opacity="0"
                  cx="29.5"
                  cy="29.5"
                  r="1.5"
                />

                <g id="grp7" opacity="0" transform="translate(7 6)">
                  <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                  <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                </g>

                <g id="grp6" opacity="0" transform="translate(0 28)">
                  <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                  <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                </g>

                <g id="grp3" opacity="0" transform="translate(52 28)">
                  <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                  <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                </g>

                <g id="grp2" opacity="0" transform="translate(44 6)">
                  <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                  <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                </g>

                <g id="grp5" opacity="0" transform="translate(14 50)">
                  <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                  <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                </g>

                <g id="grp4" opacity="0" transform="translate(35 50)">
                  <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                  <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                </g>

                <g id="grp1" opacity="0" transform="translate(24)">
                  <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                  <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                </g>
              </g>
            </svg>
          </label>
        </div>
      </div>
      <!-- <button class="likeBtn" v-on:click="likeButton">좋아요</button> -->
    </div>
  </div>
</template>

<script>
//https://developers.google.com/youtube/iframe_api_reference

import test from "@/util/youtube copy 2.js";
import axios from "axios";

export default {
  name: "player3",
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
      return this.$refs.youtube.player3;
    },
  },
  created() {
    console.log(test);
  },
};

//const q = this.$route.params.q;
</script>

<style scoped>
.music {
  z-index: 5;
}
#pTag {
  font-family: "nanumsquare";
  font-size: 20px;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: #ffbe33;
}
.detail-box {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  font-family: arial;
}

#main-content {
  display: flex;
  background: white;
  align-items: center;
  justify-content: center;
  text-align: center;
}

h1 {
  font-size: 14px;
  font-weight: 400;
  margin: 10px 0 0 0;
  color: #888888;
}

a {
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  display: inline-block;
  text-decoration: none;
  color: #008a68;
}

svg {
  cursor: pointer;
  overflow: visible;
  width: 60px;
}
svg #heart {
  transform-origin: center;
  animation: animateHeartOut 0.3s linear forwards;
}
svg #main-circ {
  transform-origin: 29.5px 29.5px;
}

#checkbox {
  display: none;
}

#checkbox:checked + label svg #heart {
  transform: scale(0.2);
  fill: #e2264d;
  animation: animateHeart 0.3s linear forwards 0.25s;
}
#checkbox:checked + label svg #main-circ {
  transition: all 2s;
  animation: animateCircle 0.3s linear forwards;
  opacity: 1;
}
#checkbox:checked + label svg #grp1 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
#checkbox:checked + label svg #grp1 #oval1 {
  transform: scale(0) translate(0, -30px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
#checkbox:checked + label svg #grp1 #oval2 {
  transform: scale(0) translate(10px, -50px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
#checkbox:checked + label svg #grp2 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
#checkbox:checked + label svg #grp2 #oval1 {
  transform: scale(0) translate(30px, -15px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
#checkbox:checked + label svg #grp2 #oval2 {
  transform: scale(0) translate(60px, -15px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
#checkbox:checked + label svg #grp3 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
#checkbox:checked + label svg #grp3 #oval1 {
  transform: scale(0) translate(30px, 0px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
#checkbox:checked + label svg #grp3 #oval2 {
  transform: scale(0) translate(60px, 10px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
#checkbox:checked + label svg #grp4 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
#checkbox:checked + label svg #grp4 #oval1 {
  transform: scale(0) translate(30px, 15px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
#checkbox:checked + label svg #grp4 #oval2 {
  transform: scale(0) translate(40px, 50px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
#checkbox:checked + label svg #grp5 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
#checkbox:checked + label svg #grp5 #oval1 {
  transform: scale(0) translate(-10px, 20px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
#checkbox:checked + label svg #grp5 #oval2 {
  transform: scale(0) translate(-60px, 30px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
#checkbox:checked + label svg #grp6 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
#checkbox:checked + label svg #grp6 #oval1 {
  transform: scale(0) translate(-30px, 0px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
#checkbox:checked + label svg #grp6 #oval2 {
  transform: scale(0) translate(-60px, -5px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
#checkbox:checked + label svg #grp7 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
#checkbox:checked + label svg #grp7 #oval1 {
  transform: scale(0) translate(-30px, -15px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
#checkbox:checked + label svg #grp7 #oval2 {
  transform: scale(0) translate(-55px, -30px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
#checkbox:checked + label svg #grp2 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}
#checkbox:checked + label svg #grp3 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}
#checkbox:checked + label svg #grp4 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}
#checkbox:checked + label svg #grp5 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}
#checkbox:checked + label svg #grp6 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}
#checkbox:checked + label svg #grp7 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}

@keyframes animateCircle {
  40% {
    transform: scale(10);
    opacity: 1;
    fill: #dd4688;
  }
  55% {
    transform: scale(11);
    opacity: 1;
    fill: #d46abf;
  }
  65% {
    transform: scale(12);
    opacity: 1;
    fill: #cc8ef5;
  }
  75% {
    transform: scale(13);
    opacity: 1;
    fill: transparent;
    stroke: #cc8ef5;
    stroke-width: 0.5;
  }
  85% {
    transform: scale(17);
    opacity: 1;
    fill: transparent;
    stroke: #cc8ef5;
    stroke-width: 0.2;
  }
  95% {
    transform: scale(18);
    opacity: 1;
    fill: transparent;
    stroke: #cc8ef5;
    stroke-width: 0.1;
  }
  100% {
    transform: scale(19);
    opacity: 1;
    fill: transparent;
    stroke: #cc8ef5;
    stroke-width: 0;
  }
}
@keyframes animateHeart {
  0% {
    transform: scale(0.2);
  }
  40% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes animateHeartOut {
  0% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>
