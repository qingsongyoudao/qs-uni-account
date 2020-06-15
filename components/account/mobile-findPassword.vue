<template>
	<view class="account-form-box">
		<u-form :model="form" ref="form">
			<u-form-item class="form-item" label="手机号" prop="mobile" :label-position="labelPosition">
				<u-input v-model="form.model.mobile" placeholder="已验证的手机号" type="text" />
			</u-form-item>
			<u-form-item class="form-item" label="短信验证码" prop="verifyCode" :label-position="labelPosition">
				<u-input v-model="form.model.verifyCode" placeholder="请输入验证码" type="number" />
				<u-button slot="right" type="success" size="mini" @click="getCode">{{ codeTips }}</u-button>
			</u-form-item>
			<u-form-item class="form-item" label="设置新密码" prop="newPassword" :label-position="labelPosition">
				<u-input v-model="form.model.newPassword" placeholder="新密码(6-20位的数字和字母)" type="password" />
			</u-form-item>
			<u-form-item class="form-item" label="确认密码" prop="confirmPassword" :label-position="labelPosition">
				<u-input v-model="form.model.confirmPassword" placeholder="请再次输入新密码" type="password" />
			</u-form-item>
		</u-form>

		<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>

		<u-gap height="40"></u-gap>

		<u-button type="primary" @click="submit">立即提交</u-button>

		<u-gap height="40"></u-gap>

		<view class="u-flex u-row-between">
			<view @click="openPage('findPassword/email-findPassword')">邮箱找回密码</view>
			<view @click="openPage('login/login')">登录</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'mobile-findPassword',
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
					verifyCode: '',
					/* 新密码 */
					newPassword: '',
					/* 确认密码 */
					confirmPassword: ''
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
	}
};
</script>

<style lang="scss" scoped>
.account-form-box {
	padding: 0 32rpx;
}
</style>
