import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL, // 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径
  routes: [
    {
      path: "/app",
      name: "app",
      component: () => import("./views/App.vue")
    },
    {
      path: "/push",
      name: "push",
      component: () => import("./views/Push.vue")
    },
    {
      path: "/dev",
      name: "dev",
      component: () => import("./views/Dev.vue")
    },
    {
      path: "/manage",
      name: "manage",
      component: () => import("./views/Manage.vue")
    },
    {
      path: "/",
      redirect: "/app"
    },
    {
      path: "/table1",
      component: () => import("./test/table/table1.vue")
    },
    {
      path: "/table2",
      component: () => import("./test/table/table2.vue")
    },
    {
      path: "/table3",
      component: () => import("./test/table/table3.vue")
    },
    {
      path: "/table4",
      component: () => import("./test/table/table4.vue")
    },
    {
      path: "/table5",
      component: () => import("./test/table/table5.vue")
    },
    {
      path: "/table6",
      component: () => import("./test/table/table6.vue")
    },
    {
      path: "/table7",
      component: () => import("./test/table/table7.vue")
    },
    {
      path: "/table8",
      component: () => import("./test/table/table8.vue")
    },
    {
      path: "/table9",
      component: () => import("./test/table/table9.vue")
    },
    {
      path: "/table10",
      component: () => import("./test/table/table10.vue")
    },
    {
      path: "/table11",
      component: () => import("./test/table/table11.vue")
    }
  ]
});
