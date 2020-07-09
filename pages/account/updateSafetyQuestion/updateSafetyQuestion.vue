<template>
	<view class="account-page">
		<view class="page-header">
			<view class="page-title">{{ title }}</view>
		</view>
		<view class="page-body">
			<u-gap height="60"></u-gap>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '修改密保问题'
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

<style lang="scss" scoped>
@import '../scss/account.scss';
</style>
