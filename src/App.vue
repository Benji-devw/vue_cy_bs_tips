
<template>
  <div class="main__nav">
    <img class="logo" alt="Vue logo" src="./assets/vue.svg" />
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/todo">Todo</router-link>
    <router-link class="link" to="/flexbox">Flexbox</router-link>
  </div>

  <router-view></router-view>

</template>

<style scoped>
.logo {
  height: 2em;
  padding: 1em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.link {
  margin: .5rem;
}
</style>
