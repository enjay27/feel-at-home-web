<template>
  <div class="likelist">
    <br />
    <br />
    <br />
    <div class="heading_container heading_center">
      <h2>Likelist</h2>
    </div>
    <br />
    <br />
    <div class="list-body">
      <table>
        <tr>
          <th>Title</th>
        </tr>
        <tr v-for="item in items" :key="item.title">
          <td>
            <a
              target="_blank"
              :href="'https://www.youtube.com/watch?v=' + item.youtube_id"
              ><span v-html="item.title"></span
            ></a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Likelist",
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
        console.log("요청");
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
.likelist {
  background-color: white;
  z-index: 5;
}
.list-body {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
