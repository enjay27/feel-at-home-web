<template>
  <div id="follower">
    <br />
    <div id="users" class="row">
      <div class="col-md-1" />
      <div class="col-md-6">
        <div class="card" v-for="(item, index) in users" :key="index">
          <div class="card-body">
            <h4 class="card-title">{{ item.display_name }}</h4>
            <p class="card-text">{{ item.email }}</p>
            <a
              v-show="!item.follow"
              style="cursor: pointer"
              @click="follow(item.member_id)"
              class="btn btn-primary"
              >Follow</a
            >
            <a
              v-show="item.follow"
              style="cursor: pointer"
              @click="unfollow(item.member_id)"
              class="btn btn-danger"
              >Unfollow</a
            >
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.user = this.$cookies.get("user").data;
    axios
      .get(`http://localhost:8077/user/follower/${this.user.member_id}`)
      .then((response) => {
        console.log("follower " + response.data.length);
        this.users = response.data;
        console.log(this.users);
      });
  },
  methods: {
    follow(memberId) {
      console.log(memberId);
    },
    unfollow(memberId) {
      console.log(memberId);
    },
  },
};
</script>

<style>
#follower {
  background-color: white;
  z-index: 10;
}
</style>
