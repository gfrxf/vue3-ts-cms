import { Module } from "vuex";
import { IRootState } from "@/store/type";
import { ISystemState } from "./type";
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData,
} from "@/service/main/system/system";
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
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
    changeGoodsList(state, list: any[]) {
      state.goodsList = list;
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count;
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list;
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count;
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
          case "goods":
            return state.goodsList;
          case "menu":
            return state.menuList;
        }
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "users":
            return state.userCount;
          case "role":
            return state.roleCount;
          case "goods":
            return state.goodsCount;
          case "menu":
            return state.menuCount;
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
        case "goods":
          commit(`changeGoodsList`, list);
          commit(`changeGoodsCount`, totalCount);
          break;
        case "menu":
          commit(`changeMenuList`, list);
          commit(`changeMenuCount`, totalCount);
          break;
      }
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      // 1.获取pageName和id
      // pageName -> /users
      // id -> /users/id
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      // 2.调用删除网络请求
      await deletePageData(pageUrl);
      // 3.重新请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
    },
    async createPageDataActio({ dispatch }, payload) {
      // 1.创建数据的请求
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;
      await createPageData(pageUrl, newData);
      // 2.请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
    },
    async editPageDataAction({ dispatch }, payload: any) {
      // 1.编辑数据的请求
      const { pageName, editData, id } = payload;
      console.log(editData);
      const pageUrl = `/${pageName}/${id}`;
      //  const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData);
      // 2.请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
    },
    // async editPageDataAction({ dispatch }, payload: any) {
    //   // 1.编辑数据的请求
    //   const { pageName, editData, id } = payload
    //   console.log(editData)
    //   const pageUrl = `/${pageName}/${id}`
    //   await editPageData(pageUrl, editData)

    //   // 2.请求最新的数据
    //   dispatch('getPageListAction', {
    //     pageName,
    //     queryInfo: {
    //       offset: 0,
    //       size: 10
    //     }
    //   })
    // }
  },
};
export default systemModule;
