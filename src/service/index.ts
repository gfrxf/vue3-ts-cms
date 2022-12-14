import HYRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
import localCache from "../utils/cache";
const hyRquest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache("token");
      // console.log(token,'token');

      if (token) {
        console.log(token);

        config.headers.Authorization = `Bearer ${token}`;
        // console.log( config.headers.Authorization);
      }
      // console.log("请求成功的拦截");
      return config;
    },
    requestInterceptorCatch: (err) => {
      // console.log("请求失败的拦截");
      return err;
    },
    responseInterceptor: (config) => {
      // console.log("响应成功的拦截");
      return config;
    },
    responseInterceptorCatch: (err) => {
      // console.log("响应失败的拦截");
      return err;
    },
  },
});
export default hyRquest;
