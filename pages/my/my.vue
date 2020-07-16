<template>
	<qs-page :header="true">
		<!-- 页面头部 -->
		<block slot="header">
			<status-bar></status-bar>
			<nav-bar>
				<view class="u-flex u-m-l-10"><u-icon name="setting" size="38" :custom-style="{ padding: '20rpx' }" @click="tip"></u-icon></view>
				<view class="u-flex u-m-r-10"><u-icon name="chat" size="38" :custom-style="{ padding: '20rpx' }" @click="tip"></u-icon></view>
			</nav-bar>
		</block>
		<block slot="header-placeholder">
			<status-bar></status-bar>
			<nav-bar></nav-bar>
		</block>

		<!-- 页面主体 -->
		<view class="my-box">
			<!-- 用户 -->
			<view class="user-panel-box">
				<!-- 未登录 -->
				<view v-if="!vuex_user.hasLogin" class="u-flex" @click="openPage('account/login/pwd-login')">
					<view class="u-m-r-20"><u-avatar size="120"></u-avatar></view>
					<view class="u-flex-1"><view class="u-font-lg">登录 / 注册</view></view>
					<view><u-icon name="arrow-right" color="#969799" size="28"></u-icon></view>
				</view>
				<!-- 已登录 -->
				<view v-if="vuex_user.hasLogin" class="u-flex" @click="openPage('my/user/user')">
					<view class="u-m-r-20"><u-avatar :src="list.model.user.avatar" mode="circle" size="120"></u-avatar></view>
					<view class="u-flex-1">
						<view class="u-font-lg">{{ list.model.user.name }}</view>
						<view class="u-m-t-10">
							<u-tag v-for="(item, index) in list.model.user.tag" :key="index" :text="item" mode="plain" type="info" size="mini" class="u-m-r-10" />
						</view>
					</view>
					<view><u-icon name="arrow-right" color="#969799" size="28"></u-icon></view>
				</view>
			</view>

			<!-- 跟踪 -->
			<view class="trace-panel-box">
				<u-grid :col="4" :border="false" class="card-main">
					<u-grid-item>
						<view class="u-font-xl">{{ list.model.trace.product }}</view>
						<view class="u-font-xs u-m-t-10">商品关注</view>
					</u-grid-item>
					<u-grid-item>
						<view class="u-font-xl">{{ list.model.trace.brand }}</view>
						<view class="u-font-xs u-m-t-10">品牌关注</view>
					</u-grid-item>
					<u-grid-item>
						<view class="u-font-xl">{{ list.model.trace.activity }}</view>
						<view class="u-font-xs u-m-t-10">活动关注</view>
					</u-grid-item>
					<u-grid-item>
						<view class="u-font-xl">{{ list.model.trace.history }}</view>
						<view class="u-font-xs u-m-t-10">浏览记录</view>
					</u-grid-item>
				</u-grid>
			</view>

			<u-gap height="20"></u-gap>

			<!-- 订单 -->
			<view class="panel-box">
				<view class="panel-header"><u-section title="我的订单" sub-title="查看全部订单" :bold="false" :show-line="false"></u-section></view>
				<u-grid :col="5" :border="false" class="panel-main">
					<u-grid-item><u-icon name="order" label="待付款" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon></u-grid-item>
					<u-grid-item><u-icon name="order" label="待发货" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon></u-grid-item>
					<u-grid-item><u-icon name="order" label="待收货" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon></u-grid-item>
					<u-grid-item><u-icon name="order" label="待评价" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon></u-grid-item>
					<u-grid-item><u-icon name="order" label="退款/售后" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon></u-grid-item>
				</u-grid>
			</view>

			<u-gap height="20"></u-gap>

			<!-- 钱包 -->
			<view class="card-box">
				<u-grid :col="5" :border="false">
					<u-grid-item>
						<view class="u-font-xl">{{ list.model.wallet.integral }}</view>
						<view class="u-font-xs u-m-t-10">积分</view>
					</u-grid-item>
					<u-grid-item>
						<view class="u-font-xl">{{ list.model.wallet.coupon }}</view>
						<view class="u-font-xs u-m-t-10">优惠券</view>
					</u-grid-item>
					<u-grid-item>
						<view class="u-font-xl">{{ list.model.wallet.redPacket }}</view>
						<view class="u-font-xs u-m-t-10">红包</view>
					</u-grid-item>
					<u-grid-item>
						<view class="u-font-xl">{{ list.model.wallet.money }}</view>
						<view class="u-font-xs u-m-t-10">余额</view>
					</u-grid-item>
					<u-grid-item class="all-order">
						<image class="cut-off-line" src="/static/user/cut_off_line.png" mode=""></image>
						<u-icon name="order" label="我的钱包" size="48" label-size="22" margin-top="14" label-pos="bottom"></u-icon>
					</u-grid-item>
				</u-grid>
			</view>

			<u-gap height="20"></u-gap>

			<!-- 其它 -->
			<view class="other-panel-box">
				<u-cell-group :border="list.border">
					<view class="panel-main">
						<u-cell-item
							:title="item.title"
							:value="item.value"
							@click="openPage(item.path)"
							:border-bottom="list.borderBottom"
							v-for="(item, index) in cells"
							:key="index"
						></u-cell-item>
					</view>
				</u-cell-group>
			</view>

			<u-gap height="40"></u-gap>
		</view>
	</qs-page>
