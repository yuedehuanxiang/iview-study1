<template>
  <div id="app">
    <Menu :active-name="activeName">
      <MenuItem to="/home" name="/home">home</MenuItem>
      <MenuItem to="/about" name="/about">about</MenuItem>
    </Menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeName: this.$route.path
    };
  },
  components: {},
  methods: {},
  watch: {
    $route() {
      this.activeName = this.$route.path;
    }
  },
  mounted() {}
};
</script>

<style>
</style>
