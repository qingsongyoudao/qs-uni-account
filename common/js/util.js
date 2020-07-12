// 获取 token
export const getToken = () => {
	let lifeData = {}
	try {
		lifeData = uni.getStorageSync('lifeData');
	} catch (e) {

	}

	if (lifeData.vuex_token) {
		return lifeData.vuex_token
	} else {
		return false
	}
}
