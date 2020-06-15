<template>
	<account-page :title="title">
		<view class="u-m-y-40 u-flex u-row-between">
			<u-button type="default" @click="unSet">未设置</u-button>
			<u-button type="primary" @click="seted">已设置</u-button>
		</view>
		<account-list-group>
			<account-list-item title="账号绑定" @click="openPage('accountBind/accountBind')"></account-list-item>
			<account-list-item v-if="list.model.password == false" title="登录密码" value="设置" @click="openPage('setPassword/setPassword')"></account-list-item>
			<account-list-item v-if="list.model.password == true" title="登录密码" value="修改" @click="openPage('updatePassword/updatePassword')"></account-list-item>
			<account-list-item v-if="list.model.userName == ''" title="用户名" value="设置" @click="openPage('setUserName/setUserName')"></account-list-item>
			<account-list-item v-if="list.model.userName != ''" title="用户名" :value="list.model.userName" @click="openPage('updateUserName/updateUserName')"></account-list-item>
			<account-list-item v-if="list.model.safetyQuestion == false" title="密保问题" value="设置" @click="openPage('setSafetyQuestion/setSafetyQuestion')"></account-list-item>
			<account-list-item v-if="list.model.safetyQuestion == true" title="密保问题" value="修改" @click="openPage('updateSafetyQuestion/updateSafetyQuestion')"></account-list-item>
			<account-list-item title="账号申诉" @click="openPage('accountAppeal/accountAppeal')"></account-list-item>
			<account-list-item title="账号注销" @click="openPage('accountDestroy/accountDestroy')"></account-list-item>
		</account-list-group>
		
		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
export default {
	data() {
		return {
			title: '账号与安全',
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
			this.list.model.password = true
			this.list.model.userName= 'qingsong'
			this.list.model.safetyQuestion= true
		},
		unSet() {
			this.list.model.password = false
			this.list.model.userName= ''
			this.list.model.safetyQuestion= false
		}
	}
};
</script>

<style lang="scss" scoped></style>
