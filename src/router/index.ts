import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("../views/login/Lo-gin.vue"),
  },
  {
    path: "/main",
    component: () => import("../views/main/My-main.vue"),
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
