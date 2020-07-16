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

				<u-gap height="60"></u-gap>

				<view class="btn-line"><u-button type="primary" @click="logout">退出登录</u-button></view>
			</view>

			<u-gap height="60"></u-gap>
		</view>
	</view>
</template>

<script>
var api = require('@/common/js/account.api.js');

export default {
	data() {
		return {
			title: '设置',
			cells: [
				{
					title: '账号与安全',
					value: '',
					path: 'account/safetyCenter/safetyCenter'
				},
				{
					title: '清除缓存',
					value: '',
					path: ''
				},
				{
					title: '意见反馈',
					value: '',
					path: ''
				},
				{
					title: '分享给朋友',
					value: '',
					path: ''
				},
				{
					title: '关于我们',
					value: '',
					path: ''
				},
				{
					title: '清除缓存',
					value: '',
					path: ''
				}
			]
		};
	},
	methods: {
		openPage(path) {
			this.$u.route({
				url: '/pages/' + path
			});
		},
		logout() {
			let params = {}
			params.token = this.vuex_token;
			api.logout(params)
				.then(res => {
					console.log(res);
					this.$u.vuex('vuex_user.logined', false);
					this.$u.vuex('vuex_user.id', '');
					this.$u.vuex('vuex_token', '');
					return this.$u.toast('退出成功');
					if (res.code == 1) {
						this.$u.vuex('vuex_user.logined', false);
						this.$u.vuex('vuex_user.id', '');
						this.$u.vuex('vuex_token', '');
						return this.$u.toast('退出成功');
					} else {
						return this.$u.toast(res.msg);
					}
				})
				.catch(err => {
					console.log(err);
					return this.$u.toast('出错，请稍后再试');
				});
			return;
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../../account/scss/account.scss';
</style>
