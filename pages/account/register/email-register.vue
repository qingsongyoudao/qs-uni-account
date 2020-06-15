<template>
	<view>
		<account-page :title="title">
			<view class="form-group">
				<view class="form-item">
					<input type="number" placeholder="您的常用邮箱" />
				</view>
				<view class="form-item">
					<input type="number" placeholder="邮件验证码" />
				</view>
				<view class="form-item">
					<input type="text" placeholder="6-20位的数字和字母" />
				</view>
				<view class="form-item">
					<input type="text" placeholder="请再次输入密码" />
				</view>
				<view class="form-button">
					<u-button type="primary">立即注册</u-button>
				</view>
				<view class="u-flex u-row-between">
					<view @click="openPage('register/mobile-register')">手机号注册</view>
					<view @click="openPage('login/login')">登录</view>
				</view>
			</view>
		</account-page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '邮箱注册'
			};
		},
		methods: {
			openPage(path) {
				this.$u.route({
					url: '/pages/account/' + path
				})
			}
		}
	}
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
