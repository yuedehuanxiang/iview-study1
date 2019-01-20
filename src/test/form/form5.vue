<template>
  <div style="padding: 32px 500px">
    <h1>第三方表单组件（自定义的表单组件）与 iview form 的验证集成</h1>
    <br>
    <br>

    <Form ref="form" :model="form" :rules="rules" :label-width="70" @submit.native.prevent>
      <FormItem prop="number">
        <number v-model="form.number"></number>
      </FormItem>
      <Button @click="handleSubmit">提交</Button>
    </Form>
  </div>
</template>
<script>
import Number from "../../components/number";
export default {
  components: { Number },
  data() {
    return {
      form: {
        number: 1
      },
      rules: {
        number: [
          {
            type: "number",
            min: 3,
            trigger: "change"
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
