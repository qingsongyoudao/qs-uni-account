<template>
	<account-page :title="title" :desc="desc">
	</account-page>
</template>

<script>
export default {
	data() {
		return {
			title: '绑定支付宝账号',
			desc: ''
		};
	}
};
</script>

<style lang="scss" scoped></style>
