<template>
	<view>
		<account-page :title="title">
			<view class="form-group">
				<view class="form-item"><input v-model="form.model.mobile" type="number" placeholder="请输入手机号" /></view>
				<view class="form-item"><input v-model="form.model.verifyCode" type="number" placeholder="短信验证码" /></view>
				<view class="form-button"><u-button type="primary">登 录</u-button></view>
				<view class="u-flex u-row-between">
					<view @click="openPage('login/pwd-login')">密码登录</view>
					<view @click="openPage('findPassword/findPassword')">忘记密码</view>
				</view>
			</view>
		</account-page>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '短信验证码登录',
			form: {
				model: {
					/* 手机号 */
					mobile: '',
					/* 验证码 */
					verifyCode: ''
				}
			}
		};
	},
	methods: {
		openPage(path) {
			this.$u.route({
				url: '/pages/account/' + path
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.form-item {
	border-bottom: 1rpx solid $u-border-color;
	margin-top: 20rpx;
	padding: 20rpx 0;
}
.form-button {
	padding: 50rpx 40rpx;
}
</style>
