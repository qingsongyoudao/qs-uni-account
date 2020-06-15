<template>
	<account-page :title="title"></account-page>
</template>

<script>
export default {
	data() {
		return {
			title: '账户注销'
		};
	},
	methods: {
		openPage(path) {
			this.$u.route({
				url: '/pages/account/' + path
			});
		}
	}
};
</script>

<style lang="scss" scoped></style>
