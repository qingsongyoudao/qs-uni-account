<template>
	<view class="qs-navbar">
		<view class="qs-navbar-inner" :style="[navbarInnerStyle]">
			<slot>
				<view><slot name="left"></slot></view>
				<view><slot name="center"></slot></view>
				<view><slot name="right"></slot></view>
			</slot>
		</view>
	</view>
</template>

<script>
// 获取系统状态栏的高度
let systemInfo = uni.getSystemInfoSync();
// 如果是小程序，获取右上角胶囊的尺寸信息，避免导航栏右侧内容与胶囊重叠
let menuButtonInfo = {};
// #ifdef MP-WEIXIN || MP-BAIDU || MP-TOUTIAO || MP-QQ
menuButtonInfo = uni.getMenuButtonBoundingClientRect();
// #endif

export default {
	name: 'nav-bar',
	props: {
		// 导航栏高度，单位px，非rpx
		height: {
			type: [String, Number],
			default: ''
		}
	},
	data() {
		return {
			menuButtonInfo: menuButtonInfo
		};
	},
	computed: {
		// 导航栏内部盒子的样式
		navbarInnerStyle() {
			let style = {};
			// 导航栏宽度，如果在小程序下，导航栏宽度为胶囊的左边到屏幕左边的距离
			style.height = this.navbarHeight + 'px';
			// // 如果是各家小程序，导航栏内部的宽度需要减少右边胶囊的宽度
			// #ifdef MP
			let rightButtonWidth = systemInfo.windowWidth - menuButtonInfo.left;
			style.marginRight = rightButtonWidth + 'px';
			// #endif
			return style;
		},
		// 转换字符数值为真正的数值
		navbarHeight() {
			// #ifdef APP-PLUS || H5
			return this.height ? this.height : 44;
			// #endif
			// #ifdef MP
			// 导航高度
			let navHeight = systemInfo.platform == 'ios' ? 44 : 48;
			return this.height ? this.height : navHeight;
			// #endif
		}
	}
};
</script>

<style lang="scss">
.qs-navbar {
	width: 100%;
}
.qs-navbar-inner {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
