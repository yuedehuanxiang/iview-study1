import axios from "axios";
import { Spin, Notice } from "iview";

function startLoading() {
  // 自定义loading动画或者直接使用官方默认的
  // Spin.show({
  //   render: h => {
  //     return h("div", [
  //       h("Icon", {
  //         class: "demo-spin-icon-load",
  //         props: {
  //           type: "ios-loading",
  //           size: 18
  //         }
  //       }),
  //       h("div", "Loading")
  //     ]);
  //   }
  // });
  Spin.show();
}

function endLoading() {
  Spin.hide();
}

const ajax = axios.create({
  baseURL: "https://www.easy-mock.com/mock/5bc527578dab123bdd200d25/iview",
  timeout: 4000
});

// 请求拦截
ajax.interceptors.request.use(
  config => {
    // 加载动画
    startLoading();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
ajax.interceptors.response.use(
  response => {
    // 结束加载动画
    setTimeout(() => {
      endLoading();
    }, 500);
    // endLoading();
    return response;
  },
  error => {
    // 错误提醒
    endLoading();
    console.dir(error); // 根据你想捕获的错误类型，做进一步的判断
    Notice.info({
      title: "网络错误请重试"
      // desc: `${error.response.data}` 可以根据后台报错返回的内容格式做一个统一描述
    });

    return Promise.reject(error);
  }
);

export default ajax;
