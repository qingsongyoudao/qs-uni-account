<template>
	<view class="user-panel-box">
		<!-- 未登录 -->
		<view v-if="logined == false" class="u-flex" @click="openPage('account/login/pwd-login')">
			<view class="u-m-r-20">
				<u-avatar size="120"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-lg">登录 / 注册</view>
			</view>
			<view>
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</view>
		<!-- 已登录 -->
		<view v-if="logined == true" class="u-flex" @click="openPage('account/login/login')">
			<view class="u-m-r-20">
				<u-avatar :src="list.model.userFace" mode="circle" size="120"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-lg">{{ list.model.nickName }}</view>
				<view class="u-m-t-10">
					<u-tag v-for="(item, index) in list.model.userTag" :key="index" :text="item" mode="plain" type="info" size="mini" class="u-m-r-10" />
				</view>
			</view>
			<view>
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'my-user-panel',
	props: {
		// 是否登录
		logined: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			list: {
				model: {
					/* 图像 */
					userFace: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					/* 昵称 */
					nickName: '青松有道',
					/* 标签 */
					userTag: [
						'钻石会员',
						'达人'
					]
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

<style lang="scss" scoped>
.user-panel-box {
	background-color: #FFFFFF;
	padding: 40rpx 32rpx 0 32rpx;
}
</style>
