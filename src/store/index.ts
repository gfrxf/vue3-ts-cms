import { createStore } from "vuex";
import login from './login/login'
const store = createStore({
  state() {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
});
export function setupStore (){
  store.dispatch('login/loadLocalLogin')
}
export default store;
