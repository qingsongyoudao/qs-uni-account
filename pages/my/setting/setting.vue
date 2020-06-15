<template>
	<account-page :title="title">
		<account-list-group>
			<account-list-item title="账号与安全" @click="openPage('account/safetyCenter/safetyCenter')"></account-list-item>
			<account-list-item title="清除缓存"></account-list-item>
			<account-list-item title="意见反馈"></account-list-item>
			<account-list-item title="分享给朋友"></account-list-item>
			<account-list-item title="关于我们"></account-list-item>
			<account-list-item title="清除缓存"></account-list-item>
		</account-list-group>
				
		<u-gap height="100"></u-gap>
		
		<view>
			<u-button type="primary">退出登录</u-button>
		</view>
		
		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
export default {
	data() {
		return {
			title: '设置',
			list: {
				model: {
					/* 密码 */
					password: false,
					/* 用户名 */
					userName: '',
					/* 密保问题 */
					safetyQuestion: false
				}
			}
		};
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
