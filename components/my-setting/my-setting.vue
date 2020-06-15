<template>
	<view class="my-setting-box">
		<u-cell-group :border="border">
			<view class="panel-main">
				<u-cell-item
					:title="item.title"
					:value="item.value"
					@click="openPage(item.path)"
					:border-bottom="borderBottom"
					v-for="(item, index) in cells"
					:key="index"
				></u-cell-item>
			</view>
		</u-cell-group>
				
		<u-gap height="60"></u-gap>
		
		<view class="btn-line">
			<u-button type="primary">退出登录</u-button>
		</view>
				
		<u-gap height="40"></u-gap>
	</view>
</template>

<script>
export default {
	name: 'my-setting',
	props: {
		// 是否显示边框
		border: {
			type: Boolean,
			default: false
		},
		// 是否显示内边框
		borderBottom: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			cells: [
				{
					title: '账号与安全',
					value: '',
					path: 'account/safetyCenter/safetyCenter'
				},
				{
					title: '清除缓存',
					value: '',
					path: ''
				},
				{
					title: '意见反馈',
					value: '',
					path: ''
				},
				{
					title: '分享给朋友',
					value: '',
					path: ''
				},
				{
					title: '关于我们',
					value: '',
					path: ''
				},
				{
					title: '清除缓存',
					value: '',
					path: ''
				}
			]
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
.my-setting-box {
	.panel-main {
		padding: 10rpx 0;
	}
	.btn-line {
		margin: 0 32rpx;
	}
}
</style>
