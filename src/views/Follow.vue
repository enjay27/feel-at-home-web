<template>
  <div id="follow">
    <br />
    <br />
    <input placeholder="Enter User's Name" v-model="keyword" />
    <button variant="primary" @click="search()">Search</button>
    <br />
    aasdfsadf
    <br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      follower: [],
      following: [],
      user: null,
      keyword: "",
      searchUser: [],
    };
  },
  created() {
    this.user = this.$cookies.get("user").data;
    console.log("user");
    console.log(this.user.member_id);
    axios
      .get(`http://localhost:8077/user/follower/${this.user.member_id}`)
      .then((response) => {
        console.log("follower " + response.data.length);
        this.follower = response.data;
        console.log(this.follower);
      })
      .then(() => {
        return axios.get(
          `http://localhost:8077/user/following/${this.user.member_id}`
        );
      })
      .then((response) => {
        console.log("following " + response.data.length);
        this.following = response.data;
        console.log(this.following);
      });
  },
  methods: {
    search() {
      console.log("search : " + this.keyword);
      if (this.keyword) {
        axios
          .get(`http://localhost:8077/user?name=${this.keyword}`)
          .then((response) => {
            this.searchUser = response;
            console.log(this.searchUser);
          });
      }
    },
  },
};
</script>

<style>
#follow {
  background-color: white;
  z-index: 5;
}
</style>
