import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import localCache from "../utils/cache";
import { mapMenusToRoutes } from "../utils/mapMenu";
import store from "../store";
import { firstMenu } from "../utils/mapMenu";
const routes: RouteRecordRaw[] = [
  {
    path: "/",

    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/Lo-gin.vue"),
    children: [],
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/main/My-main.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFind",
    component: () => import("../views/noFind/noFind.vue"),
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    if (!token) {
      return "/login";
    }
    if (to.path === "/main") {
      return firstMenu.url;
    }
  }
});
export default router;
