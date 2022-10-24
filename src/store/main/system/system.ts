import { Module } from "vuex";
import { IRootState } from "@/store/type";
import { ISystemState } from "./type";
import { getPageListData } from "@/service/main/system/system";
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
    };
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list;
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count;
    },
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "users":
            return state.userList;
          case "role":
            return state.roleList;
        }
      };
    },
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1.获取pageUrl
      const pageName = payload.pageName;
      // switch (pageName) {
      //   case 'users':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }
      const pageUrl = `/${pageName}/list`;
      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);
      // console.log(pageResult);
      // 3.将数据存储到state中
      const { list, totalCount } = pageResult.data;
      // commit('changeUserList',list)
      // commit('changeUserCount',totalCount)
      switch (pageName) {
        case "users":
          commit(`changeUserList`, list);
          commit(`changeUserCount`, totalCount);
          break;
        case "role":
          commit(`changeRoleList`, list);
          commit(`changeRoleCount`, totalCount);
          break;
      }
    },
  },
};
export default systemModule;
