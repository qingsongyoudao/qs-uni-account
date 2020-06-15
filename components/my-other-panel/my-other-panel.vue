<template>
	<view class="other-panel-box">
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
	</view>
</template>

<script>
export default {
	name: 'my-other-panel',
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
.other-panel-box {
	.panel-main {
		padding: 10rpx 0;
	}
}
</style>
