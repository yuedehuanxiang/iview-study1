<template>
  <div style="padding: 32px 64px">
    <h1>自定义列模板的三种方法</h1>

    <Table border :columns="columns" :data="data" ref="table">
      <template slot="action" slot-scope="props">
        <Select>
          <Option :value="props.name">{{ props.name }}</Option>
          <Option :value="props.age">{{ props.age }}</Option>
          <Option :value="props.address">{{ props.address }}</Option>
          <Option :value="props.date">{{ props.date }}</Option>
        </Select>
      </template>
    </Table>
  </div>
</template>
<script>
// ⚠️ 这种slot-scope的写法 table 的data数据数据要在mounted 生命周期里去获取，不能一开始就直接定义好
// import TableCell from "../../components/table-cell";
export default {
  data() {
    return {
      columns: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "地址",
          key: "address"
        },
        {
          title: "日期",
          key: "date"
        },
        {
          title: "操作",
          render: (h, { row }) => {
            return h(
              "div",
              this.$refs.table.$scopedSlots.action({
                name: row.name,
                age: row.age,
                address: row.address,
                date: row.date
              })
            );
          }
        }
      ],
      data: []
    };
  },
  mounted() {
    this.data = [
      {
        name: "John Brown",
        age: 18,
        address: "New York No. 1 Lake Park",
        date: "2016-10-03"
      },
      {
        name: "Jim Green",
        age: 24,
        address: "London No. 1 Lake Park",
        date: "2016-10-01"
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
    ];
  }
};
</script>
