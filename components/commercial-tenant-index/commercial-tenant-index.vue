<template>
	<view class="commercial-tenant-index">
		<!-- 顶部搜索导航栏 -->
		<view class="nav-bar">
			<!-- 盒子 -->
			<view class="nav-bar-content">
				<!-- 左边附近店铺 -->
				<view class="near-shop">
					<uni-icons type="location-filled"></uni-icons>
					附近店铺
					<uni-icons type="arrowdown"></uni-icons>
				</view>
				<!-- 右边搜索框 -->
				<view class="search" @click="toSearch">
					<uni-icons type="search" color="#999"></uni-icons>
					商品搜索
				</view>
			</view>
		</view> 
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" style="width: 100%;">
			<swiper-item>
				<image style="width: 100%;height: 100%;" src="../../static/image/kejiONE.jpg" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image style="width: 100%;height: 100%;" src="../../static/image/kejiTwo.jpeg" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 分类导航 -->
		<view class="type-bar">
			<view class="type-bar-item"  v-for="index of 10" @click="toTypePage" :key="index">
				<image class="image" src="../../static/image/icon/cart-active.png" mode=""></image>
				<view>智能马桶</view>
			</view>
		</view>
		<!-- 电话咨询 -->
		
		<!-- 精品推荐 - -recommendation -->
		<uni-recommend-list class="recommendation" title="精品推荐" subTitle="Competitive Products For You" @click="recommendationClick">
			<uin-product-list class="product" :opction="{image:'../../static/image/shop.png',title:'王圣堂骆驼奶粉  三罐   迪奥  999 哑光',price:'159.00'}" v-for="index of 12" :key="index"></uin-product-list>
		</uni-recommend-list>
	</view>
</template>

<script>
	import uniRecommendList from "../components/uni-recommend-list/uni-recommend-list.vue"
	import uinProductList from "../components/uin-product-list/uin-product-list.vue"
	export default {
		name:"commercialTenantIndex",//商户首页
		components:{
			uniRecommendList,
			uinProductList
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		mounted() {
			this.$emit('event',{scrolltolower:this.scrolltolower})
		},
		methods: {
			// 导航菜单被点击
			typeBarClick(index){ 
				console.log(index)
			},
			// 跳转到搜索页
			toSearch(){
				uni.navigateTo({
					url:"../../pages/search/search"
				})
			},
			// 跳转到分类商品列表
			toTypePage(val){
				console.log(val)
			},
			// 精品推荐被点击
			recommendationClick(){
				console.log("精品推荐被点击")
			},
			//滚动到底部
			scrolltolower(){
				uni.showToast({
					title:"没有更多了"
				})
				console.log('滚到底部了')
			}
		}
	}
</script>

<style lang="scss">
	.commercial-tenant-index {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: $uni-bg-color-grey;
		// 顶部搜索导航栏
		.nav-bar{
			width: 100%;
			height: $nav-bar-height;
			box-shadow: 0 upx(2) upx(10) 0 #c8c7cc;
			position: relative;
			// 顶部导航栏内容
			.nav-bar-content{
				height: $nav-bar-height;
				z-index: 999;
				width: 100%;
				display: flex;
				align-items: center;
				position: fixed;
				background-color: $uni-bg-color;
				// 附近店铺
				.near-shop{
					display: flex;
					font-size: upx(22);
					margin-left: $page-padding;
				}
				// 搜索
				.search{
					background-color: $uni-bg-color-grey;
					color: $uni-text-color-grey;
					margin: 0 $page-padding;
					flex: 1;
					display: flex;
					padding: upx(8);
					border-radius: upx(30);
					justify-content: center;
					font-size: upx(22);
				}
			}
			
		}
		// 分类菜单
		.type-bar{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			.type-bar-item{
				width: 20%;
				height: 20vw;
				font-size: upx(20);
				text-align: center;
				color: $uni-text-color;
				.image{
					width: 60%;
					height: 12vw;
					margin: upx(10) auto;
				}
			}
		}
		// 
		// 精品推荐
		.recommendation{
			width: 100%;
			.product{
				width: 49%;
			}
		}
		
	}

</style>
