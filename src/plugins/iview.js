import Vue from "vue";
import iView from "iview";

// import locale from "iview/dist/locale/en-US";

Vue.use(iView, {
  // 在这里可以做iview组件全局配置目前只支持size和transfer俩个属性
  transfer: true // 可以解决外层div挡住了里面组件显示，导致超出部分被隐藏的问题
  // locale // 配置国际化语言包
});

import "../iview-variables.less";
