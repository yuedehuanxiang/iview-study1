<template>
  <div style="padding: 32px 500px;">
    <h1>Form 表单验证的常用验证规则</h1>
    <br>
    <br>

    <Form ref="form" :model="form" :rules="rules" :label-width="70">
      <FormItem label="输入框" prop="input">
        <Input v-model="form.input"/>
      </FormItem>

      <Button @click="handleSubmit">提交</Button>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        input: ""
      },
      rules: {
        input: [
          {
            required: true,
            message: "必填"
          },
          {
            trigger: "change", // change || blur
            type: "string",
            len: 5,
            message: "长度必须是五"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$Message.success("成功");
        } else {
          this.$Message.error("失败");
        }
      });
    }
  }
};
</script>
