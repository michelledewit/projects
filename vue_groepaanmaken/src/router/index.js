import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/group-list",
    name: "Group List",
    component: () => import("../views/GroupList.vue")
  },
  {
    path: "/my-group",
    name: "My Group",
    component: () => import("../views/MyGroup.vue")
  },
  {
    path: "/progress",
    name: "Progress",
    component: () => import("../views/Progress.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue")
  },
  {
    path: "/training",
    name: "Training",
    component: () => import("../views/Training.vue")
  },
  {
    path: "/group-create",
    name: "Group Create",
    component: () => import("../views/GroupCreate.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
