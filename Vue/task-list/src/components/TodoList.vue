<template>
  <div>
    <todo v-bind:key="todo.id" v-for="todo in todos" v-bind:todo="todo" v-on:todo-done="done($event)" v-on:todo-delete="deleteTodo($event)"></todo>
  </div>
</template>

<script>

import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
      'todo': Todo
  },
  methods: {
    done(newTodo) {
      this.$emit('todo-done', newTodo);
    },
    deleteTodo(deleteId) {
      this.$emit('todo-delete', deleteId);
    }
  }
};
</script>

<style scoped>
</style>