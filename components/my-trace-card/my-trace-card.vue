<template>
	<view class="trace-card-box">
		<u-grid :col="4" :border="false" class="card-main">
			<u-grid-item @click="openPage('my/trace/product')">
				<view class="u-font-xl">{{ list.model.product }}</view>
				<view class="u-font-xs u-m-t-10">商品关注</view>
			</u-grid-item>
			<u-grid-item @click="openPage('my/trace/brand')">
				<view class="u-font-xl">{{ list.model.brand }}</view>
				<view class="u-font-xs u-m-t-10">品牌关注</view>
			</u-grid-item>
			<u-grid-item @click="openPage('my/trace/order')">
				<view class="u-font-xl">{{ list.model.activity }}</view>
				<view class="u-font-xs u-m-t-10">活动关注</view>
			</u-grid-item>
			<u-grid-item @click="openPage('my/trace/order')">
				<view class="u-font-xl">{{ list.model.history }}</view>
				<view class="u-font-xs u-m-t-10">浏览记录</view>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
export default {
	name: 'my-trace-card',
	data() {
		return {
			list: {
				model: {
					/* 商品关注 */
					product: '0',
					/* 品牌关注 */
					brand: '0',
					/* 活动关注 */
					activity: '0',
					/* 浏览记录 */
					history: '0'
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
.trace-card-box {
	margin: 0 20rpx;
	border-radius: 16rpx;
	background-color: #ffffff;
	padding: 10rpx 0;
}
</style>
