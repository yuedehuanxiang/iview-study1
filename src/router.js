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
    },
    {
      path: "/table12",
      component: () => import("./test/table/table12.vue")
    },
    {
      path: "/form1",
      component: () => import("./test/form/form1.vue")
    },
    {
      path: "/form2",
      component: () => import("./test/form/form2.vue")
    },
    {
      path: "/form3",
      component: () => import("./test/form/form3.vue")
    },
    {
      path: "/form4",
      component: () => import("./test/form/form4.vue")
    },
    {
      path: "/form5",
      component: () => import("./test/form/form5.vue")
    },
    {
      path: "/form6",
      component: () => import("./test/form/form6.vue")
    },
    {
      path: "/form7",
      component: () => import("./test/form/form7.vue")
    },
    {
      path: "/form8",
      component: () => import("./test/form/form8.vue")
    },
    {
      path: "/form9",
      component: () => import("./test/form/form9.vue")
    }
  ]
});
