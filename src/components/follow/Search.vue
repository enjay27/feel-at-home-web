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
      <div id="users" class="row">
        <div class="col-md-1" />
        <div class="col-md-6">
          <div class="card" v-for="(item, index) in searchUser" :key="index">
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
                @click="follow(item.member_id)"
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
      searchUser: [],
      user: null,
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
              this.searchUser = response.data;
              console.log(this.searchUser);
            });
        } else {
          this.searchUser = [];
        }
      },
    },
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
.searchbar {
  width: 100%;
}
</style>
