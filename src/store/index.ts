import { createStore, Store, useStore as usevuexStore } from "vuex";
import login from "./login/login";
import { IStoreType } from "./type";
const store = createStore({
  state() {
    return {
      name: "coderwhy",
      age: 18,
    };
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
  },
});
export function setupStore() {
  store.dispatch("login/loadLocalLogin");
}
export function useStore(): Store<IStoreType> {
  return usevuexStore();
}
export default store;
