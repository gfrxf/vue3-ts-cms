// console.log(111);
import axios from "axios";
// axios 就是一个实例
axios.defaults.baseURL = "http://httpbin.org";
axios.defaults.timeout = 10000;
// axios.defaults.headers = {}
// axios
//   .get("/get", {
//     params: {
//       name: "codewhy",
//       age: 18,
//     },
//   })
//   .then((res) => {
//     console.log(res.data);
//   });
// axios.all 多个请求同时回来
axios
  .all([
    axios.get("/get", { params: { name: "codewhy", age: 18 } }),
    axios.post("/post", { data: { name: "codewhy", age: 18 } }),
  ])
  .then((res) => {
    console.log(res);
  });
// axios拦截器
//  axios.interceptors.request.use(fn1,fn2)
// fn1是请求成功会执行的函数，fn2是请求失败后会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 可以在这个地方进行一些操作
    console.log("请求成功的拦截");
    return config;
  },
  (err) => {
    console.log("请求发生错误");

    return err;
  }
);
// 数据响应成功（服务器正常的返回数据 20X）
axios.interceptors.response.use(
  (res) => {
    console.log("响应成功的拦截");

    return res;
  },
  (err) => {
    console.log(err);
    return err;
  }
);
