<template>
	<view class="uin-product-list">
		<view class="product-item">
			<image class="image" src="../../../static/image/shop.png" mode="scaleToFill"></image>
			<view class="title">
				王圣堂骆驼奶粉  三罐   迪奥  999 哑光
			</view>
			<view class="price">
				￥159.00
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
			height: 48vw;
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
