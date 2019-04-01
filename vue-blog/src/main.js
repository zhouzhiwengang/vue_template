// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from '../src/store'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'
import './assets/scss/style.scss'
import './assets/css/animate.min.css'
import  './assets/css/element.css'
import elTitleHeader from '../src/components/home/common/title_header'
import elSidebar from '../src/components/home/common/sidebar'
import elConfirmCancel from '../src/components/ui/confirm-cancel'
import echarts from 'echarts'


Vue.use(ElementUI)
Vue.use(VueSimplemde)
Vue.config.productionTip = false

// 全局组件
Vue.component('elSidebar', elSidebar)
Vue.component('elConfirmCancel', elConfirmCancel)
Vue.component('elTitleHeader', elTitleHeader)

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})




/* eslint-disable no-new 
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})*/
