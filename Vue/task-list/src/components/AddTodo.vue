<template>
    <div class="todo">
        <h1>Tasks</h1>
        <input v-model="content" v-on:keyup.enter="createTodo">
        <button v-on:click="createTodo">+</button>
    </div>
</template>

<script>

export default {
  data() {
    return {
      content: '',
    };
  },
  methods: {
      createTodo() {
          if (this.content.length > 0) {
            this.$emit('create-todo', this.content);
            this.content= '';
        }
      }
  }
};
</script>

<style scoped>
.todo {
  display:inline-block;
}

input {
      background: transparent;
      border: solid 1px;
      padding: 7px 10px;
      border-right: none;
      width: 70%;
      color: black;
      border-color: black;
      outline: none;
      margin-right: -10%;
}

button {
      border: solid 1px black;
      padding: 7px -1px;
      background: rgba(gray, .8);
      cursor: pointer;
      width: 15%;
      min-width: 20px;
      color: darkslategray;
      line-height: 1;
      font-size: 30px;
      outline: none;
}

button, input {
      vertical-align: middle;
      height: 35px;
      box-sizing: border-box;
}

h1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

button:hover {
  background: lightgray;
}
</style>