<template>
	<account-page :title="title" :desc="desc">
		<pwd-login></pwd-login>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
import pwdLogin from '@/components/account/pwd-login.vue';
export default {
	components: {
		pwdLogin
	},
	data() {
		return {
			title: '账号密码登录',
			desc: ''
		};
	}
};
</script>

<style lang="scss" scoped></style>
