<template>
	<view class="detail">
		<!-- 轮播图 -->
		<swiper class="swiper" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper-item">
				<image class="image" src="../../static/image/shop.png" mode="scaleToFill"></image>
				<view class="page">{{1}}</view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<image class="image" src="../../static/image/shop.png" mode="scaleToFill"></image>
				<view class="page">{{2}}</view>
			</swiper-item>
		</swiper>
		<!-- 商品简介信息 -->
		<view class="detail-desc">
			<!-- 标题 -->
			<view class="title">
				PVC 浴室专用柜
			</view>
			<!-- 价格 -->
			<view class="price">
				￥4300:00
			</view>
			<!-- 规格 -->
			<view class="spec">
				F904-1000-800*550
			</view>
			<!-- 库存和利润 -->
			<view class="end">
				<!-- 库存 -->
				<view class="inventory">
					库存：1
				</view>
				<!-- 利润  -->
				<view class="profit">
					分销利润：￥0
				</view>
			</view>
		</view>
		<!-- 分享 -->
		<view class="share">
			<!-- 图片 -->
			<view class="icon">
				<!-- 图片 -->
				<view class="pic">
					<image class="image" src="../../static/image/icon/share.png" mode="scaleToFill"></image>
				</view>
				福
			</view>
			<!-- 分享 -->
			<view class="title">
				分享佣金：￥0
			</view>
			<!-- 按钮 -->
			<view class="btn">
				立即分享
			</view>
		</view>
		<!-- 详情 -->
		<view class="content">
			<!-- 标题 -->
			<view class="title">
				<view class="border"></view>
				图文详情
				<view class="border"></view>
			</view>
			<!-- 内容 -->
			<view class="matter" v-html="matter.replace(/<img /ig,`<img style='width:100%;' `)"></view>
		</view>
		<!-- 底部导航 -->
		<view class="footer-bar">
			<view class="tab-bar-item">
				首页
			</view>
			<view class="tab-bar-item">
				购物车
			</view>
			<view class="tab-bar-item">
				收藏
			</view>
			<view class="btns">
				<view class="btn">
					立即购买
				</view>
				<view class="btn">
					加入购物车
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"detail",//商品详情页
		data() {
			return {
				matter:`<div class="detail-desc"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2207575620171/O1CN01q8kLiX1D8MJxnDDh1_!!2207575620171.jpg_640x0q80_.webp"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2207575620171/O1CN01225qjh1D8MK2D7xz7_!!2207575620171.jpg_640x0q80_.webp"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2207575620171/O1CN01uzmbiT1D8MJxnEE2S_!!2207575620171.jpg_640x0q80_.webp"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2207575620171/O1CN01xgTWOT1D8MJpv0FpU_!!2207575620171.jpg_640x0q80_.webp"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2207575620171/O1CN014bxFwp1D8MJpuzv3E_!!2207575620171.jpg_640x0q80_.webp"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2207575620171/O1CN01DuSuZm1D8MJpuzW7M_!!2207575620171.jpg_640x0q80_.webp"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2207575620171/O1CN01YuHO1n1D8MJvwEkCQ_!!2207575620171.jpg_640x0q80_.webp"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2207575620171/O1CN01DjI1WQ1D8MJyKvvZq_!!2207575620171.jpg_640x0q80_.webp"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2207575620171/O1CN01gabRMF1D8MJyKvj5p_!!2207575620171.jpg_640x0q80_.webp"></div>`
			};
		},
		onLoad(opction) {
			let {pid} = opction
		},
		onReady() {
			 
		}
	}
</script>

<style lang="scss">
.detail{
	// 轮播
	.swiper{
		height: upx(600);
		.swiper-item{
			position: relative;
			.image{
				width: 100%;
				height: 100%;
			}
			.page{
				font-size: upx(24);
				position: absolute;
				bottom: upx(30);
				right: upx(30);
				background-color: $uni-bg-color-grey;
				padding: upx(5) upx(20);
				border-radius: upx(24);
				color: $uni-text-color;
			}
		}
	}
	// 商品简介
	.detail-desc{
		padding: upx(20);
		.title,.price{
			font-size: upx(28);
			margin: upx(10) 0;
			font-weight: 600;
		}
		.price{
			color: $price;
		}
		.spec,.end{
			font-size: upx(26);
			color: $uni-text-color;
			margin: upx(10) 0;
		}
		.end{
			display: flex;
			justify-content: space-between;
			
		}
	}
	// 分享
	.share{
		font-size: upx(20);
		background-color: $essential-bg;
		display: flex;
		padding: upx(20);
		position: relative;
		.icon{
			border: upx(1) solid $essential;
			color: $essential;
			font-size: upx(18);
			display: flex;
			align-items: center;
			padding-right: upx(6);
			margin-right: upx(12);
			border-radius: upx(6);
			.pic{
				background-color: $essential;
				padding: 0 upx(8);
				border-top-right-radius: upx(12);
				border-bottom-right-radius: upx(12);
				margin-right: upx(8);
				.image{
					width: upx(20);
					height: upx(20);
				}
			}
		}
		.btn{
			position: absolute;
			right: upx(100);
			background-color: $essential;
			color: $uni-text-color-inverse;
			padding: upx(4) upx(8);
			top: 50%;
			margin-top: upx(-18);
			border-radius: upx(8);
		}
	}
	// 内容详情
	.content{
		padding: upx(10);
		.title{
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: upx(26);
			.border{
				width: upx(160);
				height: upx(1);
				background-color: $uni-bg-color-mask;
				transform: scale(0.6);
			}
		}
		.matter{
			padding-top: upx(26);
		}
	}
	// 底部导航栏
	.footer-bar{
		position: fixed;
		bottom: upx(20);
		left: 50%;
		margin-left: -47vw;
		height: upx(80);
		z-index: 999;
		width: 94%;
		background-color: $uni-bg-color-hover;
		border-radius: upx(15);
		box-shadow: 0 upx(0) upx(14) upx(4) #c8c7cc;
		display: flex;
	}
	
	
}
</style>
