import {
	getToken
} from '@/common/js/util.js'

export default function(obj) {
	const token = getToken()
	obj.data.token = token
	return new Promise((resolve, reject) => {
		uniCloud.callFunction({
			name: obj.url,
			data: {
				method: obj.method,
				params: obj.data
			},
			success(res) {
				//console.log(res)
				var data = res.result
				//console.log(data)
				if (data.code === 1301) { // token 已过期
					uni.showModal({
						content: '长时间未操作，请重新登录',
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/account/login/pwd-login'
								})
							}
						}
					})
				} else if (data.code === 1302) { // token 不合法
					uni.showModal({
						content: '非合规进入，请重新登录',
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/account/login/pwd-login'
								})
							}
						}
					})
				} else {
					resolve(data)
				}
			},
			fail(err) {
				//console.error(err)
				reject(new Error('服务器异常，请稍后再试'))
			}
		})
	})
}
