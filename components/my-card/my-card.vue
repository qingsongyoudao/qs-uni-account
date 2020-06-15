<template>
	<view class="my-wrap">

		<u-gap height="20"></u-gap>

		<my-user-card></my-user-card>

		<u-gap height="20"></u-gap>

		<my-trace-card></my-trace-card>

		<u-gap height="20"></u-gap>

		<my-order-card></my-order-card>

		<u-gap height="20"></u-gap>

		<my-service-order-card></my-service-order-card>

		<u-gap height="20"></u-gap>

		<my-wallet-card></my-wallet-card>

		<u-gap height="20"></u-gap>

		<my-other-card></my-other-card>

		<u-gap height="40"></u-gap>
	</view>
</template>

<script>
export default {
	name: 'my-card',
	data() {
		return {};
	},
	methods: {
		openPage(path) {
			this.$u.route({
				url: '/pages/' + path
			});
		}
	}
};
</script>

<style lang="scss" scoped></style>
