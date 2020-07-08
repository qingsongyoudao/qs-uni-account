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
			res = await qsAccount.setPassword(params);
			break;
		case 'update-password':
			res = await qsAccount.updatePassword(params);
			break;
		case 'set-userName':
			res = await qsAccount.setUserName(params);
			break;
		case 'update-userName':
			res = await qsAccount.updateUserName(params);
			break;
		case 'bind-email':
			res = await qsAccount.bindEmail(params);
			break;
		case 'update-email':
			res = await qsAccount.updateEmail(params);
			break;
		case 'unbind-email':
			res = await qsAccount.unbindEmail(params);
			break;
		case 'bind-mobile':
			res = await qsAccount.bindMobile(params);
			break;
		case 'update-mobile':
			res = await qsAccount.updateMobile(params);
			break;
		case 'unbind-mobile':
			res = await qsAccount.unbindMobile(params);
			break;
		case 'set-avatar':
			res = await qsAccount.setAvatar(params);
			break;
		case 'update-user':
			res = await qsAccount.updateUser(params);
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