<template>
	<account-page :title="title" :desc="desc">
		<account-bind></account-bind>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
import accountBind from '@/components/account/account-bind.vue';
export default {
	components: {
		accountBind
	},
	data() {
		return {
			title: '账号绑定',
			desc: '可以通过已经绑定的信息登录或找回密码'
		};
	}
};
</script>

<style lang="scss" scoped></style>
