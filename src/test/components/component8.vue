<template>
  <div style="padding: 32px 500px">
    <h1>DatePicker 设置仅当月日期可选</h1>
    <br>
    <br>

    <DatePicker type="date" :options="options"></DatePicker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        disabledDate(date) {
          // 先找到本月第一天时间戳
          const today = new Date();
          const year = today.getFullYear();
          const month = today.getMonth();
          const first_time = new Date(year, month, 1).getTime();

          // 获取当月有多少天(注意0月实际上是1月)
          //const days = new Date(year, month, 0).getDate();

          const last_time = new Date(year, month + 1, 0).getTime();

          const datetime = date.valueOf();
          return datetime < first_time || datetime >= last_time;
        }
      }
    };
  }
};
</script>