</template>

<script>
var api = require('@/common/js/account.api.js');
import {
	getHasLogin
} from '@/common/js/util.js'

export default {
	data() {
		return {
			cells: [
				{
					title: '设置',
					value: '',
					path: 'my/setting/setting'
				},
				{
					title: '帮助与反馈',
					value: '',
					path: ''
				},
				{
					title: '关于',
					value: 'v1.0.0',
					path: ''
				}
			],
			list: {
				border: false,
				borderBottom: false,
				model: {
					user: {
						/* 名称 */
						name: '',
						/* 图像 */
						avatar: '',
						/* 标签 */
						tag: ['钻石会员', '达人']
					},
					trace: {
						/* 商品关注 */
						product: '0',
						/* 品牌关注 */
						brand: '0',
						/* 活动关注 */
						activity: '0',
						/* 浏览记录 */
						history: '0'
					},
					wallet: {
						/* 积分 */
						integral: '0',
						/* 优惠券 */
						coupon: '0',
						/* 红包 */
						redPacket: '0.00',
						/* 余额 */
						money: '0.00'
					}
				}
			}
		};
	},
	methods: {
		// 打开页面
		openPage(path) {
			if (path == '') {
				return this.$u.toast('暂未开通');
			}
			this.$u.route({
				url: '/pages/' + path
			});
		},
		// 提示
		tip() {
			return this.$u.toast('暂未开通');
		}
	},
	onLoad() {
		api.logout({})
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});return;
		// 已经登录
		const hasLogin = getHasLogin()
		if (hasLogin) {
			let params = {};
			api.getUser(params)
				.then(res => {
					console.log(res);
					if (res.code == 1) {
						this.list.model.user.name = res.data.userName
						this.list.model.user.avatar = res.data.avatar
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
.my-box {
	.user-panel-box {
		background-color: #ffffff;
		padding: 40rpx 32rpx 0 32rpx;
	}

	.user-card-box {
		margin: 0 12rpx;
		padding: 20rpx 20rpx;
		border-radius: 16rpx;
		background-color: #ffffff;
	}

	.trace-panel-box {
		background-color: #ffffff;
		padding: 0 10rpx 10rpx 10rpx;
	}

	.trace-card-box {
		margin: 0 12rpx;
		padding: 10rpx 10rpx;
		border-radius: 16rpx;
		background-color: #ffffff;
	}

	.panel-box {
		background-color: #ffffff;

		.panel-header {
			padding: 30rpx 32rpx 20rpx 32rpx;
			border-bottom: 1rpx solid $uni-border-color-light;
		}

		.panel-main {
			padding: 10rpx 0;
		}
	}

	.card-box {
		padding: 10rpx 0;
		background-color: #ffffff;

		.all-order {
			position: relative;
			.cut-off-line {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: 0rpx;
				width: 30rpx;
				height: 160rpx;
			}
		}
	}

	.other-panel-box {
		.panel-main {
			padding: 10rpx 0;
		}
	}

	.other-card-box {
		margin: 0 12rpx;
		padding: 10rpx 0;
		border-radius: 16rpx;
		background-color: #ffffff;
	}
}
</style>
