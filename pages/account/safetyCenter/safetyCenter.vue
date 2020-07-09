<template>
	<view class="account-page">
		<view class="page-header">
			<view class="page-title">{{ title }}</view>
		</view>
		<view class="page-body">
			<view class="list-box">
				<u-cell-group :border="border">
					<view class="panel-main">
						<u-cell-item title="账号绑定" value="" @click="openPage('accountBind/accountBind')" :border-bottom="borderBottom"></u-cell-item>
						<u-cell-item v-if="list.model.password == false" title="登录密码" value="设置" @click="openPage('setPassword/setPassword')" :border-bottom="borderBottom"></u-cell-item>
						<u-cell-item v-if="list.model.password == true" title="登录密码" value="修改" @click="openPage('updatePassword/updatePassword')" :border-bottom="borderBottom"></u-cell-item>
						<u-cell-item v-if="list.model.userName == ''" title="用户名" value="设置" @click="openPage('setUserName/setUserName')" :border-bottom="borderBottom"></u-cell-item>
						<u-cell-item v-if="list.model.userName != ''" title="用户名" :value="list.model.userName" @click="openPage('updateUserName/updateUserName')" :border-bottom="borderBottom"></u-cell-item>
						<u-cell-item v-if="list.model.safetyQuestion == false" title="密保问题" value="设置" @click="openPage('setSafetyQuestion/setSafetyQuestion')" :border-bottom="borderBottom"></u-cell-item>
						<u-cell-item v-if="list.model.safetyQuestion == true" title="密保问题" value="修改" @click="openPage('updateSafetyQuestion/updateSafetyQuestion')" :border-bottom="borderBottom"></u-cell-item>
						<u-cell-item title="账号申诉" @click="openPage('accountAppeal/accountAppeal')" :border-bottom="borderBottom"></u-cell-item>
						<u-cell-item title="账号注销" @click="openPage('accountDestroy/accountDestroy')" :border-bottom="borderBottom"></u-cell-item>
						<u-cell-item @click="seted" :border-bottom="borderBottom"></u-cell-item>
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
			title: '账号与安全',
			// 是否显示边框
			border: false,
			// 是否显示内边框
			borderBottom: false,
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
				url: '/pages/account/' + path
			});
		},
		seted() {
			this.list.model.password = true;
			this.list.model.userName = 'qingsong';
			this.list.model.safetyQuestion = true;
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../scss/account.scss';
</style>
