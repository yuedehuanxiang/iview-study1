<template>
  <div style="padding: 32px 500px">
    <h1>不适用form自带的验证，自行验证数据</h1>
    <br>
    <br>

    <Form ref="form" :model="form" :label-width="70">
      <FormItem label="姓名">
        <Input v-model="form.name"/>
      </FormItem>
      <FormItem label="城市">
        <Select v-model="form.city">
          <Option value="北京">北京</Option>
          <Option value="上海">上海</Option>
        </Select>
      </FormItem>
      <Button @click="handleSubmit" :loading="isSubmit">提交</Button>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        city: ""
      },
      isSubmit: false
    };
  },
  methods: {
    handleSubmit() {
      if (this.isSubmit) return;
      const { name, city } = this.form;
      if (name === "") {
        this.$Message.error("请输入姓名");
        return;
      }
      if (city === "") {
        this.$Notice.error({
          title: "请选择城市"
        });
        return;
      }
      this.isSubmit = true;
    }
  }
};
</script>
