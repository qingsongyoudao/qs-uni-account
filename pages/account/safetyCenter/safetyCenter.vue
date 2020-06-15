<template>
	<account-page :title="title" :desc="desc">
		<safety-center></safety-center>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
import safetyCenter from '@/components/account/safety-center.vue';
export default {
	components: {
		safetyCenter
	},
	data() {
		return {
			title: '账号与安全',
			desc: ''
		};
	}
};
</script>

<style lang="scss" scoped></style>
