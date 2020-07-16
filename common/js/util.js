// 获取 token
export const getToken = () => {
	let lifeData = {}
	try {
		lifeData = uni.getStorageSync('lifeData');
	} catch (e) {}

	if (lifeData.vuex_token) {
		return lifeData.vuex_token
	} else {
		return ""
	}
}

// 获取强制登录
export const getForceLogin = (to) => {
	let forceLogin = false

	try {
		forceLogin = to.forceLogin;
	} catch (e) {}

	if (forceLogin) {
		return forceLogin
	} else {
		return false
	}
}

// 获取已经登录
export const getHasLogin = () => {
	let lifeData = {}
	try {
		lifeData = uni.getStorageSync('lifeData');
	} catch (e) {}

	if (lifeData.vuex_token) {
		return true
	} else {
		return false
	}
}
