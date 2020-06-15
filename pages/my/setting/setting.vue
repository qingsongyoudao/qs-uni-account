<template>
	<account-page :title="title">
		<my-setting></my-setting>
	</account-page>
</template>

<script>
export default {
	data() {
		return {
			title: '设置'
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

<style lang="scss" scoped></style>
