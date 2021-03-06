<template>
	<view class="account-page">
		<view class="page-header">
			<view class="page-title">{{ title }}</view>
		</view>
		<view class="page-body">
			<view class="form-box">
				<u-form :model="model" ref="uForm" label-position="top">
					<u-form-item class="form-item" label="当前邮箱" prop="currentEmail">
						<u-input :disabled="true" v-model="model.currentEmail" type="text" />
					</u-form-item>
					<u-form-item class="form-item" label="新邮箱" prop="newEmail">
						<u-input v-model="model.newEmail" placeholder="请输入新邮箱" type="text" />
					</u-form-item>
					<u-form-item class="form-item" label="邮件验证码" prop="verifyCode">
						<u-input v-model="model.verifyCode" placeholder="请输入验证码" type="number" />
						<u-button slot="right" type="success" size="mini" @click="getCode">{{ codeTips }}</u-button>
					</u-form-item>
				</u-form>

				<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>

				<u-gap height="40"></u-gap>

				<u-button :disabled="form.button.loading" type="primary" @click="submit">确认换绑</u-button>
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
			title: '换绑邮箱',
			desc: '',
			codeTips: '',
			form: {
				button: {
					loading: false
				}
			},
			model: {
				/* 当前邮箱 */
				currentEmail: '',
				/* 新邮箱 */
				newEmail: '',
				/* 验证码 */
				verifyCode: ''
			},
			rules: {
				newEmail: [
					{
						required: true,
						message: '请输入新邮箱',
						trigger: ['change', 'blur']
					},
					{
						validator: (rule, value, callback) => {
							return this.$u.test.email(value);
						},
						message: '邮箱格式不正确',
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
			this.$refs.uForm.validate(valid => {
				if (valid) {
					this.form.button.loading = true;
					let params = this.model;
					params.token = this.vuex_token;
					api.updateEmail(params)
						.then(res => {
							this.form.button.loading = false;
							console.log(res);
							if (res.code == 1) {
								return this.$u.toast('换绑成功');
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
				setTimeout(() => {
					uni.hideLoading();
					// 这里此提示会被this.start()方法中的提示覆盖
					this.$u.toast('验证码已发送');
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				}, 2000);
			} else {
				this.$u.toast('倒计时结束后再发送');
			}
		}
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	onLoad() {
		if (this.vuex_user.hasLogin) {
			let params = {};
			params.token = this.vuex_token;
			api.getAccount(params)
				.then(res => {
					console.log(res);
					if (res.code == 1) {
						this.model.currentEmail = res.data.email;
					} else {
						return this.$u.toast(res.msg);
					}
				})
				.catch(err => {
					console.log(err);
					return this.$u.toast('出错，请稍后再试');
				});
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../scss/account.scss';
</style>
