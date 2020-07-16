<template>
	<view class="account-page">
		<view class="page-header">
			<view class="page-title">{{ title }}</view>
		</view>
		<view class="page-body">
			<view class="form-box">
				<u-form :model="model" ref="uForm" label-position="top">
					<u-form-item class="form-item" label="账号" prop="user">
						<u-input v-model="model.user" placeholder="请输入手机号/邮箱/用户名" type="text" />
					</u-form-item>
					<u-form-item class="form-item" label="密码" prop="password">
						<u-input v-model="model.password" placeholder="请输入登录密码" type="password" />
					</u-form-item>
				</u-form>

				<u-gap height="40"></u-gap>

				<u-button :disabled="form.button.loading" type="primary" @click="submit">登 录</u-button>

				<u-gap height="40"></u-gap>

				<view class="u-flex">
					<view class="u-flex-1 u-text-left" @click="openPage('login/sms-login')">短信登录</view>
					<view class="u-flex-1 u-text-right" @click="openPage('register/register')">注册</view>
				</view>
				
				<u-gap height="40"></u-gap>
				
				<view class="u-text-center u-tips-color" @click="openPage('findPassword/findPassword')">登录遇到问题，忘记密码了？</view>
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
			title: '账号密码登录',
			desc: '',
			form: {
				button: {
					loading: false
				}
			},
			model: {
				/* 账号 */
				user: '',
				/* 密码 */
				password: ''
			},
			rules: {
				user: [
					{
						required: true,
						message: '请输入手机号/邮箱/用户名',
						trigger: ['change', 'blur']
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码',
						trigger: ['change', 'blur']
					},
					{
						min: 6,
						max: 20,
						message: '密码长度在6到20个字符',
						trigger: ['change', 'blur']
					},
					{
						pattern: /^[0-9a-zA-Z]*$/g,
						transform(value) {
							return String(value);
						},
						message: '密码为字母或数字',
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
			this.$refs.uForm.validate(valid => {
				if (valid) {
					this.form.button.loading = true;
					api.login(this.model)
						.then(res => {
							this.form.button.loading = false;
							if (res.code == 1) {
								this.$u.vuex('vuex_user.logined', true);
								this.$u.vuex('vuex_user.id', res.data.uid);
								this.$u.vuex('vuex_token', res.data.token);
								uni.navigateBack();
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
