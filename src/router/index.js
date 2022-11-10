import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      // categories
      path: "/categories",
      name: "categories",
    },
    {
      // pricing
      path: "/pricing",
      name: "pricing",
    },
  ],
});

export default router;
