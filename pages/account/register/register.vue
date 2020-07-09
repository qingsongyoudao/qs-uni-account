<template>
	<view class="account-page">
		<view class="page-header">
			<view class="page-title">{{ title }}</view>
		</view>
		<view class="page-body">
			<view class="panel-box">
				<u-cell-group :border="false">
					<view class="panel-main">
						<u-cell-item
							:title="item.title"
							:value="item.value"
							@click="openPage(item.path)"
							:border-bottom="false"
							v-for="(item, index) in cells"
							:key="index"
						></u-cell-item>
					</view>
				</u-cell-group>
			</view>

			<u-gap height="60"></u-gap>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '注册',
			cells: [
				{
					title: '通过用户名注册',
					value: '',
					path: 'register/userName-register'
				},
				{
					title: '通过邮箱注册',
					value: '',
					path: 'register/email-register'
				},
				{
					title: '通过手机号注册',
					value: '',
					path: 'register/mobile-register'
				}
			]
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
