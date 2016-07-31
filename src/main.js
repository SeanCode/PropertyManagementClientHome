import Vue from 'vue'
import { configRouter } from './config/routes'
require('es6-promise').polyfill()

global.jQuery = require('jquery')
var $ = global.jQuery
window.$ = $

var VueRouter = require('vue-router')
var VueResource = require('vue-resource')

// install router
Vue.use(VueRouter)
Vue.use(VueResource)

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  linkActiveClass: 'active'
})

// configure router
configRouter(router)

// bootstrap the app
const app = Vue.extend(require('./App.vue'))
router.start(app, '#app')

// just for debugging
window.router = router
