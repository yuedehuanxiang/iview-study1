<template>
  <div style="padding: 32px 64px">
    <h1>自定义列模板的三种方法</h1>

    <Table border :columns="columns" :data="data"></Table>
  </div>
</template>
<script>
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
            return h("Select", [
              h(
                "Option",
                {
                  props: {
                    value: row.name
                  }
                },
                row.name
              ),
              h(
                "Option",
                {
                  props: {
                    value: row.age
                  }
                },
                row.age
              ),
              h(
                "Option",
                {
                  props: {
                    value: row.address
                  }
                },
                row.address
              ),
              h(
                "Option",
                {
                  props: {
                    value: row.date
                  }
                },
                row.date
              )
            ]);
          }
        }
      ],
      data: [
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
      ]
    };
  }
};
</script>
