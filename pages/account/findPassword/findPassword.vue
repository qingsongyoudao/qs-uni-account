<template>
	<account-page :title="title">
		<account-list-group>
			<account-list-item title="通过邮箱找回密码" @click="openPage('findPassword/email-findPassword')"></account-list-item>
			<account-list-item title="通过手机号找回密码" @click="openPage('findPassword/mobile-findPassword')"></account-list-item>
		</account-list-group>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
export default {
	data() {
		return {
			title: '找回密码'
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
