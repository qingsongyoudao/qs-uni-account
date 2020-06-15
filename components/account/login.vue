<template>
	<view class="account-list-box">
		<u-cell-group :border="border">
			<view class="panel-main">
				<u-cell-item
					:title="item.title"
					:value="item.value"
					@click="openPage(item.path)"
					:border-bottom="borderBottom"
					v-for="(item, index) in cells"
					:key="index"
				></u-cell-item>
			</view>
		</u-cell-group>
	</view>
</template>

<script>
export default {
	name: 'login',
	props: {
		// 是否显示边框
		border: {
			type: Boolean,
			default: false
		},
		// 是否显示内边框
		borderBottom: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
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
.account-list-box {
	.panel-main {
		padding: 10rpx 0;
	}
}
</style>
