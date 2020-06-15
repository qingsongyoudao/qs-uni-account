<template>
	<account-page :title="title" :desc="desc">
		<sms-login></sms-login>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
import smsLogin from '@/components/account/sms-login.vue';
export default {
	components: {
		smsLogin
	},
	data() {
		return {
			title: '短信验证码登录',
			desc: ''
		};
	}
};
</script>

<style lang="scss" scoped></style>
