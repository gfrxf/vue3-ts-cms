import { createApp } from "vue";
import RouteApp from "./App.vue";
import router from "./router";
import store from "./store/index";
import { registerApp } from "./global/index";
import './service/axios-demo';
// 全局引用
// import ElementPlus from 'element-plus'
import "element-plus/theme-chalk/index.css";

const app = createApp(RouteApp);

registerApp(app);
app.use(router);
app.use(store);
app.mount("#app");
