<template>
  <div style="padding: 32px 500px">
    <h1>Tab标签页关闭前二次确认</h1>
    <br>
    <br>

    <Tabs type="card" closable @on-tab-remove="handleTabRemove" :beforeRemove="handleBeforeRemove">
      <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
      <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
      <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
    </Tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab0: true,
      tab1: true,
      tab2: true
    };
  },
  methods: {
    handleTabRemove(name) {
      this["tab" + name] = false;
    },
    handleBeforeRemove(index) {
      return new Promise(resolve => {
        this.$Modal.confirm({
          title: "关闭确认",
          content: "<p>您确认关闭标签" + (index + 1) + "</p>",
          onOk: () => {
            resolve();
          }
        });
      });
    }
  }
};
</script>
