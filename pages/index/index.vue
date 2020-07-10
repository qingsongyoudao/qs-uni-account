<template>
	<qs-page :header="true">
		<!-- 页面头部 -->
		<block slot="header">
			<status-bar></status-bar>
			<nav-bar>
				<view class="u-flex u-m-l-10">
					<u-icon name="search" size="38" :custom-style="{ padding: '20rpx' }" @click="tip"></u-icon>
				</view>
				<view class="u-flex u-m-r-10">
					<u-icon name="chat" size="38" :custom-style="{ padding: '20rpx' }" @click="tip"></u-icon>
					<u-icon name="scan" size="38" :custom-style="{ padding: '20rpx' }" @click="tip"></u-icon>
				</view>
			</nav-bar>
		</block>
		<block slot="header-placeholder">
			<status-bar></status-bar>
			<nav-bar></nav-bar>
		</block>

		<!-- 页面主体 -->
	</qs-page>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		// 打开页面
		openPage(path) {
			if (path == '') {
				return this.$u.toast('暂未开通');
			}
			this.$u.route({
				url: '/pages/' + path
			});
		},
		// 提示
		tip() {
			return this.$u.toast('暂未开通');
		}
	}
};
</script>

<style lang="scss" scoped></style>
