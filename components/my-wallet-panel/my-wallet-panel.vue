<template>
	<view class="wallet-panel-box">
		<view class="panel-header">
			<u-section title="我的钱包" sub-title="查看全部" :bold="false" @click="openPage('my/wallet/wallet')"></u-section>
		</view>
		<u-grid :col="4" :border="false" class="panel-main">
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
		</u-grid>
	</view>
</template>

<script>
export default {
	name: 'my-wallet-panel',
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
.wallet-panel-box {
	background-color: #ffffff;
	
	.panel-header {
		padding: 30rpx 30rpx 20rpx 30rpx;
		border-bottom: 1rpx solid $qs-border-color-light;
	}
	
	.panel-main {
		padding: 10rpx 10rpx;
	}
}
</style>
