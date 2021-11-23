<template>
  <div class="music">
    <div class="category">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
          <router-link :to="{ name: 'Player', params: { q: 'pleasure' } }" class="nav-link">
            Pleasure</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Player2', params: { q: 'depressed' } }" class="nav-link">
            Depressed</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Player3', params: { q: 'stirring' } }" class="nav-link">
            Stirring</router-link
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
.ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.li {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  border: 0;
  float: left;
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
