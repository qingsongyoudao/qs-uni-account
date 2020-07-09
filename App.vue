<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/* 引入 uView 基础样式 */
@import 'uview-ui/index.scss';

/* 引入自定义样式 */
@import 'common/scss/index.scss';

/* H5的时候，隐藏滚动条 */
/* #ifdef H5 */
::-webkit-scrollbar {
	display: none;
	width: 0 !important;
	height: 0 !important;
	-webkit-appearance: none;
	background: transparent;
}
/* #endif */
</style>
