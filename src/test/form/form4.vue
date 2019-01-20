<template>
  <div style="padding: 32px 500px;">
    <h1>Form 表单组件的联动用法</h1>
    <br>
    <br>

    <Form ref="form" :model="form" :label-width="70">
      <FormItem label="信息">
        <Input v-model="form.message"/>
      </FormItem>
      <FormItem label="性别">
        <Select v-model="form.gender" @on-change="handleChangeGender">
          <Option value="male">男性</Option>
          <Option value="female">女性</Option>
        </Select>
      </FormItem>
      <FormItem label="城市">
        <Select v-model="form.city" style=" width: 150px" @on-change="handleChangeCity">
          <Option value="beijing">北京</Option>
          <Option value="shanghai">上海</Option>
        </Select>

        <Select v-model="form.area" style=" width: 150px" v-if="form.city !== ''">
          <template v-if="form.city === 'beijing'">
            <Option value="chaoyang" key="chaoyang">朝阳区</Option>
            <Option value="haidian" key="haidian">海淀区</Option>
          </template>
          <template v-if="form.city === 'shanghai'">
            <Option value="pudong" key="pudong">浦东新区</Option>
            <Option value="xuhui" key="xuhui">徐汇区</Option>
          </template>
        </Select>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        message: "",
        gender: "",
        city: "",
        area: ""
      }
    };
  },
  methods: {
    handleChangeGender(val) {
      if (val === "male") {
        this.form.message = "您好，先生";
      } else if (val === "female") {
        this.form.message = "您好，女士";
      }
    },
    handleChangeCity(val) {
      const area = val === "beijing" ? "chaoyang" : "pudong";
      console.log(area);
      this.form.area = area;
    }
  }
};
</script>
