<template>
  <section class="slider_section">
    <div class="container">
      <div class="detail-box">
        <h1>Logged in as {{ user.display_name }}</h1>
        <div class="media">
          <div class="media-body">
            <dl class="dl-horizontal">
              <dt>Display name</dt>
              <dd class="clearfix">{{ user.display_name }}</dd>
              <dt>Id</dt>
              <dd>{{ user.id }}</dd>
              <dt>Email</dt>
              <dd>{{ user.email }}</dd>
              <dt>Spotify Mypage</dt>
              <dd>
                <a :href="user.external_urls.spotify">Go To Spotify</a>
              </dd>
              <dt>Country</dt>
              <dd>{{ user.country }}</dd>
            </dl>
          </div>
        </div>
        <div class="listDiv">
          <div class="btn-box">
            <router-link :to="{ name: 'Likelist' }" class="btn1">
              Go to Likelist</router-link
            >
            <!-- <a href="" class="btn1"> Discover Your Feeling </a> -->
          </div>
          <div class="btn-box">
            <router-link :to="{ name: 'Statics' }" class="btn1">
              Go to EmotionChart</router-link
            >
            <!-- <a href="" class="btn1"> Discover Your Feeling </a> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "mypage",
  data() {
    this.user = this.$cookies.get("user").data;

    return {
      user: null,
      access_token: null,
      items: null,
    };
  },
  mounted() {
    this.user = this.$cookies.get("user").data;
    this.access_token = this.$cookies.get("user").access_token;
    axios
      .get(`http://localhost:8077/user/likelist/${this.user.member_id}`)
      .then((response) => {
        console.log(this.user.member_id);
        console.log(response.data);
        this.items = response.data;
      });
  },
};
</script>

<style>
h1 {
  border: white;
}
.listDiv {
  display: flex;
}
.btn-box {
  margin-right: 10px;
}
</style>
