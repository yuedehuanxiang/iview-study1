<template>
  <div style="padding: 32px 64px">
    <h1>初始化时应用排序，并持久化存储</h1>
    <Table :columns="columns" :data="data" @on-sort-change="handleSortChange" border size="small"></Table>
  </div>
</template>
<script>
export default {
  data() {
    const sortKey = localStorage.getItem("table-demo-key");
    const sortType = localStorage.getItem("table-demo-order");
    let date_sort_type;
    if (sortKey) {
      if (sortKey === "date") {
        date_sort_type = sortType;
      } else {
        date_sort_type = "normal";
      }
    } else {
      date_sort_type = "asc";
    }
    let age_sort_type;
    if (sortKey && sortKey === "age") {
      age_sort_type = sortType;
    } else {
      age_sort_type = "normal";
    }

    return {
      columns: [
        {
          title: "name",
          key: "name"
        },
        {
          title: "age",
          key: "age",
          sortable: true,
          sortType: age_sort_type
        },
        {
          title: "address",
          key: "address"
        },
        {
          title: "date",
          key: "date",
          sortable: true,
          sortType: date_sort_type
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
  },
  methods: {
    handleSortChange({ key, order }) {
      localStorage.setItem("table-demo-key", key);
      localStorage.setItem("table-demo-order", order);
    }
  }
};
</script>
