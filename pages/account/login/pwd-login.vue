<template>
	<view>
		<account-page :title="title">
			<view class="form-group">
				<view class="form-item"><input v-model="form.model.user" type="text" placeholder="请输入手机号/邮箱/用户名" /></view>
				<view class="form-item"><input v-model="form.model.password" type="text" placeholder="请输入登录密码" /></view>
				<view class="form-button"><u-button type="primary">登 录</u-button></view>
				<view class="u-flex u-row-between">
					<view @click="openPage('login/sms-login')">短信登录</view>
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
			title: '账号密码登录',
			form: {
				model: {
					/* 账号 */
					user: '',
					/* 密码 */
					password: ''
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
