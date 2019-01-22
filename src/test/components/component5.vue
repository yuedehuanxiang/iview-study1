<template>
  <div style="padding: 32px 500px">
    <h1>Tree 组件点击项目标题可以展开/收起的方法</h1>
    <br>
    <br>
    <Tree :data="data1" @on-select-change="handleSelectChange"></Tree>
  </div>
</template>
<script>
export default {
  methods: {
    handleSelectChange(item) {
      // console.log(item);
      if (item[0]) {
        item[0].expand = !item[0].expand;
      }
      item[0].selected = !item[0].selected;
    }
  },
  data() {
    return {
      data1: [
        {
          title: "parent 1",
          expand: false,
          children: [
            {
              title: "parent 1-1",
              expand: false,
              children: [
                {
                  title: "leaf 1-1-1"
                },
                {
                  title: "leaf 1-1-2"
                }
              ]
            },
            {
              title: "parent 1-2",
              expand: false,
              children: [
                {
                  title: "leaf 1-2-1"
                },
                {
                  title: "leaf 1-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
