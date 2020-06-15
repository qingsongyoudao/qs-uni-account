<template>
	<account-page :title="title" :desc="desc">
		<email-register></email-register>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
import emailRegister from '@/components/account/email-register.vue';
export default {
	components: {
		emailRegister
	},
	data() {
		return {
			title: '邮箱注册',
			desc: ''
		};
	}
};
</script>

<style lang="scss" scoped></style>
