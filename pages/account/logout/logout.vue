<template>
	<view></view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {
		this.$u.vuex('vuex_user.logined', false);
		this.$u.vuex('vuex_user.id', '');
		this.$u.vuex('vuex_token', '');
		this.$Router.push({ name: 'account_login_pwd' });
	}
};
</script>

<style lang="scss"></style>
