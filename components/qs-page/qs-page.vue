<template>
	<!-- 页面 -->
	<view class="qs-page">
		<!-- 头部 -->
		<view v-if="header">
			<view class="qs-page-header" :style="[headerStyle]"><slot name="header"></slot></view>
			<!-- 解决 fixed 定位后塌陷的问题 -->
			<view class="qs-page-header-placeholder"><slot name="header-placeholder"></slot></view>
		</view>
		<!-- 主体 -->
		<view class="qs-page-body"><slot></slot></view>
		<!-- 底部 -->
		<view v-if="footer">
			<view class="qs-page-footer" :style="[footerStyle]"><slot name="footer"></slot></view>
			<!-- 解决 fixed 定位后塌陷的问题 -->
			<view class="qs-page-footer-placeholder"><slot name="footer-placeholder"></slot></view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'qs-page',
	props: {
		// 头部
		header: {
			type: Boolean,
			default: false
		},
		// 头部背景
		headerBg: {
			type: String,
			default: '#FFFFFF'
		},
		// 底部
		footer: {
			type: Boolean,
			default: false
		},
		// 底部背景
		footerBg: {
			type: String,
			default: 'none'
		}
	},
	data() {
		return {};
	},
	computed: {
		// 头部的样式
		headerStyle() {
			let style = {};
			style.background = this.headerBg;
			return style;
		},
		// 底部的样式
		footerStyle() {
			let style = {};
			style.background = this.footerBg;
			return style;
		}
	}
};
</script>

<style lang="scss" scoped>
/* -- 页面 -- */
/* #ifndef MP */
page {
	width: 100%;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	flex: 1;
	background-color: $uni-bg-color-grey;
}
/* #endif */
.qs-page {
	width: 100%;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	flex: 1;
	background-color: $uni-bg-color-grey;
}
/* #ifdef MP */
.qs-page {
	min-height: 100vh;
}
/* #endif */
/* -- 头部 -- */
.qs-page-header {
	width: 100%;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 991;
}
/* -- 主体 -- */
.qs-page-body {
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
}
/* -- 底部 -- */
.qs-page-footer {
	width: 100%;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 991;
}
/* -- fixed 占位 -- */
.qs-page-header-placeholder,
.qs-page-footer-placeholder {
	width: 100%;
}
</style>
