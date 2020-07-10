<template>
	<qs-page>
		<view class="user-box">
			<u-gap height="20"></u-gap>

			<u-cell-group :border="list.border">
				<u-cell-item title="头像" :center="true" :border-bottom="list.borderBottom"><u-avatar :src="list.model.avatar" mode="circle"></u-avatar></u-cell-item>
				<u-cell-item title="用户名" :value="list.model.userName" :arrow="false" :border-bottom="list.borderBottom"></u-cell-item>
				<u-cell-item title="昵称" :value="list.model.nickName" :border-bottom="list.borderBottom"></u-cell-item>
			</u-cell-group>

			<u-gap height="20"></u-gap>

			<u-cell-group :border="list.border">
				<u-cell-item title="真实姓名" :value="list.model.realName" :border-bottom="list.borderBottom"></u-cell-item>
				<u-cell-item title="性别" :value="list.model.sex" :border-bottom="list.borderBottom"></u-cell-item>
				<u-cell-item title="出生日期" :value="list.model.birthDate" :border-bottom="list.borderBottom"></u-cell-item>
				<u-cell-item title="区域" :value="list.model.area" :border-bottom="list.borderBottom"></u-cell-item>
				<u-cell-item title="地址" :value="list.model.address" :border-bottom="list.borderBottom"></u-cell-item>
			</u-cell-group>
		</view>

		<u-gap height="60"></u-gap>
	</qs-page>
</template>

<script>
var api = require('@/common/js/account.api.js');

export default {
	data() {
		return {
			list: {
				border: false,
				borderBottom: false,
				model: {
					/* 图像 */
					avatar: '',
					/* 用户名 */
					userName: '',
					/* 昵称 */
					nickName: '',
					/* 真实姓名 */
					realName: '',
					/* 性别 */
					sex: '',
					/* 出生日期 */
					birthDate: '',
					/* 区域 */
					area: '',
					/* 地址 */
					address: ''
				}
			}
		};
	},
	onLoad() {
		if (this.vuex_user.hasLogin) {
			let params = {};
			params.token = this.vuex_token;
			api.getUser(params)
				.then(res => {
					console.log(res);
					if (res.code == 1) {
						this.list.model.avatar = res.data.avatar;
						this.list.model.userName = res.data.userName;
						this.list.model.nickName = res.data.nickName;
						this.list.model.realName = '青松';
						this.list.model.sex = '男';
						this.list.model.birthDate = '2010-06-06';
						this.list.model.area = '湖北省 武汉市 江岸区';
						this.list.model.address = '后湖大道55号';
					} else {
						return this.$u.toast(res.msg);
					}
				})
				.catch(err => {
					console.log(err);
					return this.$u.toast('出错，请稍后再试');
				});
		}
	}
};
</script>

<style lang="scss" scoped></style>
