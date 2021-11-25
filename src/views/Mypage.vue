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
              <dt>Spotify URI</dt>
              <dd>
                <a :href="user.external_urls.spotify">{{
                  user.external_urls.spotify
                }}</a>
              </dd>
              <dt>Link</dt>
              <dd>
                <a :href="user.href">{{ user.href }}</a>
              </dd>
              <dt>Country</dt>
              <dd>{{ user.country }}</dd>
            </dl>
          </div>
          <div class="list-body">
            <table>
              <tr>
                <th>Title</th>
              </tr>
              <tr v-for="item in items" :key="item.title">
                <td><span v-html="item.title"></span></td>
              </tr>
            </table>
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
</style>
