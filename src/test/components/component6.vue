<template>
  <div style="padding: 32px 500px">
    <h1>在某个元素中展开Drawer 组件（非全屏）</h1>
    <br>
    <br>

    <div class="container">
      <Button @click="value = true">open</Button>

      <Drawer v-model="value" title="基本的抽屉标题" :transfer="false" inner scrollable>
        <p>一些内容。。。</p>
        <p>一些内容。。。</p>
        <p>一些内容。。。</p>
      </Drawer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false
    };
  }
};
</script>
<style scoped>
.container {
  width: 500px;
  height: 500px;
  border: 1px solid #444;
  position: relative;
}
/* body {
  height: 3000px;
} */
</style>
