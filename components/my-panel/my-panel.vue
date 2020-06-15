<template>
	<view class="my-wrap">
		<my-user-panel></my-user-panel>

		<my-trace-panel></my-trace-panel>

		<u-gap height="20"></u-gap>

		<my-order-panel></my-order-panel>

		<u-gap height="20"></u-gap>

		<my-service-order-panel></my-service-order-panel>

		<u-gap height="20"></u-gap>

		<my-wallet-panel></my-wallet-panel>

		<u-gap height="20"></u-gap>
		
		<my-other-panel></my-other-panel>

		<u-gap height="40"></u-gap>
	</view>
</template>

<script>
export default {
	name: 'my-panel',
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
