<template>
	<view class="uin-product-list">
		<view class="product-item" @click="toDetail">
			<image class="image" :src="opction.image" mode="scaleToFill" :style="{height:imageHeight+'px'}"></image>
			<view class="title">
				{{opction.title}}
			</view>
			<view class="price">
				￥{{opction.price}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"product-list",//商品内容
		props:{
			opction:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				imageHeight:0,//图片高度
			};
		},
		mounted() {
			let query = uni.createSelectorQuery().in(this)
			query.select('.image').boundingClientRect().exec(doc=>{
				this.imageHeight = doc[0].width-8
			})
		},
		methods:{
			toDetail(){
				uni.navigateTo({
					url:"../../pages/detail/detail?pid="+this.opction.pid
				})
			}
		}
	}
</script>

<style lang="scss">
.uin-product-list{
	width: 100%;
	margin-bottom: 20upx;
	border-radius: 25upx;
	overflow: hidden;
	.product-item{
		width: 100%;
		background-color: $uni-bg-color;
		.image{
			width: 100%;
			
		}
		.title{
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 22upx;
			font-weight: 600;
			margin: 10upx 12upx 20upx;
		}
		.price{
			font-size: 26upx;
			color: $price;
			font-weight: 600;
			padding-bottom: 20upx;
			margin: 0 12upx;
		}
	}
}
</style>
