<template>
	<view class="">
		<view>{{ params.userId }}</view>
		<view>{{ params.userName }}</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			params: {
				userId: '',
				userName: ''
			}
		};
	},
	onLoad() {
		this.params = this.$Route.query;
		//this.params.userId = this.$Route.query.userId;
		//this.params.userName = this.$Route.query.userName;
	}
};
</script>

<style lang="scss"></style>
