import request from '@/common/js/request.js'
var url = 'account'

module.exports = {
	// 注册
	register(data) {
		return request({
			url,
			method: 'register',
			data
		})
	},
	registerByEmail(data) {
		return request({
			url,
			method: 'register-email',
			data
		})
	},
	registerByMobile(data) {
		return request({
			url,
			method: 'register-mobile',
			data
		})
	},
	// 登录
	login(data) {
		return request({
			url,
			method: 'login',
			data
		})
	},
	loginBySms(data) {
		return request({
			url,
			method: 'login-sms',
			data
		})
	},
	// 退出
	logout(data) {
		return request({
			url,
			method: 'logout',
			data
		})
	},
	emptyToken(data) {
		return request({
			url,
			method: 'empty-token',
			data
		})
	},
	// 密码
	setPassword(data) {
		return request({
			url,
			method: 'set-password',
			data
		})
	},
	updatePassword(data) {
		return request({
			url,
			method: 'update-password',
			data
		})
	},
	// 用户名
	setUserName(data) {
		return request({
			url,
			method: 'set-userName',
			data
		})
	},
	updateUserName(data) {
		return request({
			url,
			method: 'update-userName',
			data
		})
	},
	// 邮箱
	bindEmail(params) {
		return request({
			url,
			method: 'bind-email',
			data
		})
	},
	updateEmail(data) {
		return request({
			url,
			method: 'update-email',
			data
		})
	},
	unbindEmail(data) {
		return request({
			url,
			method: 'unbind-email',
			data
		})
	},
	// 手机号
	bindMobile(data) {
		return request({
			url,
			method: 'bind-mobile',
			data
		})
	},
	updateMobile(data) {
		return request({
			url,
			method: 'update-mobile',
			data
		})
	},
	unbindMobile(data) {
		return request({
			url,
			method: 'unbind-mobile',
			data
		})
	},
	// 图像
	setAvatar(data) {
		return request({
			url,
			method: 'set-avatar',
			data
		})
	},
	// 用户
	updateUser(data) {
		return request({
			url,
			method: 'update-user',
			data
		})
	},
	// token
	checkToken(data) {
		return request({
			url,
			method: 'check-token',
			data
		})
	},
	// 获取
	getUser(data) {
		return request({
			url,
			method: 'get-user',
			data
		})
	},
	getAccount(data) {
		return request({
			url,
			method: 'get-account',
			data
		})
	}
}
