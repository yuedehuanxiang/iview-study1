<template>
  <div style="padding: 32px 64px">
    <h1>动态修改任意单元格 class</h1>
    <Table border :columns="columns1" :data="data1"></Table>
    <Button @click="handleChangeName">设置第二个红色</Button>
  </div>
</template>
<script>
// _checked , cellClassName 类似的属性都是要预先在data中设置好属性名的，后期加是没有效果的
export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
          cellClassName: {
            name: "table-red"
          }
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
          cellClassName: {
            name: ""
          }
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  methods: {
    handleChangeName() {
      this.data1[1].cellClassName = {
        name: "table-red"
      };
    }
  }
};
</script>
<style>
.table-red {
  color: red;
}
</style>
