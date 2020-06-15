<template>
	<account-page :title="title" :desc="desc">
		<login></login>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
import login from '@/components/account/login.vue';
export default {
	components: {
		login
	},
	data() {
		return {
			title: '登录',
			desc: ''
		};
	}
};
</script>

<style lang="scss" scoped></style>
