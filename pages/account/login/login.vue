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
			title: '登录',
			cells: [
				{
					title: '账号密码登录',
					value: '',
					path: 'login/pwd-login'
				},
				{
					title: '短信验证码登录',
					value: '',
					path: 'login/sms-login'
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
