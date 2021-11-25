<template>
  <div id="follow">
    <br />
    <br />
    <div class="container">
      <div id="stat" class="row">
        <div class="col-md-4">
          <div class="heading_container heading_center">
            <router-link :to="{ name: 'Search' }">
              <h2 style="padding-bottom: 5px; border-bottom: 2px solid black">
                Search
              </h2>
            </router-link>
          </div>
        </div>
        <div class="col-md-4">
          <div class="heading_container heading_center">
            <router-link :to="{ name: 'Following' }">
              <h2
                @follow="follow"
                style="padding-bottom: 5px; border-bottom: 2px solid black"
              >
                Following
              </h2>
            </router-link>
          </div>
        </div>
        <div class="col-md-4">
          <div class="heading_container heading_center">
            <router-link :to="{ name: 'Follower' }">
              <h2 style="padding-bottom: 5px; border-bottom: 2px solid black">
                Follower
              </h2>
            </router-link>
          </div>
        </div>
      </div>
      <!-- <button variant="primary" @click="search()">Search</button> -->
    </div>
    <div id="users">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      user: null,
      follower: 0,
      following: 0,
    };
  },
  created() {
    this.user = this.$cookies.get("user").data;
    this.follower = this.user.follower;
    this.following = this.user.following;
    console.log("user");
    console.log(this.user);
  },
  methods: {
    follow(num) {
      console.log("emit" + num);
      this.following += num;
      location.reload();
    },
  },
};
</script>

<style>
#follow {
  background-color: white;
  z-index: 5;
}
#stat {
  margin: 0 auto;
}
</style>
