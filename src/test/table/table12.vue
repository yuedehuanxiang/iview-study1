<template>
  <div style="padding: 32px 64px">
    <todo-list :list="list">
      <template slot-scope="props">
        <span v-if="props.todo.checked">✅</span>
        -{{ props.todo.text }}
      </template>
    </todo-list>
  </div>
</template>
<script>
import TodoList from "../../components/todo-list";
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          text: "选项1",
          checked: false
        },
        {
          id: 2,
          text: "选项2",
          checked: true
        }
      ]
    };
  },
  components: {
    TodoList
  }
};
</script>
