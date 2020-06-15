<template>
	<view class="account-form-box">
		<u-form :model="form" ref="form">
			<u-form-item class="form-item" label="手机号" prop="mobile" :label-position="labelPosition">
				<u-input v-model="form.model.mobile" placeholder="请输入手机号" type="number" />
			</u-form-item>
			<u-form-item class="form-item" label="短信验证码" prop="verifyCode" :label-position="labelPosition">
				<u-input v-model="form.model.verifyCode" placeholder="请输入验证码" type="number" />
				<u-button slot="right" type="success" size="mini" @click="getCode">{{ codeTips }}</u-button>
			</u-form-item>
		</u-form>

		<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>

		<u-gap height="40"></u-gap>

		<u-button type="primary" @click="submit">登 录</u-button>

		<u-gap height="40"></u-gap>

		<view class="u-flex">
			<view class="u-flex-1 u-text-left" @click="openPage('login/pwd-login')">密码登录</view>
			<view class="u-flex-1 u-text-center" @click="openPage('register/register')">注册</view>
			<view class="u-flex-1 u-text-right" @click="openPage('findPassword/findPassword')">忘记密码</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'sms-login',
	props: {
		// label的位置，left-左边，top-上边
		labelPosition: {
			type: String,
			default: 'top'
		}
	},
	data() {
		return {
			codeTips: '',
			form: {
				model: {
					/* 手机号 */
					mobile: '',
					/* 验证码 */
					verifyCode: ''
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
						}
					]
				}
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
			this.$refs.form.validate(valid => {
				if (valid) {
					this.$u.toast('验证通过');
				} else {
					this.$u.toast('验证失败');
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
		this.$refs.form.setRules(this.form.rules);
	}
};
</script>

<style lang="scss" scoped>
.account-form-box {
	padding: 0 32rpx;
}
</style>
