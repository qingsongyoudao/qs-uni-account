<template>
	<view class="qs-status-bar" :style="{ height: statusBarHeight }"><slot /></view>
</template>

<script>
var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';

export default {
	name: 'status-bar',
	data() {
		return {
			statusBarHeight: statusBarHeight
		};
	}
};
</script>

<style lang="scss" scoped>
.qs-status-bar {
	width: 100%;
	height: var(--status-bar-height);
}
</style>
