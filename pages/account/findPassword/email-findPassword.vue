<template>
	<account-page :title="title" :desc="desc">
		<email-findPassword></email-findPassword>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
import emailFindPassword from '@/components/account/email-findPassword.vue';
export default {
	components: {
		emailFindPassword
	},
	data() {
		return {
			title: '通过邮箱找回密码',
			desc: ''
		};
	}
};
</script>

<style lang="scss" scoped></style>
