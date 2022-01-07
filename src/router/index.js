import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FAQ.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/creators",
    name: "Creaors",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Creators.vue"),
  },
  {
    path: "/update-user",
    name: "UpdateUser",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UpdateUser.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/create-room",
    name: "CreateRoom",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateRoom.vue"),
  },
  {
    path: "/topics",
    name: "Topics",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Topics.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
