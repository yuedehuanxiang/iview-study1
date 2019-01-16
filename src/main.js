import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/iview.js";
import ajax from "./http";
import "./assets/index.less";

import devArticle from "./components/dev-article.vue";

Vue.prototype.$axios = ajax;

Vue.config.productionTip = false;

Vue.component("dev-article", devArticle);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
