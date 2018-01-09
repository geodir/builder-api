// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import GeodirBuilderApi from './GeodirBuilderApi'
Vue.use(GeodirBuilderApi, { token: 'c0031490-4a63-4023-867d-385af385e569'})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
