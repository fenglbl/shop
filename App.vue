<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 取消搜索框默认样式，去掉边框 */
	.uni-searchbar__box{
		border-style: none !important;
	}
</style>
