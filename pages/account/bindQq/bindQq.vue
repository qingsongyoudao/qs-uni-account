<template>
	<view class="account-page">
		<view class="page-header">
			<view class="page-title">{{ title }}</view>
		</view>
		<view class="page-body">
		<view class="form-box">
			<u-gap height="100"></u-gap>
			
			<view class="u-flex">
				<view class="u-flex-1 u-m-r-30"><u-button type="primary" @click="submit">去绑定</u-button></view>
				<view class="u-flex-1 u-n-l-30"><u-button type="default" @click="cancel">取 消</u-button></view>
			</view>
		</view>
		
			<u-gap height="60"></u-gap>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '绑定 QQ 账号',
			desc: ''
		};
	},
	methods: {
		submit() {
			return this.$u.toast('绑定成功');
		},
		cancel() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../scss/account.scss';
</style>
