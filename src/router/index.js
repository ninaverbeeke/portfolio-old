import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "vue-nprogress";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/work",
    name: "Work",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Work.vue"),
  },
  {
    path: "/graduation_assignment",
    name: "GraduationAssignment",
    component: () =>
      import("../views/portfolio_items/GraduationAssignment.vue"),
  },
  {
    path: "/alarm_clock_mat",
    name: "AlarmClockMat",
    component: () => import("../views/portfolio_items/AlarmClockMat.vue"),
  },
  {
    path: "/exoot",
    name: "EXOOT",
    component: () => import("../views/portfolio_items/EXOOT.vue"),
  },
  {
    path: "/hermes",
    name: "Hermes",
    component: () => import("../views/portfolio_items/Hermes.vue"),
  },
  {
    path: "/minimax_game",
    name: "MinimaxGame",
    component: () => import("../views/portfolio_items/MinimaxGame.vue"),
  },
  {
    path: "/molecules_game",
    name: "MoleculesGame",
    component: () => import("../views/portfolio_items/MoleculesGame.vue"),
  },
  {
    path: "/vr_application",
    name: "VRApp",
    component: () => import("../views/portfolio_items/VRApp.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router;
