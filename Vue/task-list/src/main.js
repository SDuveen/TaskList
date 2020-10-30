import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
});

Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.background = '#' + Math.random().toString().slice(2,8);
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
