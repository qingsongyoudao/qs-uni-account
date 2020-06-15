<template>
	<account-page :title="title">
		<account-list-group>
			<account-list-item title="通过邮箱注册" @click="openPage('register/email-register')"></account-list-item>
			<account-list-item title="通过手机号注册" @click="openPage('register/mobile-register')"></account-list-item>
		</account-list-group>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
export default {
	data() {
		return {
			title: '注册'
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
