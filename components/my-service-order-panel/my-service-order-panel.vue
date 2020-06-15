<template>
	<view class="service-order-panel-box">
		<view class="panel-header">
			<u-section title="我的工单" sub-title="查看全部工单" :bold="false" @click="openPage('my/serviceOrder/serviceOrder')"></u-section>
		</view>
		<u-grid :col="4" :border="false" class="panel-main">
			<u-grid-item @click="openPage('my/serviceOrder/serviceOrder')">
				<u-icon name="order" label="匹配中" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon>
			</u-grid-item>
			<u-grid-item @click="openPage('my/serviceOrder/serviceOrder')">
				<u-icon name="order" label="待付款" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon>
			</u-grid-item>
			<u-grid-item @click="openPage('my/serviceOrder/serviceOrder')">
				<u-icon name="order" label="服务中" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon>
			</u-grid-item>
			<u-grid-item @click="openPage('my/serviceOrder/serviceOrder')">
				<u-icon name="order" label="待评价" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
export default {
	name: 'my-service-order-panel',
	data() {
		return {
		};
	},
	methods: {
		openPage(path) {
			this.$u.route({
				url: '/pages/' + path
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.service-order-panel-box {
	background-color: #ffffff;
	
	.panel-header {
		padding: 30rpx 32rpx 20rpx 32rpx;
		border-bottom: 1rpx solid $qs-border-color-light;
	}
	
	.panel-main {
		padding: 10rpx 10rpx;
	}
}
</style>
