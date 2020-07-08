<template>
	<view class="u-tabbar" :style="{
		height: $u.addUnit(height),
		backgroundColor: bgColor,
		
	}">
		<view class="u-tabbar__item">
			<u-icon size="40" name="/static/uview/example/component.png"></u-icon>
			<view class="u-tabbar__item__text">
				<text>首页</text>
			</view>
		</view>
		<view class="u-tabbar__item">
			<u-icon size="40" name="map"></u-icon>
			<view class="u-tabbar__item__text">
				<text>首页</text>
			</view>
		</view>
		<view class="u-tabbar__item">
			<u-icon size="40" name="map"></u-icon>
			<view class="u-tabbar__item__text">
				<text>首页</text>
			</view>
		</view>
		<view class="u-tabbar__item">
			<u-icon size="40" name="map"></u-icon>
			<view class="u-tabbar__item__text">
				<text>首页</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 整个tabbar的背景颜色
			bgColor: {
				type: String,
				default: '#bbb'
			},
			// tabbar的高度，默认50px，单位任意，如果为数值，则为rpx单位
			height: {
				type: [String, Number],
				default: '50px'
			},
			
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.u-tabbar {
		display: flex;
		align-items: center;
		
		&__item {
			flex: 1;
			justify-content: center;
			
			&__text {
				color: $u-content-color;
				font-size: 28rpx;
			}
		}
	}
</style>
