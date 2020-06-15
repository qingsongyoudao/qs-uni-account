<template>
	<view>
		<account-page :title="title" :desc="desc">
			<view class="form-group">
				<view class="form-item">
					<input type="text" placeholder="请输入密码" />
				</view>
				<view class="form-item">
					<input type="text" placeholder="请再次输入密码" />
				</view>
				<view class="form-button">
					<u-button type="primary">确认设置</u-button>
				</view>
			</view>
		</account-page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '设置密码',
				desc: '6至20位，由数字或字母组成'
			};
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
