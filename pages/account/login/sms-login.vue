<template>
	<view class="account-page">
		<view class="page-header">
			<view class="page-title">{{ title }}</view>
		</view>
		<view class="page-body">
			<view class="form-box">
				<u-form :model="model" ref="uForm" label-position="top">
					<u-form-item class="form-item" label="手机号" prop="mobile">
						<u-input v-model="model.mobile" placeholder="请输入手机号" type="text" />
					</u-form-item>
					<u-form-item class="form-item" label="短信验证码" prop="verifyCode">
						<u-input v-model="model.verifyCode" placeholder="请输入验证码" type="number" />
						<u-button slot="right" type="success" size="mini" @click="getCode">{{ codeTips }}</u-button>
					</u-form-item>
				</u-form>

				<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>

				<u-gap height="40"></u-gap>

				<u-button :disabled="form.button.loading" type="primary" @click="submit">登 录</u-button>

				<u-gap height="40"></u-gap>

				<view class="u-flex">
					<view class="u-flex-1 u-text-left" @click="openPage('login/pwd-login')">密码登录</view>
					<view class="u-flex-1 u-text-right" @click="openPage('register/register')">注册</view>
				</view>
			</view>

			<u-gap height="60"></u-gap>
		</view>
	</view>
</template>

<script>
var api = require('@/common/js/account.api.js');

export default {
	data() {
		return {
			title: '短信验证码登录',
			desc: '',
			codeTips: '',
			codeId: '',
			form: {
				button: {
					loading: false
				}
			},
			model: {
				/* 手机号 */
				mobile: '',
				/* 验证码 */
				verifyCode: '',
				/* 验证码编号 */
				codeId: ''
			},
			rules: {
				mobile: [
					{
						required: true,
						message: '请输入手机号',
						trigger: ['change', 'blur']
					},
					{
						validator: (rule, value, callback) => {
							return this.$u.test.mobile(value);
						},
						message: '手机号格式不正确',
						trigger: ['change', 'blur']
					}
				],
				verifyCode: [
					{
						required: true,
						message: '请输入验证码',
						trigger: ['change', 'blur']
					},
					{
						type: 'number',
						message: '验证码只能为数字',
						trigger: ['change', 'blur']
					},
					{
						len: 6,
						message: '验证码长度为6位数字',
						trigger: ['change', 'blur']
					}
				]
			}
		};
	},
	methods: {
		openPage(path) {
			this.$u.route({
				url: '/pages/account/' + path
			});
		},
		submit() {
			this.model.codeId = this.codeId
			this.$refs.uForm.validate(valid => {
				if (valid) {
					this.form.button.loading = true;
					api.loginBySms(this.model)
						.then(res => {
							this.form.button.loading = false;
							console.log(res);
							if (res.code == 1) {
								this.$u.vuex('vuex_user.logined', true);
								this.$u.vuex('vuex_user.id', res.data.uid);
								this.$u.vuex('vuex_token', res.data.token);
								uni.navigateBack({});
								return this.$u.toast('登录成功');
							} else {
								return this.$u.toast(res.msg);
							}
						})
						.catch(err => {
							this.form.button.loading = false;
							console.log(err);
							return this.$u.toast('出错，请稍后再试');
						});
				} else {
					console.log('验证失败');
				}
			});
		},
		codeChange(text) {
			this.codeTips = text;
		},
		// 获取验证码
		getCode() {
			if (this.$refs.uCode.canGetCode) {
				// 模拟向后端请求验证码
				uni.showLoading({
					title: '正在获取验证码',
					mask: true
				});
				this.codeId = this.$u.random(100000, 999999).toString();
				setTimeout(() => {
					uni.hideLoading();
					// 这里此提示会被this.start()方法中的提示覆盖
					this.$u.toast(this.codeId + '验证码已发送');
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				}, 2000);
			} else {
				this.$u.toast(this.codeId + '倒计时结束后再发送');
			}
		}
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	}
};
</script>

<style lang="scss" scoped>
@import '../scss/account.scss';
</style>
