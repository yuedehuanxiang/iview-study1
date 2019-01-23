<template>
  <div style="padding: 32px 500px">
    <h1>多个 DatePicker 联动的用法（联动禁用）</h1>
    <br>
    <br>

    <DatePicker v-model="startDate" @on-change="handleChange"></DatePicker>
    <DatePicker v-model="endDate" :disabled="startDate ==''" :options="options" ref="endDate"></DatePicker>
  </div>
</template>
<script>
export default {
  methods: {
    handleChange() {
      if (this.startDate !== "") {
        this.$refs.endDate.handleFocus();
        if (this.endDate < this.startDate) {
          this.endDate = "";
        }
      } else {
        this.endDate = "";
      }
    }
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      options: {
        disabledDate: date => {
          return this.startDate >= date;
        }
      }
    };
  }
};
</script>
<style scoped>
</style>
