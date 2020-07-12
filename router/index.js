import modules from './modules'
import Vue from 'vue'
import Router from 'uni-simple-router'
import {
	getToken
} from '@/common/js/util.js'

Vue.use(Router)

// 初始化
const router = new Router({
	encodeURI: false, // 传参方式：不编码传输、编码传输
	routes: [...modules] // 路由表
});

// 登录页面名称
const LOGIN_PAGE_NAME = ['account_login_pwd', 'account_login_sms']

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
	// LoadingBar.start()
	//console.log(to)
	if (to.name === '') { // 页面不存在
		next({
			name: 'index'
		})
	}
	const token = getToken()
	if (!token && LOGIN_PAGE_NAME.indexOf(to.name) === -1) { // 未登录，要跳转的页面不是登录页
		next({
			name: LOGIN_PAGE_NAME[0] // 跳转到登录页
		})
	} else if (!token && LOGIN_PAGE_NAME.indexOf(to.name) !== -1) { // 未登录，要跳转的页面是登录页
		// 跳转
		next()
	} else if (token && LOGIN_PAGE_NAME.indexOf(to.name) !== -1) { // 已登录，要跳转的页面是登录页
		next({
			name: 'index'
		})
	} else { // 其它
		next()
	}
})

// 全局路由后置守卫
router.afterEach((to, from) => {
	// LoadingBar.finish()
	window.scrollTo(0, 0)
})

export default router;
