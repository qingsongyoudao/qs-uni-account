'use strict';

const uniId = require('uni-id')

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ' + event)

	// 操作
	let action = event.action
	// 参数
	let params = event.params || {}
	// 令牌
	let token = event.uniIdToken

	// payload
	let payload = {}
	let noCheckAction = ['register', 'checkToken', 'encryptPwd', 'login', 'loginByWeixin', 'sendSmsCode',
		'setVerifyCode', 'loginBySms', 'loginByEmail'
	]
	if (noCheckAction.indexOf(action) === -1) {
		if (!token) {
			return {
				code: 403,
				msg: '缺少token'
			}
		}
		payload = await uniId.checkToken(token)
		if (payload.code && payload.code > 0) {
			return payload
		}
		params.uid = payload.uid
	}

	// 返回
	let res = {}

	switch (action) {
		case 'register':
			res = await uniId.registerByUserName(params);
			break;
		case 'registerByEmail':
			res = await uniId.registerByEmail(params);
			break;
		case 'registerByMobile':
			res = await uniId.registerByMobile(params);
			break;
		case 'login':
			res = await uniId.loginByPwd(params);
			break;
		case 'loginBySms':
			res = await uniId.loginBySms(params);
			break;
		case 'logout':
			res = await uniId.logout(token);
			break;
		case 'setPassword':
			res = await uniId.setPassword(params);
			break;
		case 'updatePassword':
			res = await uniId.updatePassword(params);
			break;
		case 'resetPassword':
			res = await uniId.resetPassword({
				id: params.id,
				password: '123456'
			});
			break;
		case 'setUserName':
			res = await uniId.setUserName(params);
			break;
		case 'updateUserName':
			res = await uniId.updateUserName(params);
			break;
		case 'bindEmail':
			res = await uniId.bindEmail(params);
			break;
		case 'updateEmail':
			res = await uniId.updateEmail(params);
			break;
		case 'unbindEmail':
			res = await uniId.unbindEmail(params);
			break;
		case 'bindMobile':
			res = await uniId.bindMobile(params);
			break;
		case 'updateMobile':
			res = await uniId.updateMobile(params);
			break;
		case 'unbindMobile':
			res = await uniId.unbindMobile(params);
			break;
		case 'setAvatar':
			res = await uniId.setAvatar(params);
			break;
		case 'updateAvatar':
			res = await uniId.updateAvatar(params);
			break;
		case 'loginByWeixin':
			res = await uniId.loginByWeixin(params);
			break;
		case 'bindWeixin':
			res = await uniId.bindWeixin(params);
			break;
		case 'unbindWeixin':
			res = await uniId.unbindWeixin(params);
			break;
		case 'loginByAlipay':
			res = await uniId.loginByAlipay(params);
			break;
		case 'bindAlipay':
			res = await uniId.bindAlipay(params);
			break;
		case 'unbindAlipay':
			res = await uniId.unbindAlipay(params);
			break;
		case 'checkToken':
			const checkTokenRes = await uniId.checkToken(token)
			res = {
				code: checkTokenRes.code,
				msg: checkTokenRes.msg
			}
			break;
		case 'emptyToken':
			res = await uniId.emptyToken(params);
			break;
		case 'updateUser':
			res = await uniId.updateUser(params);
			break;
		case 'getAccount':
			res = await uniId.getAccount(params);
			break;
		case 'getUser':
			res = await uniId.getUser(params);
			break;
		case 'sendSmsCode':
			res = await uniId.sendSmsCode(params);
			break;
		case 'setVerifyCode':
			res = await uniId.setVerifyCode(params);
			break;
		case 'verifyCode':
			res = await uniId.verifyCode(params);
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
