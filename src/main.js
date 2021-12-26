import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueCookies from "vue-cookies";
//쿠키를 사용한다.
Vue.use(VueCookies);

//쿠키의 만료일은 7일이다. (글로벌 세팅)
Vue.$cookies.config("3d");

// var sessionOptions = {
//   persist: true
// }
// Vue.use(VueSession, sessionOptions);
// import Meta from "vue-meta";

Vue.config.productionTip = false;
// Vue.use(Meta, {
//   attribute: "data-vue-meta",
// });
new Vue({
  router,

  render: (h) => h(App),
}).$mount("#app");