<template>
	<account-page :title="title">
		<account-list-group>
			<account-list-item title="账号密码登录" @click="openPage('login/pwd-login')"></account-list-item>
			<account-list-item title="短信验证码登录" @click="openPage('login/sms-login')"></account-list-item>
		</account-list-group>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
export default {
	data() {
		return {
			title: '登录'
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
