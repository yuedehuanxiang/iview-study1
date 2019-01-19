<template>
  <div style="padding: 32px 64px">
    <h1>Table 常用API 讲解：minWidth, maxWidth, tooltip</h1>
    <Table :columns="columns" :data="data" border></Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "Name",
          key: "name",
          minWidth: 200
        },
        {
          title: "Age",
          key: "age",
          maxWidth: 60
        },
        {
          title: "Province",
          key: "province",
          width: 100
        },
        {
          title: "City",
          key: "city",
          minWidth: 80,
          maxWidth: 160
        },
        {
          title: "Address",
          key: "address",
          tooltip: true
        },
        {
          title: "Postcode",
          key: "zip",
          width: 100
        },
        {
          title: "Action",
          width: 120,
          render: h => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small"
                  }
                },
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small"
                  }
                },
                "Edit"
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
          province: "America",
          city: "New York",
          zip: 100000
        },
        {
          name: "Jim Green",
          age: 24,
          address: "Washington, D.C. No. 1 Lake Park",
          province: "America",
          city: "Washington, D.C.",
          zip: 100000
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          province: "Australian",
          city: "Sydney",
          zip: 100000
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          province: "Canada",
          city: "Ottawa",
          zip: 100000
        }
      ]
    };
  }
};
</script>
