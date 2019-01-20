<template>
  <div style="padding: 32px 500px">
    <h1>iview 表单组件的element-id 属性和 FormItem 的 label-for 属性用法</h1>
    <br>
    <br>

    <Form ref="form" :model="form" :label-width="70">
      <FormItem label="输入框" label-for="element1">
        <Input v-model="form.input" element-id="element1"/>
      </FormItem>
      <FormItem label="日期" label-for="element2">
        <DatePicker v-model="form.date" element-id="element2"></DatePicker>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        input: "",
        date: ""
      }
    };
  }
};
</script>
