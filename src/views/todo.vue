<script>
import '../assets/styles/todo.css';

  export default {
    name: "Todo",
    data() {
      return {
        todo: "",
        todos: [],
        disabled: 0
      };
    },
    methods: {
      add() {
        const { todo } = this;
        this.todos.push({
          id: Math.random(),
          todo,
        });
        this.todo = "";
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
      },
      test() {
        if (this.todo.length <= 0) {
          this.disa = 1;
        }
      }
    },
  };
</script>

<template>
<div>
  <h1>Todo list ...</h1>
    <div class="todo__wrapper">
      <form @submit.prevent="add">
        <input v-model="todo" />
        <button :disabled="disabled == 1" type="submit">Add</button>
      </form>
  
      <div v-for="(todo, index) of todos" :key="todo.id">
        <span>{{ todo.todo }}</span>
        <button @click="deleteTodo(index)">delete</button>
      </div>
    </div>
  </div>
</template>

