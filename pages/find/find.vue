<template>
	<qs-page :header="true">
		<!-- 页面头部 -->
		<block slot="header">
			<status-bar></status-bar>
			<nav-bar>
				<view class="u-m-l-30 u-font-xl">发现</view>
				<view class="u-flex u-m-r-10">
					<u-icon name="search" size="38" :custom-style="{ padding: '20rpx' }" @click="tip"></u-icon>
					<u-icon name="scan" size="38" :custom-style="{ padding: '20rpx' }" @click="tip"></u-icon>
				</view>
			</nav-bar>
		</block>
		<block slot="header-placeholder">
			<status-bar></status-bar>
			<nav-bar></nav-bar>
		</block>

		<!-- 页面主体 -->
		<u-gap height="20"></u-gap>

		<view class="list-box">
			<u-cell-group v-for="(item, index) in list" :key="index" :border="false">
				<view class="list-main">
					<u-cell-item
						:title="item1.title"
						:value="item1.value"
						@click="openPage(item1.path)"
						v-for="(item1, index1) in item.cells"
						:key="index1"
						:border-bottom="false"
					></u-cell-item>
				</view>
			</u-cell-group>
		</view>

		<u-gap height="60"></u-gap>
	</qs-page>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					cells: [
						{
							title: '扫一扫',
							value: '',
							path: ''
						}
					]
				},
				{
					cells: [
						{
							title: '搜一搜',
							value: '',
							path: ''
						},
						{
							title: '看一看',
							value: '',
							path: ''
						}
					]
				},
				{
					cells: [
						{
							title: '注册',
							value: '',
							path: 'account/register/register'
						},
						{
							title: '登录',
							value: '',
							path: 'account/login/login'
						},
						{
							title: '找回密码',
							value: '',
							path: 'account/findPassword/findPassword'
						}
					]
				}
			]
		};
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

<style lang="scss" scoped>
.list-box {
	.list-main {
		padding: 10rpx 0;
		margin-bottom: 20rpx;
	}
}
</style>
