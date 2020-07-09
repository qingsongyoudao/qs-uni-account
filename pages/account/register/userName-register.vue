<template>
	<view class="account-page">
		<view class="page-header">
			<view class="page-title">{{ title }}</view>
		</view>
		<view class="page-body">
			<view class="form-box">
				<u-form :model="model" ref="uForm" label-position="top">
					<u-form-item class="form-item" label="用户名" prop="userName">
						<u-input v-model="model.userName" placeholder="4-20位的数字和字母" type="text" />
					</u-form-item>
					<u-form-item class="form-item" label="密码" prop="password">
						<u-input v-model="model.password" placeholder="6-20位的数字和字母" type="password" />
					</u-form-item>
					<u-form-item class="form-item" label="确认密码" prop="confirmPassword">
						<u-input v-model="model.confirmPassword" placeholder="请再次输入密码" type="password" />
					</u-form-item>
				</u-form>

				<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>

				<u-gap height="40"></u-gap>

				<u-button :disabled="form.button.loading" type="primary" @click="submit">立即提交</u-button>

				<u-gap height="40"></u-gap>

				<view class="u-flex u-row-between">
					<view @click="openPage('register/mobile-register')">手机号注册</view>
					<view @click="openPage('login/login')">登录</view>
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
			title: '用户名注册',
			desc: '',
			codeTips: '',
			form: {
				button: {
					loading: false
				}
			},
			model: {
				/* 用户名 */
				userName: '',
				/* 密码 */
				password: '',
				/* 确认密码 */
				confirmPassword: ''
			},
			rules: {
				userName: [
					{
						required: true,
						message: '请输入用户名',
						trigger: ['change', 'blur']
					},
					{
						min: 4,
						max: 20,
						message: '用户名长度在4到20个字符',
						trigger: ['change', 'blur']
					},
					{
						pattern: /^[0-9a-zA-Z]*$/g,
						transform(value) {
							return String(value);
						},
						message: '用户名为字母或数字',
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
				],
				confirmPassword: [
					{
						required: true,
						message: '请再次输入密码',
						trigger: ['change', 'blur']
					},
					{
						validator: (rule, value, callback) => {
							return value === this.model.password;
						},
						message: '两次输入的密码不相等',
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
					api.register(this.model)
						.then(res => {
							this.form.button.loading = false;
							console.log(res);
							if (res.code == 1) {
								this.$u.vuex('vuex_user.hasLogin', true);
								this.$u.vuex('vuex_user.id', res.data.uid);
								this.$u.vuex('vuex_token.accessToken', res.data.token);
								uni.navigateBack();
								return this.$u.toast('注册成功');
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
