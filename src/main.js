import Vue from 'vue'
import App from './App.vue'

// 引入全局css样式路径
import './assets/statics/site/css/style.css';


// 引入路由相关
import VueRouter from 'vue-router';

// 引入index主页
import index from './components/index.vue';

// use一下 
Vue.use(VueRouter);

// 写规则
const routes = [
  {
  path: '/',
  component: index
},
  {
  path: '/index',
  component: index
}
]

// 实例化路由对象
const router = new VueRouter({
  // 规则挂载到实例上
  routes
})

new Vue({
  render: h => h(App),
  // 路由挂载到vue实例上
  router

}).$mount('#app')