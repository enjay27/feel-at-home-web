<template>
  <div id="follower">
    <div class="container">
      <br />
      <div id="users" class="row">
        <div class="col-md-1" />
        <div class="col-md-6">
          <div class="card" v-for="(item, index) in users" :key="index">
            <div class="card-body">
              <h4 class="card-title">
                <div class="row">
                  <div class="col-md-6">
                    {{ item.display_name }}
                  </div>
                  <!-- <div class="col-md-2">
                    <b-button
                      block
                      v-show="!item.follow"
                      style="cursor: pointer"
                      @click="follow(index)"
                      class="btn btn-outline-warning"
                    >
                      <router-link
                        :to="{
                          name: 'Likelist',
                          params: { member_id: item.member_id },
                        }"
                      >
                        Likelist</router-link
                      >
                    </b-button>
                  </div>
                  <div class="col-md-3">
                    <b-button
                      block
                      v-show="!item.follow"
                      style="cursor: pointer"
                      @click="follow(index)"
                      class="btn btn-outline-info"
                    >
                      <router-link
                        :to="{
                          name: 'Statics',
                          params: { member_id: item.member_id },
                        }"
                      >
                        EmotionChart</router-link
                      >
                    </b-button>
                  </div> -->
                </div>
              </h4>
              <p class="card-text">
                {{ item.email }}
              </p>
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
      user: null,
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
#follower {
  background-color: white;
  z-index: 10;
}

#title {
  color: black;
}
</style>
