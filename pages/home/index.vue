<template>
	<view>
		<view class="u-m-30">
			<u-button @click="openPage" type="primary">组件 name 跳转</u-button>
		</view>
		<view class="u-m-30">
			<router-link to="{name: list,params: {userId: '123', userName: 'ok'}}">
				<button type="primary">组件 name 跳转</button>
			</router-link>
		</view>
		<view class="u-m-30">
			<router-link to="/pages/home/list"><button type="primary">组件 path 跳转</button></router-link>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		// 打开页面
		openPage() {
			this.$Router.push({ name: 'list', params: { userId: '123', userName: 'ok' } });
			//const userId = '123';
			//this.$Router.push({ name: 'list', params: { userId } });
			//this.$Router.push({ path: '/pages/home/list', query: { userId: '123', userName: 'ok' } });
		}
	}
};
</script>

<style lang="scss"></style>
