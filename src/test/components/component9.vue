<template>
  <div style="padding: 32px 500px">
    <h1>多个 DatePicker 联动的用法（联动禁用）</h1>
    <br>
    <br>

    <DatePicker v-model="startDate"></DatePicker>
    <DatePicker v-model="endDate" :disabled="startDate ==''"></DatePicker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startDate: "",
      endDate: ""
    };
  }
};
</script>
<style scoped>
</style>
