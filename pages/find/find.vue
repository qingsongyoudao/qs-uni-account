<template>
	<qs-page>
		<qs-navbar>
			<view class="u-m-l-30 u-font-xl">
				发现
			</view>
			<view class="u-flex u-m-r-22">
				<u-icon name="search" size="38" :custom-style="{'padding': '16rpx'}" @click="tip"></u-icon>
				<u-icon name="scan" size="38" :custom-style="{'padding': '16rpx'}" @click="tip"></u-icon>
			</view>
		</qs-navbar>
		<u-empty text="发现" mode="page"></u-empty>
	</qs-page>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		tip() {
			return this.$u.toast('暂未开通');
		}
	}
};
</script>

<style lang="scss" scoped></style>
