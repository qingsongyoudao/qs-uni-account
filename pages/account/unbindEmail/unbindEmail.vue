<template>
	<view class="account-page">
		<view class="page-header">
			<view class="page-title">{{ title }}</view>
		</view>
		<view class="page-body">
			<view class="form-box">
				<u-form :model="model" ref="uForm" label-position="top">
					<u-form-item class="form-item" label="当前邮箱" prop="currentEmail">
						<u-input :disabled="true" v-model="model.currentEmail" type="text" />
					</u-form-item>
				</u-form>

				<u-gap height="40"></u-gap>

				<view class="u-flex">
					<view class="u-flex-1 u-m-r-30"><u-button :disabled="form.button.loading" type="primary" @click="submit">解 绑</u-button></view>
					<view class="u-flex-1 u-n-l-30"><u-button type="default" @click="cancel">取 消</u-button></view>
				</view>
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
			title: '解绑邮箱',
			desc: '是否解绑该邮箱',
			form: {
				button: {
					loading: false
				}
			},
			model: {
				/* 当前邮箱 */
				currentEmail: ''
			}
		};
	},
	methods: {
		submit() {
			this.form.button.loading = true;
			let params = this.model;
			params.token = this.vuex_token;
			api.unbindEmail(params)
				.then(res => {
					this.form.button.loading = false;
					console.log(res);
					if (res.code == 1) {
						uni.navigateBack();
						return this.$u.toast('解绑成功');
					} else {
						return this.$u.toast(res.msg);
					}
				})
				.catch(err => {
					this.form.button.loading = false;
					console.log(err);
					return this.$u.toast('出错，请稍后再试');
				});
		},
		cancel() {
			uni.navigateBack();
		}
	},
	onLoad() {
		if (this.vuex_user.hasLogin) {
			let params = {};
			params.token = this.vuex_token;
			api.getAccount(params)
				.then(res => {
					console.log(res);
					if (res.code == 1) {
						this.model.currentEmail = res.data.email;
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
