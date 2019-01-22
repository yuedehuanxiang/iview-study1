<template>
  <div style="padding: 32px 500px">
    <h1>模态框组件 Modal - 异步提交不关闭</h1>
    <br>
    <br>

    <Button @click="modal = true">显示对话框</Button>

    <Modal v-model="modal" title="一个 Modal对话框" :loading="loading" @on-ok="handleOk">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modal: false,
      loading: true
    };
  },
  methods: {
    handleOk() {
      this.$Message.info("异步校验数据");
      setTimeout(() => {
        this.loading = false;
        this.$nextTick(() => {
          this.loading = true;
        });
      }, 2000);
    }
  }
};
</script>
