<template>
	<account-page :title="title" :desc="desc">
		<mobile-register></mobile-register>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
import mobileRegister from '@/components/account/mobile-register.vue';
export default {
	components: {
		mobileRegister
	},
	data() {
		return {
			title: '手机号注册',
			desc: ''
		};
	}
};
</script>

<style lang="scss" scoped></style>
