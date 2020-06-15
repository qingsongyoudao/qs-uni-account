<template>
	<view class="cell-group-wrap">
		<u-cell-group :border="false"><slot /></u-cell-group>
	</view>
</template>

<script>
export default {
	name: 'account-list-card-group',
	props: {
		// 分组标题
		title: {
			type: String,
			default: ''
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.cell-group-wrap {
	margin: 0 20rpx;
	padding: 10rpx 0;
	border-radius: 16rpx;
	background-color: #ffffff;
}
</style>
