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
            <li class="nav-item">
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
            <a
              v-show="isLogin"
              @click="logout()"
              class="tooltips"
              style="color: white; cursor: pointer"
            >
              <i class="fas fa-sign-out-alt" aria-hidden="true"></i>
              <span class="tooltipstext">Logut</span>
            </a>

            <router-link :to="{ name: 'Mypage' }">
              <a v-show="isLogin" class="tooltips" style="color: white"
                ><i class="fas fa-house-user"></i>
                <span class="tooltipstext">MyPage</span></a
              >
              <!-- <button v-show="isLogin" class="order_online">Mypage</button> -->
            </router-link>

            <router-link :to="{ name: 'Follow' }">
              <button class="order_online">Share With Friends</button>
            </router-link>
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
      //this.$cookies.set("키", "값", "만료일");
      const user = this.$cookies.get("user");
      this.user = user;
      this.isLogin = true;
      console.log(user);
    }
  },
};
</script>
<style>
.tooltips {
  position: relative;
  display: inline-block;
}

.tooltips .tooltipstext {
  visibility: hidden;

  background-color: white;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  width: 120px;
  top: 100%;
  left: 50%;
  margin-left: -60px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltips:hover .tooltipstext {
  visibility: visible;
}
</style>
