<template>
  <div id="search">
    <div class="container">
      <br />
      <div id="stat" class="row">
        <div class="col-md-1" />
        <div class="col-md-6">
          <input
            class="searchbar"
            placeholder="Find Other User And Follow!!"
            v-model="keyword"
          />
        </div>
      </div>
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
      keyword: "",
      user: null,
      users: [],
    };
  },
  watch: {
    keyword: {
      handler(val) {
        if (val) {
          this.user = this.$cookies.get("user").data;
          axios
            .get("http://localhost:8077/user", {
              params: {
                memberId: this.user.member_id,
                name: val,
              },
            })
            .then((response) => {
              this.users = response.data;
              console.log(this.users);
            });
        } else {
          this.users = [];
        }
      },
    },
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
.searchbar {
  width: 100%;
}
</style>
