module.exports = {
	// --- 云函数 ---
	// 账户云
	accountCloud: function(action, params) {
		return new Promise((resolve, reject) => {
			uniCloud.callFunction({
				name: 'account',
				data: {
					action: action,
					params: params
				},
				success(res) {
					resolve(res.result)
				},
				fail(err) {
					console.error(err)
					reject(new Error('出错，请稍后再试'))
				}
			})
		})
	},

	// --- 函数 ---
	// 注册
	register(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('register', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	registerByEmail(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('register-email', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	registerByMobile(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('register-mobile', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	// 登录
	login(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('login', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	loginBySms(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('login-sms', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	// 退出
	logout(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('logout', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	// 密码
	setPassword(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('set-password', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	updatePassword(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('update-password', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	// 用户名
	setUserName(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('set-userName', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	updateUserName(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('update-userName', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	// 邮箱
	bindEmail(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('bind-email', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	updateEmail(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('update-email', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	unbindEmail(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('unbind-email', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	// 手机号
	bindMobile(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('bind-mobile', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	updateMobile(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('update-mobile', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	unbindMobile(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('unbind-mobile', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	// 图像
	setAvatar(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('set-avatar', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	},
	// 用户
	updateUser(params) {
		return new Promise((resolve, reject) => {
			this.accountCloud('update-user', params).then((res) => {
				console.log(res)
				resolve(res)
			}).catch((err) => {
				console.log(err)
			})
		})
	}
}
