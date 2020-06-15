<template>
	<view class="wallet-card-box">
		<u-grid :col="5" :border="false">
			<u-grid-item @click="openPage('my/wallet/integral')">
				<view class="u-font-xl">{{ list.model.integral }}</view>
				<view class="u-font-xs u-m-t-10">积分</view>
			</u-grid-item>
			<u-grid-item @click="openPage('my/wallet/coupon')">
				<view class="u-font-xl">{{ list.model.coupon }}</view>
				<view class="u-font-xs u-m-t-10">优惠券</view>
			</u-grid-item>
			<u-grid-item @click="openPage('my/wallet/redPacket')">
				<view class="u-font-xl">{{ list.model.redPacket }}</view>
				<view class="u-font-xs u-m-t-10">红包</view>
			</u-grid-item>
			<u-grid-item @click="openPage('my/wallet/money')">
				<view class="u-font-xl">{{ list.model.money }}</view>
				<view class="u-font-xs u-m-t-10">余额</view>
			</u-grid-item>
			<u-grid-item class="all-order" @click="openPage('my/wallet/wallet')">
				<image class="cut-off-line" src="/static/user/cut_off_line.png" mode=""></image>
				<u-icon name="order" label="我的钱包" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
export default {
	name: 'my-wallet-card',
	data() {
		return {
			list: {
				model: {
					/* 积分 */
					integral: '0',
					/* 优惠券 */
					coupon: '0',
					/* 红包 */
					redPacket: '0.00',
					/* 余额 */
					money: '0.00'
				}
			}
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
.wallet-card-box {
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
