<template>
  <div class="home">
    <p>{{url}}</p>
    <p>{{environment}}</p>
    <p>{{local}}</p>
    <Button type="primary">button222</Button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      url: process.env.VUE_APP_URL, // 自定义的环境变量，在开发模式和生产模式时会根据配置文件自动做变化
      environment: process.env.NODE_ENV, // vue预设好的环境变量，开发和生产时分别是 "development" 和 "production"
      local: process.env.VUE_APP_local // 只在本地开发环境有效的变量，不会被git追踪
    };
  },
  components: {},
  mounted() {
    // this.$axios({
    //   method: "get",
    //   url: "https://www.easy-mock.com/mock/5bc527578dab123bdd200d25/iview/list"
    // }).then(res => {
    //   console.log(res.data);
    // });
  }
};
</script>

<style lang="less" scoped>
.home {
  text-align: center;
  p {
    color: red;
  }
}
</style>
