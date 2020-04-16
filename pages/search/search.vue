<template>
	<view class="search">
		<!-- 搜索框 -->
		<uni-search-bar radius="30" placeholder="输入商品关键词" @confirm="search"></uni-search-bar>
		<!-- 搜索历史 -->
		<view class="search-history">
			<view class="title">
				历史搜索
			</view>
			<view class="content">
				<text class="search-key-item" v-for="(item,index) of searchHistory" :key="index" >{{item}}</text>
			</view>
		</view>
		<!-- 热们搜索 -->
		<view class="search-hot">
			<view class="title">
				热们搜索
			</view>
			<view class="content">
				<text class="search-key-item">开张</text>
				<text class="search-key-item">打印</text>
				<text class="search-key-item">旺仔奶粉</text>
			</view>
		</view>
		<!-- 智慧推荐 -->
		<uni-recommend-list class="recommendation" title="查询商品列表" subTitle="Competitive Products For You" leftIcon="../../static/image/icon/type-active.png" @click="recommendationClick">
			<uin-product-list class="product" :opction="item" v-for="(item,index) of searchList" :key="index" ></uin-product-list>
		</uni-recommend-list>
		
		<!-- 智慧推荐 -->
		<uni-recommend-list class="recommendation" title="智慧推荐" subTitle="Competitive Products For You" leftIcon="../../../static/image/icon/type-active.png" @click="recommendationClick">
			<uin-product-list class="product" :opction="{pid:1,image:'../../../static/image/shop.png',title:'王圣堂骆驼奶粉  三罐   迪奥  999 哑光',price:'159.00'}" v-for="index of 12" :key="index"></uin-product-list>
		</uni-recommend-list>
	</view>
</template>

<script>
	import uniRecommendList from "../../components/components/uni-recommend-list/uni-recommend-list.vue"
	import uinProductList from "../../components/components/uin-product-list/uin-product-list.vue"
	export default {
		name:"search",//搜索页面
		components:{uniRecommendList,uinProductList},
		data() {
			return {
				searchHistory:[],//搜索历史记录
				searchList:[]
			};
		},
		onReady() {
			this.loadMorn()
		},
		methods:{
			// 初始化
			loadMorn(){
				let _this = this
				uni.getStorage({
					key:"searchHistory",
					success(data){
						_this.searchHistory = data.data?JSON.parse(data.data):[]
					}
				})
			},
			// 开始搜索
			search(value){
				let index = this.searchHistory.indexOf(value.value)
				index != -1 && this.searchHistory.splice(index,1)
				this.searchHistory.unshift(value.value)
				let data = JSON.stringify(this.searchHistory)
				uni.setStorage({
					key:"searchHistory",
					data
				})
				uni.showLoading({
					title:'搜索中……'
				})
				setTimeout(()=>{
					uni.hideLoading()
					
					this.searchList = [
						{pid:1,image:'../../../static/image/shop.png',title:'王圣堂骆驼奶粉  一罐   迪奥  999 哑光',price:'159.00'},
						{pid:2,image:'../../../static/image/shop.png',title:'王圣堂骆驼奶粉  二罐   迪奥  999 哑光',price:'159.00'},
						{pid:3,image:'../../../static/image/shop.png',title:'王圣堂骆驼奶粉  三罐   迪奥  999 哑光',price:'159.00'},
						{pid:4,image:'../../../static/image/shop.png',title:'王圣堂骆驼奶粉  四罐   迪奥  999 哑光',price:'159.00'},
						{pid:5,image:'../../../static/image/shop.png',title:'王圣堂骆驼奶粉  五罐   迪奥  999 哑光',price:'159.00'}
					]
				},1500)
			}
		}
	}
</script>

<style lang="scss">
.search{
	// 搜索关键词样式
	.search-key-item{
		font-size: upx(22);
		padding: upx(6) upx(16);
		background-color: $uni-text-color-disable;
		margin-left: upx(22);
		border-radius: upx(20);
		margin-bottom: upx(16);
	}
	// 搜索历史，热们搜索
	.search-history,.search-hot{
		.title{
			margin: upx(12) upx(20);
		}
		.content{
			display: flex;
			flex-wrap: wrap;
		}
	}
	// 智慧推荐
	.recommendation{
		width: 100%;
		.product{
			width: 49%;
		}
	}
}
</style>
