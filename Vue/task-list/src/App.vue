<template>
  <div id="app">
    <div class="buttons">
      <button class="button"><router-link to="/rainbow">Rainbow</router-link></button>
      <button class="button"><router-link to="/">Normal</router-link></button>
    </div>
    <add-todo class="add" v-on:create-todo="addTodo($event)"></add-todo>
    <router-view class="todo-list" v-bind:todos="todos" v-on:todo-done="done($event)" v-show="todos.length != 0" v-on:todo-delete="deleteTask($event)"></router-view>
  </div>
</template>

<script>
import TodoList from './components/TodoList'  
import AddTodo from './components/AddTodo'  
import axios from 'axios'

export default {

  name: 'app',
  data () {
    return {
      todos: [],
    }
  },
  methods: {
    async addTodo(newContent) {
      await axios.post("http://localhost:5000/api/TodoItems", {
        content: newContent,
        done: false
      });

      this.loadTasks();
    },
    async done(newTodo) {
      await axios.put("http://localhost:5000/api/TodoItems/" + newTodo.id, {
        id: newTodo.id,
        content: newTodo.content,
        done: true
      });

      this.loadTasks();
    },
    async loadTasks() {
      await axios.get("http://localhost:5000/api/TodoItems").then(response => this.todos = response.data);
    },
    async deleteTask(deleteId) {
      await axios.delete("http://localhost:5000/api/TodoItems/" + deleteId);
      this.loadTasks();
    }
  },
  components: {
    'todo-list': TodoList,
    'add-todo': AddTodo
  },
  created() {
    this.loadTasks();
  }
}
</script>

<style>
#app {
  background: #FFF; 
  font-size: 20px;
  max-width: 30em;
  margin: auto;
  padding: 0.5em 1em;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
}

.add {
  width: 100%;
  margin-bottom: 5%;
}

.button {
    border: solid 1px black;
    padding: 7px -1px;
    background: rgba(gray, .8);
    cursor: pointer;
    width: 15%;
    min-width: 20px;
    color: darkslategray;
    line-height: 1;
    font-size: 20px;
    outline: none;
 }

 a {  
   text-decoration: none;
   color: black;
}

</style>
