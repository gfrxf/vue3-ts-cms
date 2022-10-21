import { createApp } from "vue";
import RouteApp from "./App.vue";
import router from "./router";
import store from "./store/index";
import { registerApp } from "./global/index";
import "./service/axios-demo";
import hyRquest from "./service/index";
import "normalize.css";
import "./assets/css/index.css";
import { setupStore } from "./store/index";
// 全局引用
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "element-plus/theme-chalk/index.css";
import { tr } from "element-plus/es/locale";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(RouteApp);

registerApp(app);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
setupStore();
app.use(router);
app.use(store);

app.use(ElementPlus);
app.mount("#app");

console.log(process.env.VUE_APP_BASE_URL);
console.log(process.env.VUE_APP_BASE_NAME);
// hyRquest.request({
//   url:'/home/multidate',
//   method:'GET',
//   interceptors:{
//     requestInterceptor:(config) =>{
//       console.log("单独请求的config");

//       return config
//     },
//     responseInterceptor:(res) =>{
//       console.log("单独响应的res");
//       return res

//     }
//   }
// })
interface DataTYpe {
  data: any;
  returnCode: string;
  success: boolean;
}
// hyRquest
//   .request<DataTYpe>({
//     url: "/home/multidate",
//     method: "GET",
//     showLoading: true,
//   })
//   .then((res) => {
//     console.log(res.data);
//     console.log(res.returnCode);
//     console.log(res.success);
//   });
