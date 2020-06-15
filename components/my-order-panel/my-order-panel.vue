<template>
	<view class="order-panel-box">
		<view class="panel-header">
			<u-section title="我的订单" sub-title="查看全部订单" :bold="false" @click="openPage('my/order/order')"></u-section>
		</view>
		<u-grid :col="5" :border="false" class="panel-main">
			<u-grid-item @click="openPage('my/order/order')">
				<u-icon name="order" label="待付款" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon>
			</u-grid-item>
			<u-grid-item @click="openPage('my/order/order')">
				<u-icon name="order" label="待发货" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon>
			</u-grid-item>
			<u-grid-item @click="openPage('my/order/order')">
				<u-icon name="order" label="待收货" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon>
			</u-grid-item>
			<u-grid-item @click="openPage('my/order/order')">
				<u-icon name="order" label="待评价" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon>
			</u-grid-item>
			<u-grid-item @click="openPage('my/order/order')">
				<u-icon name="order" label="退款/售后" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
export default {
	name: 'my-order-panel',
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
.order-panel-box {
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
