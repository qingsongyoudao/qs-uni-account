<template>
	<view class="cell-group-wrap">
		<u-cell-group :border="false"><slot /></u-cell-group>
	</view>
</template>

<script>
export default {
	name: 'account-list-group',
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
	padding: 10rpx 0;
	background-color: #ffffff;
}
</style>
