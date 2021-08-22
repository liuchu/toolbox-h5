<template>

  <div id="todo-list">
    <h1>待办事项</h1>
    <TodoItem v-bind:msg="item" v-for="item in items" :key="item.message"></TodoItem>
  </div>

</template>

<script>
import reqwest from 'reqwest';
import TodoItem from './TodoItem.vue'

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  mounted() {
    this.getTodoList(res => {
      this.items = res.result;
    });
  },
  methods: {
    getTodoList(callback) {
      let toolBoxUrl = "http://localhost:8080";
      let userId = 1;
      let categoryId = 1;
      reqwest({
            url: toolBoxUrl + '/api/todolist/task/list',
            data: {userId: userId, categoryId: categoryId},
            method: 'get',
            contentType: 'application/json',
            success: res => {
              callback(res);
            }
          }
      )
    }
  },
  data: function () {
    return {
      items: [
      ]
    }
  }
}
</script>

<style scoped>

</style>