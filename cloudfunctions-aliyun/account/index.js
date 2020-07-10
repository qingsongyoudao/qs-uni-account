'use strict';

const qsAccount = require('qs-account')

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ' + event)

	// 操作
	let action = event.action
	// 参数
	let params = event.params
	// 返回
	let res = {}
	// payload
	let payload = {}

	switch (action) {
		case 'register':
			res = await qsAccount.registerByUserName(params);
			break;
		case 'register-email':
			res = await qsAccount.registerByEmail(params);
			break;
		case 'register-mobile':
			res = await qsAccount.registerByMobile(params);
			break;
		case 'login':
			res = await qsAccount.loginByPwd(params);
			break;
		case 'login-sms':
			res = await qsAccount.loginBySms(params);
			break;
		case 'login-weixin':
			res = await qsAccount.loginByWeixin(params);
			break;
		case 'logout':
			res = await qsAccount.logout(params.token);
			break;
		case 'set-password':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.setPassword(params);
			break;
		case 'update-password':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.updatePassword(params);
			break;
		case 'set-userName':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.setUserName(params);
			break;
		case 'update-userName':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.updateUserName(params);
			break;
		case 'bind-email':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.bindEmail(params);
			break;
		case 'update-email':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.updateEmail(params);
			break;
		case 'unbind-email':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.unbindEmail(params);
			break;
		case 'bind-mobile':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.bindMobile(params);
			break;
		case 'update-mobile':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.updateMobile(params);
			break;
		case 'unbind-mobile':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.unbindMobile(params);
			break;
		case 'set-avatar':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.setAvatar(params);
			break;
		case 'update-user':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.updateUser(params);
			break;
		case 'check-token':
			res = await qsAccount.checkToken(params.token);
			break;
		case 'get-account':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.getAccount(params);
			break;
		case 'get-user':
			payload = await qsAccount.checkToken(params.token)
			if (payload.code && payload.code > 0) {
				return payload
			}
			params.id = payload.uid
			res = await qsAccount.getUser(params);
			break;
		default:
			res = {
				code: 403,
				msg: '非法访问'
			}
			break;
	}

	// 返回数据给客户端
	return res
};
