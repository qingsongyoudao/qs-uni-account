<template>
	<view>
		<account-page :title="title">
			<view class="form-group">
				<view class="form-item">
					<input type="number" placeholder="已验证的邮箱" />
				</view>
				<view class="form-item">
					<input type="number" placeholder="邮件验证码" />
				</view>
				<view class="form-item">
					<input type="text" placeholder="新密码(6-20位的数字和字母)" />
				</view>
				<view class="form-item">
					<input type="text" placeholder="请再次输入新密码" />
				</view>
				<view class="form-button">
					<u-button type="primary">立即提交</u-button>
				</view>
				<view class="u-flex u-row-between">
					<view @click="openPage('findPassword/mobile-findPassword')">手机号找回密码</view>
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
				title: '通过邮箱找回密码'
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
