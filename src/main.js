// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import {Button } from 'mint-ui'
Vue.config.productionTip = false
Vue.component(Button.name,Button)
// Vue.component(MessageBox.name,MessageBox)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: {App},
  // template: '<App/>'
  render: h => h(App)
})
