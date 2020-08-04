import request from '@/common/js/request.js'
var url = 'account'

module.exports = {
	// 注册
	registerByUserName(data) {
		return request({
			url,
			action: 'registerByUserName',
			data
		})
	},
	registerByEmail(data) {
		return request({
			url,
			action: 'registerByEmail',
			data
		})
	},
	registerByMobile(data) {
		return request({
			url,
			action: 'registerByMobile',
			data
		})
	},
	// 登录
	loginByPwd(data) {
		return request({
			url,
			action: 'loginByPwd',
			data
		})
	},
	loginBySms(data) {
		return request({
			url,
			action: 'loginBySms',
			data
		})
	},
	// 登出 
	logout(data) {
		return request({
			url,
			action: 'logout',
			data
		})
	},
	// 密码
	setPassword(data) {
		return request({
			url,
			action: 'setPassword',
			data
		})
	},
	updatePassword(data) {
		return request({
			url,
			action: 'updatePassword',
			data
		})
	},
	resetPassword(data) {
		return request({
			url,
			action: 'resetPassword',
			data
		})
	},
	// 用户名
	setUserName(data) {
		return request({
			url,
			action: 'setUserName',
			data
		})
	},
	updateUserName(data) {
		return request({
			url,
			action: 'updateUserName',
			data
		})
	},
	// 邮箱
	bindEmail(params) {
		return request({
			url,
			action: 'bindEmail',
			data
		})
	},
	updateEmail(data) {
		return request({
			url,
			action: 'updateEmail',
			data
		})
	},
	unbindEmail(data) {
		return request({
			url,
			action: 'unbindEmail',
			data
		})
	},
	// 手机号
	bindMobile(data) {
		return request({
			url,
			action: 'bindMobile',
			data
		})
	},
	updateMobile(data) {
		return request({
			url,
			action: 'updateMobile',
			data
		})
	},
	unbindMobile(data) {
		return request({
			url,
			action: 'unbindMobile',
			data
		})
	},
	// 微信
	loginByWeixin(data) {
		return request({
			url,
			action: 'loginByWeixin',
			data
		})
	},
	bindWeixin(data) {
		return request({
			url,
			action: 'bindWeixin',
			data
		})
	},
	unbindWeixin(data) {
		return request({
			url,
			action: 'unbindWeixin',
			data
		})
	},
	// 支付宝
	loginByAlipay(data) {
		return request({
			url,
			action: 'loginByAlipay',
			data
		})
	},
	bindAlipay(data) {
		return request({
			url,
			action: 'bindAlipay',
			data
		})
	},
	unbindAlipay(data) {
		return request({
			url,
			action: 'unbindAlipay',
			data
		})
	},
	// 图像
	setAvatar(data) {
		return request({
			url,
			action: 'setAvatar',
			data
		})
	},
	updateAvatar(data) {
		return request({
			url,
			action: 'updateAvatar',
			data
		})
	},
	// 用户信息
	updateUser(data) {
		return request({
			url,
			action: 'updateUser',
			data
		})
	},
	getUser(data) {
		return request({
			url,
			action: 'getUser',
			data
		})
	},
	getAccount(data) {
		return request({
			url,
			action: 'getAccount',
			data
		})
	},
	// token
	checkToken(data) {
		return request({
			url,
			action: 'checkToken',
			data
		})
	},
	emptyToken(data) {
		return request({
			url,
			action: 'emptyToken',
			data
		})
	}
}
