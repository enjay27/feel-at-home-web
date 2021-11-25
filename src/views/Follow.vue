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
              <h2 style="padding-bottom: 5px; border-bottom: 2px solid black">
                Following : {{ user.following }}
              </h2>
            </router-link>
          </div>
        </div>
        <div class="col-md-4">
          <div class="heading_container heading_center">
            <router-link :to="{ name: 'Follower' }">
              <h2 style="padding-bottom: 5px; border-bottom: 2px solid black">
                Follower : {{ user.followers }}
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
    };
  },
  created() {
    this.user = this.$cookies.get("user").data;
    console.log("user");
    console.log(this.user);
    // axios
    //   .get(`http://localhost:8077/user/follower/${this.user.member_id}`)
    //   .then((response) => {
    //     console.log("follower " + response.data.length);
    //     this.follower = response.data;
    //     console.log(this.follower);
    //   })
    //   .then(() => {
    //     return axios.get(
    //       `http://localhost:8077/user/following/${this.user.member_id}`
    //     );
    //   })
    //   .then((response) => {
    //     console.log("following " + response.data.length);
    //     this.following = response.data;
    //     console.log(this.following);
    //   });
  },
  methods: {
    search() {
      console.log("search : " + this.keyword);
      if (this.keyword) {
        // axios
        //   .get(`http://localhost:8077/user?name=${this.keyword}`)
        //   .then((response) => {
        //     this.searchUser = response;
        //     console.log(this.searchUser);
        //   });
        this.$router.push({
          name: "Search",
          params: { keyword: this.keyword },
        });
      }
    },
    follow(memberId) {
      console.log("following " + memberId);
    },
  },
};
</script>

<style scoped>
h2 {
  font-family: "nanumsquare";
}
#follow {
  background-color: white;
  z-index: 5;
}
#stat {
  margin: 0 auto;
}
</style>
