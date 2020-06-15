<template>
	<u-cell-item :title="title" :value="value" :border-bottom="borderBottom" @click="click"></u-cell-item>
</template>

<script>
export default {
	name: 'account-list-item',
	props: {
		// 左侧标题
		title: {
			type: [String, Number],
			default: ''
		},
		// 右侧内容
		value: {
			type: [String, Number],
			default: ''
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
		click() {
			this.$emit('click', this.index);
		}
	}
};
</script>

<style lang="scss" scoped></style>
