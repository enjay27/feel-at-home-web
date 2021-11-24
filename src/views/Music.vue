<template>
  <div class="music">
    <br />
    <br />
    <br />
    <div class="heading_container heading_center">
      <h2>Music</h2>
    </div>
    <br />
    <br />
    <div class="musicDiv">
      <div class="category">
        <ul class="category_ul">
          <li>
            <router-link
              :to="{ name: 'Player', params: { q: 'pleasure' } }"
              class="nav-link-music"
            >
              Happy</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Player2', params: { q: 'depressed' } }"
              class="nav-link-music"
            >
              Sad</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Player3', params: { q: 'relexed' } }"
              class="nav-link-music"
            >
              Soso</router-link
            >
          </li>
        </ul>
      </div>
      <br />
      <div id="musicPlayerDiv">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "music",
  params: {
    q: String,
  },
};
</script>

<style>
#musicPlayerDiv {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.musicDiv {
  display: block;
}
.category_ul {
  margin: 0;
  padding: 0;
}
.music {
  background-color: white;
  z-index: 5;
  height: 700px;
}
.category {
  /* position: absolute;
  left: 50%;
  top: 15%; */
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: translate(-50%, -15%); */
}
.category > ul li {
  list-style: none;
  float: left;
}
.nav-link-music {
  padding: 5px 20px;
  /* background-color: #ffbe33; */
  color: black;
  border-radius: 45px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 2px solid #ffbe33;
  margin: 10px;
}
.nav-link-music:hover {
  background-color: #ffbe33;
}
.player {
  border: 1px solid #cbd5e0;
  padding: 10px;
  border-radius: 7px;
  margin-top: 20px;
}
</style>
