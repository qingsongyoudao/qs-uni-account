import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

import routerLink from './node_modules/uni-simple-router/component/router-link.vue'
Vue.component('router-link',routerLink)

// vuex
import store from '@/store'

// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js')
Vue.mixin(vuexStore)

// 将store放入Vue对象创建中
const app = new Vue({
	store,
	...App
})

// 路由
import router from './router'
import {
	RouterMount
} from 'uni-simple-router'

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
RouterMount(app, '#app');
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif

//app.$mount()
