<template>
	<account-page :title="title" :desc="desc">
		<mobile-findPassword></mobile-findPassword>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
import mobileFindPassword from '@/components/account/mobile-findPassword.vue';
export default {
	components: {
		mobileFindPassword
	},
	data() {
		return {
			title: '通过手机号找回密码',
			desc: ''
		};
	}
};
</script>

<style lang="scss" scoped></style>
