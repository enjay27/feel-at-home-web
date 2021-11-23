<template>
  <div class="music">
    <div class="category">
      <ul class="link ul">
        <li class="nav-item">
          <router-link :to="{ name: 'Player', params: { q: 'pleasure' } }" class="nav-link">
            Happy</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Player2', params: { q: 'depressed' } }" class="nav-link">
            Sad</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Player3', params: { q: 'stirring' } }" class="nav-link">
            Soso</router-link
          >
        </li>
      </ul>
    </div>

    <div>
      <router-view></router-view>
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
.music {
  z-index: 5;
}
.category {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -15%);
}
.category > ul li {
  float: left;
}
.nav-link {
  color: white;
}
.nav-link:hover {
  color: #ffbe33;
}
.player {
  z-index: 5;
  position: absolute;
  top: 25%;
  left: 25%;
}
.player2 {
  z-index: 5;
  position: absolute;
  top: 25%;
  left: 25%;
}
.player3 {
  z-index: 5;
  position: absolute;
  top: 25%;
  left: 25%;
}
</style>
