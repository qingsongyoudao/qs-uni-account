/*
 * 表单校验配置
 * 依赖：graceChecker.js 进行校验
 *
 * 使用：引入该js到页面，let res = graceChecker.check({phoneNo:"",code:""},formRule.loginRule)
 */

export default {
	/* 密码登录 */
	loginByPwdRule: [{
		name: 'mobile',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '手机号不能为空'
	}, {
		name: 'mobile',
		checkType: 'phoneno',
		checkRule: '',
		errorMsg: '手机号格式不正确'
	}, {
		name: 'password',
		checkType: 'string',
		checkRule: '6,18',
		errorMsg: '请输入6-18位密码'
	}],

	/* 短信登录 */
	loginBySmsRule: [{
		name: 'mobile',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '手机号不能为空'
	}, {
		name: 'mobile',
		checkType: 'phoneno',
		checkRule: '',
		errorMsg: '手机号格式不正确'
	}, {
		name: 'code',
		checkType: 'string',
		checkRule: '4',
		errorMsg: '请输入4位验证码'
	}],

	/* 发送短信验证码 */
	sendSmsCodeRule: [{
		name: 'mobile',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '手机号不能为空'
	}, {
		name: 'mobile',
		checkType: 'phoneno',
		checkRule: '',
		errorMsg: '手机号格式不正确'
	}],

	/* 用户注册 */
	registerRule: [{
		name: 'mobile',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '手机号不能为空'
	}, {
		name: 'mobile',
		checkType: 'phoneno',
		checkRule: '',
		errorMsg: '手机号格式不正确'
	}, {
		name: 'code',
		checkType: 'string',
		checkRule: '4',
		errorMsg: '请输入4位验证码'
	}, {
		name: 'password',
		checkType: 'string',
		checkRule: '6,18',
		errorMsg: '请输入6-18位密码'
	}],

	/* 密码重置 */
	resetPasswordRule: [{
		name: 'mobile',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '手机号不能为空'
	}, {
		name: 'mobile',
		checkType: 'phoneno',
		checkRule: '',
		errorMsg: '手机号格式不正确'
	}, {
		name: 'code',
		checkType: 'string',
		checkRule: '4',
		errorMsg: '请输入4位验证码'
	}, {
		name: 'password',
		checkType: 'string',
		checkRule: '6,18',
		errorMsg: '请输入6-18位密码'
	}]
};
