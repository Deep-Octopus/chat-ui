import Vue from 'vue'
import App from './App.vue'
import Cookies from 'js-cookie'
//element-ui
import Element from 'element-ui'
//Vuex
import store from '@/store'
//路由
import router from '@/router'
//图标库
import '../public/iconfont.css'
//element-ui样式库
import 'element-ui/lib/theme-chalk/index.css';
//插件
import plugins from "@/plugins";


Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.use(plugins)

Vue.config.silent = true
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
