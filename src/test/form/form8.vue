<template>
  <div style="padding: 32px 500px">
    <h1>新建和修改一个 Form 组件的最佳实践（多个循环）</h1>
    <br>
    <br>

    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span>{{ item.name }}</span>
        <Divider type="vertical"></Divider>
        <span>{{ item.age }}</span>
        <Divider type="vertical"></Divider>
        <span>{{ item.city }}</span>

        <Button @click="handleOpenEdit(index)">修改</Button>
      </li>
    </ul>

    <Button @click="handleOpenCreate">新增数据</Button>
    <Modal v-model="openModal" :title="type === 'create' ? '增加数据' : '修改数据'" footer-hide>
      <Form :model="form" :label-width="70">
        <FormItem label="姓名">
          <Input v-model="form.name"/>
        </FormItem>
        <FormItem label="年龄">
          <InputNumber v-model="form.age"/>
        </FormItem>
        <FormItem label="城市">
          <Select v-model="form.city">
            <Option value="北京">北京</Option>
            <Option value="上海">上海</Option>
            <Option value="深圳">深圳</Option>
          </Select>
        </FormItem>

        <Button @click="handleCreate" v-if="type === 'create'">创建</Button>
        <Button @click="handleEdit" v-if="type === 'edit'">更新</Button>
      </Form>
    </Modal>
  </div>
</template>
<script>
const formData = {
  name: "",
  age: null,
  city: ""
};
export default {
  data() {
    return {
      form: Object.assign({}, formData),
      editIndex: -1,
      openModal: false,
      type: "create", // create || edit
      list: [
        {
          name: "张三",
          age: 18,
          city: "北京"
        },
        {
          name: "李四",
          age: 19,
          city: "上海"
        }
      ]
    };
  },
  methods: {
    handleOpenEdit(index) {
      this.openModal = true;
      this.type = "edit";
      this.editIndex = index;
      const data = this.list[index];
      this.form = Object.assign({}, data);
    },
    handleOpenCreate() {
      this.openModal = true;
      this.type = "create";
      this.form = Object.assign({}, formData);
    },
    handleCreate() {
      this.list.push(this.form);
      this.openModal = false;
    },
    handleEdit() {
      this.list[this.editIndex] = this.form;
      this.openModal = false;
    }
  }
};
</script>
