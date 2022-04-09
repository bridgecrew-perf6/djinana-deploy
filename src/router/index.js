import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView";
import EnqueteView from "../views/EnqueteView";
import SignalerView from "../views/SignalerView";
import PartenaireView from "../views/PartenaireView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/enquete",
    name: "enquete",
    component: EnqueteView,
  },
  {
    path: "/signaler",
    name: "signaler",
    component: SignalerView,
  },
  {
    path: "/partenaire",
    name: "Partenaire",
    component: PartenaireView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
