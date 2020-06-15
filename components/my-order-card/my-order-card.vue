<template>
	<view class="order-card-box">
		<u-grid :col="5" :border="false">
			<u-grid-item @click="openPage('my/order/order')">
				<u-icon name="order" label="待付款" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon>
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
			<u-grid-item class="all-order" @click="openPage('my/order/order')">
				<image class="cut-off-line" src="/static/user/cut_off_line.png" mode=""></image>
				<u-icon name="order" label="我的订单" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
export default {
	name: 'my-order-card',
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
.order-card-box {
	margin: 0 20rpx;
	padding: 10rpx 0;
	border-radius: 16rpx;
	background-color: #ffffff;
	
	.all-order {
		position: relative;
		.cut-off-line {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 0rpx;
			width: 30rpx;
			height: 160rpx;
		}
	}
}
</style>
