<template>
    <div>
        <div class="todo">

            <button v-show="!todo.done" v-on:click="done">Close</button>
            <div class="completed" v-show="todo.done" v-on:click="deleteTodo" @mouseover="deleteStatus" @mouseleave="completeStatus">
                {{ status }}
            </div>
            <div v-bind:class="{'content': !todo.done, 'content-done': todo.done}">
                {{ todo.content }}
            </div>

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            status: "Completed"
        }
    },
    props: ['todo'],
    methods: {
        done() {
            this.$emit("todo-done", this.todo);
        },
        deleteTodo() {
            this.$emit("todo-delete", this.todo.id) ;
        },
        deleteStatus() {
            this.status = "Delete";
        },
        completeStatus() {
            this.status = "Completed";
        }
  }
}
</script>

<style scoped>
.content {
    display: inline-block;
    border: solid 1px lightslategray;
    min-width: 85%;
    margin: auto;
    line-height: 35px;
    padding-left: 5px; 
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.content-done {
    display: inline-block;
    border: solid 1px lightslategray;
    min-width: 85%;
    margin: auto;
    line-height: 35px;
    padding-left: 5px; 
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background: lightgray;
}

.todo {
    display: block;
    position: relative;
    margin: 0 auto;
    margin-bottom: 2%;
}

button {
      border: solid 1px lightslategray;
      padding: 7px 10px;
      background: rgba(gray, .8);
      cursor: pointer;
      width: 10%;
      color: darkolivegreen;
      line-height: 1;
      font-size: 15px;
      outline: none;
      min-width: 82px;
      margin-right: -5.5px;
      min-height: 37px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
}

button, .content, .completed, .content-done {
    vertical-align: middle;
    height: 35px;
}

button:hover {
    background: lightgreen;
}

.completed {
    border: solid 1px darkolivegreen;
    padding: 0px 10px;
    background: lightgreen;
    cursor: pointer;
    width: 10%;
    color: darkolivegreen;
    line-height: 1;
    font-size: 11px;
    outline: none;
    display: inline-block;
    margin-right: -5.5px;
    line-height: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.completed:hover {
    border:darkred;
    background: red;
    color:darkred;
    text-align: center;
    height: 37px;
    padding-right: 12px;
}
</style>