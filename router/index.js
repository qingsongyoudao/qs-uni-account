import modules from './modules'
import Vue from 'vue'
import Router from 'uni-simple-router'
import {
	getForceLogin,
	getHasLogin
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

	// 要跳转的页面，页面不存在
	if (to.name === '') {
		next({
			name: 'index'
		})
	}

	// 需要登录
	const forceLogin = getForceLogin(to)
	// 已经登录
	const hasLogin = getHasLogin()

	//console.log(forceLogin)
	//console.log(hasLogin)

	if (forceLogin && !hasLogin && LOGIN_PAGE_NAME.indexOf(to.name) === -1) { // 需要登录，未登录，要跳转的页面，不是登录页
		//console.log('需要登录，未登录，要跳转的页面，不是登录页')
		//return
		next({
			name: LOGIN_PAGE_NAME[0] // 跳转到登录页
		})
	} else if (hasLogin && LOGIN_PAGE_NAME.indexOf(to.name) !== -1) { // 已登录，要跳转的页面，是登录页
		//console.log('已登录，要跳转的页面，是登录页')
		next({
			name: 'index' // 跳转到首页
		})
	} else { // 其它
		//console.log('正常')
		//return
		next()
	}
})

// 全局路由后置守卫
router.afterEach((to, from) => {
	// LoadingBar.finish()
	window.scrollTo(0, 0)
})

export default router;
