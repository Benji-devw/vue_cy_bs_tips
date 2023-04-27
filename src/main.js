import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@/assets/styles/style.css'
import App from './App.vue'
import HomeVue from './views/Home.vue'
import Todo from './views/todo.vue'
import Flexbox from './views/flexbox.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomeVue },
    { path: '/todo', name: 'Todo', component: Todo },
    { path: '/flexbox', name: 'Flexbox', component: Flexbox },
  ]
})

createApp(App)
.use(router)
.mount('#app')
