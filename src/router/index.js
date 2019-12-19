import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Summary from "../views/Summary.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    // dynamic segments start with a colon
    {
      path: "/summary/:id",
      name: "showSummary",
      component: Summary,
      props: true
    }
  ]
});

export default router;
