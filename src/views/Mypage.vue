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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "mypage",
  data() {
    return {
      user: null,
      access_token: null,
    };
  },
  mounted() {
    this.user = this.$cookies.get("user").data;
    this.access_token = this.$cookies.get("user").access_token;
  },
};
</script>

<style>
h1 {
  border: white;
}
</style>
