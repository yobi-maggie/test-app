// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.directive('document-click', {
  bind (el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  },
  inserted () {
    console.log('insert')
  },
  update () {
    console.log('update')
  }
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
