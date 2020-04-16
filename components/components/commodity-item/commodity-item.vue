<template>
	<view class="commodity">
		<view class="commodity-item" @click="toDetail">
			<image class="image" src="../../../static/image/shop.png" mode="scaleToFill" :style="{height:imageHeight+'px'}"></image>
			<!-- 标题 -->
			<view class="title">
				王圣堂骆驼奶粉  三罐   迪奥  999 哑光
			</view>
			<!-- 库存 -->
			<view class="repertory">
				库存：100
			</view>
			<!-- 标签 -->
			<view class="label">
				标签：
			</view>
			<!-- 价格 和 加入购物车 -->
			<view class="price">
				￥159.00
				<image class="image" src="../../../static/image/icon/cart-active.png" mode="leftIcon"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"commodity",//商品
		props:{
			opction:{
				type:Object,
				default:()=>{return{}}
			}
		},
		data() {
			return {
				imageHeight:0
			};
		},
		mounted() {
			let query = uni.createSelectorQuery().in(this)
			query.select('.image').boundingClientRect().exec(doc=>{
				this.imageHeight = doc[0].width-8
			})
		},
		methods:{
			// 跳转到商品详情页
			toDetail(){
				uni.navigateTo({
					url:"../../pages/detail/detail?pid="+this.opction.pid
				})
			}
		}
	}
</script>

<style lang="scss">
.commodity{
	width: 100%;
	margin-bottom: 14upx;
	border-radius: 25upx;
	overflow: hidden;
	.commodity-item{
		width: 100%;
		background-color: $uni-bg-color;
		.image{
			width: 100%;
			// height: 48vw;
		}
		.title{
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: upx(20);
			font-weight: 600;
			margin: 10upx 12upx;
			
		}
		.repertory,.label{
			margin: 0 upx(12);
			font-size: upx(20);
			margin-bottom: upx(6);
		}
		.price{
			font-size: upx(26);
			color: $price;
			font-weight: 600;
			margin: 0 upx(12);
			display: flex;
			justify-content: space-between;
			.image{
				position: relative;
				top: upx(-20);
				width: upx(52);
				height: upx(52);
			}
		}
	}
}
</style>
