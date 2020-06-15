<template>
	<account-page :title="title" :desc="desc">
		<find-password></find-password>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
import findPassword from '@/components/account/find-password.vue';
export default {
	components: {
		findPassword
	},
	data() {
		return {
			title: '找回密码',
			desc: ''
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
