import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Diary from "@/views/Diary.vue";
import Music from "@/views/Music.vue";
import Calendar from "@/components/diary/Calendar.vue";
import Statics from "@/components/diary/Statics.vue";
import VueYoutube from "vue-youtube";
import Player from "@/components/music/MusicPlayer.vue";
import Player2 from "@/components/music/MusicPlayer copy.vue";
import Player3 from "@/components/music/MusicPlayer copy 2.vue";
import About from "@/views/About.vue";
import Mypage from "@/views/Mypage.vue";

Vue.use(VueRouter);
Vue.use(VueYoutube);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/diary",
    name: "Diary",
    component: Diary,
    redirect: "/diary/calendar",
    children: [
      {
        path: "calendar",
        name: "Calendar",
        component: Calendar,
      },
      {
        path: "statics",
        name: "Statics",
        component: Statics,
      },
    ],
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
    props: true,
    children: [
      {
        path: "player",
        name: "Player",
        component: Player,
      },
      {
        path: "player2",
        name: "Player2",
        component: Player2,
      },
      {
        path: "player3",
        name: "Player3",
        component: Player3,
      },
    ],
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
