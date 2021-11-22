import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSession from 'vue-session'

var sessionOptions = {
  persist: true
}
Vue.use(VueSession, sessionOptions)
// import Meta from "vue-meta";

Vue.config.productionTip = false;
// Vue.use(Meta, {
//   attribute: "data-vue-meta",
// });
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
