<template>
  <div style="padding: 32px 500px">
    <h1>使用Select 组件封装一个省市区联动选择器</h1>
    <br>
    <br>

    <Select
      v-model="province"
      placeholder="选择省/直辖市"
      style="width: 150px;margin-right: 30px"
      @on-change="handleChange"
    >
      <Option v-for="(value, key) in areaData['86']" :key="key" :value="key">{{ value }}</Option>
    </Select>

    <Select v-model="city" placeholder="选择市/区" style="width: 150px" :disabled="!province">
      <Option v-for="(value, key) in areaData[province]" :key="key" :value="key">{{ value }}</Option>
    </Select>
  </div>
</template>
<script>
import areaData from "../../area-data.js";
export default {
  data() {
    return {
      areaData,
      province: "",
      city: ""
    };
  },
  methods: {
    handleChange() {
      this.city = Object.keys(this.areaData[this.province])[0];
    }
  }
};
</script>
