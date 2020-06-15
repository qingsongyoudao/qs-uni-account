<template>
	<account-page :title="title" :desc="desc">
		<register></register>

		<u-gap height="40"></u-gap>
	</account-page>
</template>

<script>
import register from '@/components/account/register.vue';
export default {
	components: {
		register
	},
	data() {
		return {
			title: '注册',
			desc: ''
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

<style lang="scss" scoped></style>
