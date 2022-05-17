import Vue from 'vue'

import VueRouter from 'vue-router'

// 使得每个组件都可以拥有store实例，vue.use()就是执行对象的install方法
Vue.use(VueRouter)

import Home from '../components/Home.vue'
import About from "../components/About.vue"

const routes = [{
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
const router = new VueRouter({
  mode: "history",
  routes
})
export default router