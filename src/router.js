import { createRouter, createWebHistory } from "vue-router";
import GameArea from "./pages/GameArea.vue";
import LoginPage from "./pages/LoginPage.vue";
import Authenticated from "./pages/Authenticated.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Authenticated,
      children: [
        { name: "game", path: "", component: GameArea }
      ],
    },
    { name: "login", path: "/login", component: LoginPage },
  ],
});

export default router;
