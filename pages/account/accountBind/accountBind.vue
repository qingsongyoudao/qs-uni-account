<template>
	<account-page :title="title" :desc="desc">
		<view class="u-m-y-40 u-flex u-row-between">
			<u-button type="default" @click="setUnbind">未绑定</u-button>
			<u-button type="primary" @click="setBinded">已绑定</u-button>
		</view>
		<account-list-group>
			<account-list-item v-if="list.model.mobile == ''" title="手机号" value="未绑定" @click="openPage('bindMobile/bindMobile')"></account-list-item>
			<account-list-item v-if="list.model.mobile != ''" title="手机号" :value="list.model.mobile"></account-list-item>
			<account-list-item v-if="list.model.email == ''" title="邮箱" value="未绑定" @click="openPage('bindEmail/bindEmail')"></account-list-item>
			<account-list-item v-if="list.model.email != ''" title="邮箱" :value="list.model.email"></account-list-item>
			<account-list-item v-if="list.model.weixin == ''" title="微信账号" value="未绑定" @click="openPage('bindWeixin/bindWeixin')"></account-list-item>
			<account-list-item v-if="list.model.weixin != ''" title="微信账号" :value="list.model.weixin"></account-list-item>
			<account-list-item v-if="list.model.weibo == ''" title="微博账号" value="未绑定" @click="openPage('bindWeibo/bindWeibo')"></account-list-item>
			<account-list-item v-if="list.model.weibo != ''" title="微博账号" :value="list.model.weibo"></account-list-item>
			<account-list-item v-if="list.model.qq == ''" title="QQ 账号" value="未绑定" @click="openPage('bindQq/bindQq')"></account-list-item>
			<account-list-item v-if="list.model.qq != ''" title="QQ 账号" :value="list.model.qq"></account-list-item>
			<account-list-item v-if="list.model.taobao == ''" title="淘宝账号" value="未绑定" @click="openPage('bindTaobao/bindTaobao')"></account-list-item>
			<account-list-item v-if="list.model.taobao != ''" title="淘宝账号" :value="list.model.taobao"></account-list-item>
			<account-list-item v-if="list.model.alipay == ''" title="支付宝账号" value="未绑定" @click="openPage('bindAlipay/bindAlipay')"></account-list-item>
			<account-list-item v-if="list.model.alipay != ''" title="支付宝账号" :value="list.model.alipay"></account-list-item>
		</account-list-group>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
export default {
	data() {
		return {
			title: '账号绑定',
			desc: '可以通过已经绑定的信息登录或找回密码',
			list: {
				model: {
					/* 手机号 */
					mobile: '',
					/* 邮箱 */
					email: '',
					/* 微信账号 */
					weixin: '',
					/* 微博账号 */
					weibo: '',
					/* QQ账号 */
					qq: '',
					/* 淘宝账号 */
					taobao: '',
					/* 支付宝账号 */
					alipay: ''
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
		setBinded() {
			this.list.model.mobile = '130****9351'
			this.list.model.email= 'test@163.com'
			this.list.model.weixin= '青松'
			this.list.model.weibo= '青松'
			this.list.model.qq= '青松'
			this.list.model.taobao= '青松'
			this.list.model.alipay= '青松'
		},
		setUnbind() {
			this.list.model.mobile = ''
			this.list.model.email= ''
			this.list.model.weixin= ''
			this.list.model.weibo= ''
			this.list.model.qq= ''
			this.list.model.taobao= ''
			this.list.model.alipay= ''
		}
	}
};
</script>

<style lang="scss" scoped></style>
