import { Module } from "vuex";
import { ILoginState } from "./type";
import { IRootState } from "../type";
import { IAccount } from "../../service/login/type";
import localCache from "../../utils/cache";
import router from "@/router";
import { mapMenusToRoutes, mapMenusToPermissions } from "../../utils/mapMenu";
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoled,
} from "../../service/login/login";
const loginMoudle: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: [],
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeMenu(state, menus: any) {
      state.userMenus = menus;
      console.log("注册动态路由");
      const routes = mapMenusToRoutes(menus);
      //  console.log(routes);
      //  动态添加路由 将routes => router.main.chiidren
      routes.forEach((route) => {
        router.addRoute("main", route);
      });
      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(menus);
      state.permissions = permissions;
      console.log(permissions);
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 实现登陆逻辑
      const loginRequest = await accountLoginRequest(payload);
      console.log(loginRequest);

      const { id, token } = loginRequest.data;
      commit("changeToken", token);
      localCache.setCache("token", token);

      // 请求用户信息
      const userInfoRsult = await requestUserInfoById(id);
      console.log(userInfoRsult);

      const userInfo = userInfoRsult.data;
      localCache.setCache("userInfo", userInfo);
      commit("changeUserInfo", userInfo);
      //用户的菜单
      const userMenuResult = await requestUserMenusByRoled(userInfo.role.id);
      const userMenus = userMenuResult.data;
      console.log(userMenus);
      commit("changeMenu", userMenus);
      localCache.setCache("usermenu", userMenus);
      //  跳到首页
      router.push("/main");
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);
      }
      const userInfo = localCache.getCache("userInfo");
      if (token) {
        commit("changeUserInfo", userInfo);
      }
      const userMenus = localCache.getCache("usermenu");
      if (token) {
        commit("changeMenu", userMenus);
      }
    },
    // 手机登陆
    phoneLoginAction({ commit }, payload: any) {
      console.log("执行手机accla", payload);
    },
  },
};
export default loginMoudle;
