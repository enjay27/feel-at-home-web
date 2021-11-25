<template>
  <div id="following">
    <div class="container">
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
                @click="follow(index)"
                class="btn btn-primary"
                >Follow</a
              >
              <a
                v-show="item.follow"
                style="cursor: pointer"
                @click="unfollow(index)"
                class="btn btn-danger"
                >Unfollow</a
              >
            </div>
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
      .get(`http://localhost:8077/user/following/${this.user.member_id}`)
      .then((response) => {
        console.log("following " + response.data.length);
        this.users = response.data;
        console.log(this.users);
      });
  },
  methods: {
    follow(index) {
      console.log("follow " + this.users[index].member_id);
      var params = {
        memberId: this.user.member_id,
        followId: this.users[index].member_id,
      };
      axios.post("http://localhost:8077/user/follow", params);
      this.users[index].follow = true;
      this.$emit("follow", 1);
    },
    unfollow(index) {
      console.log("unfollow " + this.users[index].member_id);
      axios.delete("http://localhost:8077/user/follow", {
        params: {
          memberId: this.user.member_id,
          followId: this.users[index].member_id,
        },
      });
      this.users[index].follow = false;
      this.$emit("follow", -1);
    },
  },
};
</script>

<style>
#following {
  background-color: white;
  z-index: 10;
}
</style>
