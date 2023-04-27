<script>
// import '../assets/styles/todo.css';

//   export default {
//     name: "Todo",
//     data() {
//       return {
//         todo: "",
//         todos: [],
//       };
//     },
//     methods: {
//       add() {
//         const { todo } = this;
//         this.todos.push({
//           id: Math.random(),
//           todo,
//         });
//         this.todo = "";
//       },
//       deleteTodo(index) {
//         this.todos.splice(index, 1);
//       },
//     },
//   };
</script>

<template>
<div>
  <h1>FlexBox</h1>
    <div class="flexbox__wrapper">
      <div class="flexbox__container">
        <div class="flex_item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio unde, ipsum quas saepe impedit facere dicta quibusdam necessitatibus a temporibus commodi, nemo fugiat! Necessitatibus quod sit voluptas! Magni, hic!</div>
        <div class="flex_item">Lorem ipsum dolor  facere dicta quibusdam necessitatibus a temporibus commodi, nemo fugiat! Necessitatibus quod sit voluptas! Magni, hic!</div>
        <div class="flex_item">Lorem ipsum dolor sit quibusdam necessitatibus a temporibus commodi, nemo fugiat! Necessitatibus quod sit voluptas! Magni, hic!</div>
        <div class="flex_item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio unde,</div>
      </div>
    </div>
  </div>
</template>

<style>
.flexbox__wrapper {
  padding: 2rem;
}
.flexbox__container {
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  /* align-items: center; */
}
.flex_item {
  flex: 1 200px;
  min-height: 350px;
  margin: .5rem;
  padding: 1rem;
  background-color: coral;
}
/* .flexbox__container > div {
} */

</style>