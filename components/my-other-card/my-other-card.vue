<template>
	<view class="other-card-box">
		<view class="panel-wrap">
			<u-cell-group :border="border">
				<u-cell-item
					:title="item.title"
					:value="item.value"
					@click="openPage(item.path)"
					:border-bottom="borderBottom"
					v-for="(item, index) in cells"
					:key="index"
				></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
export default {
	name: 'my-other-card',
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
					title: '设置',
					value: '',
					path: 'my/setting/setting'
				},
				{
					title: '帮助与反馈',
					value: '',
					path: ''
				},
				{
					title: '关于',
					value: 'v1.0.0',
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
.other-card-box {
	.panel-wrap {
		margin: 0 20rpx;
		padding: 10rpx 0;
		border-radius: 16rpx;
		background-color: #ffffff;
	}
}
</style>
