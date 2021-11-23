<template>
  <!-- header section strats -->
  <header class="header_section">
    <div class="container">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <router-link to="/" class="navbar-brand">
          <span> Feel at Home</span>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <router-link :to="{ name: 'Home' }" class="nav-link">
                Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Music' }" class="nav-link">
                Music</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Diary' }" class="nav-link">
                Diary</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'About' }" class="nav-link">
                About</router-link
              >
            </li>
          </ul>
          <div class="user_option">
            <a
              v-show="!isLogin"
              href="http://localhost:8888/login"
              class="user_link"
              style="cursor: pointer"
            >
              <i class="fa fa-user" aria-hidden="true"></i>
            </a>
            <button v-show="isLogin" @click="logout()" class="order_online">
              Logout
            </button>
            <router-link :to="{ name: 'Mypage' }" class="nav-link">
              <button v-show="isLogin" class="order_online">Mypage</button>
            </router-link>
            <button class="order_online">Share With Friends</button>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!-- end header section -->
</template>
<style>
.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  name: "NaviBar",
  data() {
    return {
      isLogin: false,
      user: null,
    };
  },
  methods: {
    logout() {
      this.$cookies.remove("user");
      this.$router.go();
    },
    mypage() {
      this.$router.push({ name: "Mypage" });
    },
  },
  created() {
    if (this.$cookies.isKey("user")) {
      const user = this.$cookies.get("user");
      this.user = user;
      this.isLogin = true;
      console.log(user);
    }
  },
};
</script>
