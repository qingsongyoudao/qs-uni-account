<template>
	<view class="other-panel-box">
		<u-cell-group :border="border">
			<view class="panel-main">
				<u-cell-item title="设置" @click="openPage('my/setting/setting')" :border-bottom="borderBottom"></u-cell-item>
				<u-cell-item title="帮助与反馈" :border-bottom="borderBottom"></u-cell-item>
				<u-cell-item title="关于" value="v1.0.0" :border-bottom="borderBottom"></u-cell-item>
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
		return {};
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
