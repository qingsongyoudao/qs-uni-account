<template>
	<view class="account-page">
		<view class="page-header">
			<view class="page-title">{{ title }}</view>
		</view>
		<view class="page-body">
			<view class="form-box">
				<u-form :model="model" ref="uForm" label-position="top">
					<u-form-item class="form-item" label="当前用户名" prop="currentUserName">
						<u-input :disabled="true" v-model="model.currentUserName" placeholder="4-20位的数字和字母" type="text" />
					</u-form-item>
					<u-form-item class="form-item" label="用户名" prop="newUserName">
						<u-input v-model="model.newUserName" placeholder="新用户名(4-20位的数字和字母)" type="text" />
					</u-form-item>
				</u-form>

				<u-gap height="40"></u-gap>

				<u-button :disabled="form.button.loading" type="primary" @click="submit">确认修改</u-button>
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
			title: '修改用户名',
			desc: '4至20位，由数字或字母组成',
			form: {
				button: {
					loading: false
				}
			},
			model: {
				/* 当前用户名 */
				currentUserName: '',
				/* 用户名 */
				newUserName: ''
			},
			rules: {
				newUserName: [
					{
						required: true,
						message: '请输入新用户名',
						trigger: ['change', 'blur']
					},
					{
						min: 4,
						max: 20,
						message: '用户名长度在4到20个字符',
						trigger: ['change', 'blur']
					},
					{
						pattern: /^[0-9a-zA-Z]*$/g,
						transform(value) {
							return String(value);
						},
						message: '用户名为字母或数字',
						trigger: ['change', 'blur']
					}
				]
			}
		};
	},
	methods: {
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					this.form.button.loading = true;
					let params = this.model;
					params.token = this.vuex_token;
					api.updateUserName(params)
						.then(res => {
							this.form.button.loading = false;
							console.log(res);
							if (res.code == 1) {
								return this.$u.toast('修改成功');
							} else {
								return this.$u.toast(res.msg);
							}
						})
						.catch(err => {
							this.form.button.loading = false;
							console.log(err);
							return this.$u.toast('出错，请稍后再试');
						});
				} else {
					console.log('验证失败');
				}
			});
		}
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	onLoad() {
		if (this.vuex_user.hasLogin) {
			let params = {};
			params.token = this.vuex_token;
			api.getAccount(params)
				.then(res => {
					console.log(res);
					if (res.code == 1) {
						this.model.currentUserName = res.data.userName;
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

<style lang="scss" scoped>
@import '../scss/account.scss';
</style>
