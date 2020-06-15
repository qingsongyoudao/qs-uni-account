<template>
	<view class="account-form-box">
		<u-form :model="form" ref="form">
			<u-form-item class="form-item" label="姓名" prop="user" :label-position="labelPosition">
				<u-input v-model="form.model.user" placeholder="请输入手机号/邮箱/用户名" type="text" />
			</u-form-item>
			<u-form-item class="form-item" label="密码" prop="password" :label-position="labelPosition">
				<u-input v-model="form.model.password" placeholder="请输入登录密码" type="password" />
			</u-form-item>
		</u-form>

		<u-gap height="40"></u-gap>

		<u-button type="primary" @click="submit">登 录</u-button>

		<u-gap height="40"></u-gap>

		<view class="u-flex">
			<view class="u-flex-1 u-text-left" @click="openPage('login/sms-login')">短信登录</view>
			<view class="u-flex-1 u-text-center" @click="openPage('register/register')">注册</view>
			<view class="u-flex-1 u-text-right" @click="openPage('findPassword/findPassword')">忘记密码</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'pwd-login',
	props: {
		// label的位置，left-左边，top-上边
		labelPosition: {
			type: String,
			default: 'top'
		}
	},
	data() {
		return {
			form: {
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
