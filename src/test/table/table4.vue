<template>
  <div style="padding: 32px 64px">
    <h1>可编辑单元格</h1>
    <Table :columns="columns" :data="data" border size="small"></Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [],
      data: []
    };
  }
};
</script>
