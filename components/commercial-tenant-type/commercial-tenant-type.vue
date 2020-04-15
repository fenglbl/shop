<template>
	<view class="commercial-tenant-type">
		<view class="type-box">
			<!-- 左边分类列表 -->
			<view class="type-tab-bar" :style="{height: pageHeight+'px'}">
				<view class="type-tab-fixed">
					<scroll-view scroll-y="true" style="height: 100%;">
						<view class="type-tab-item" v-for="(item,index) of 50" :key="index" :class="{active:tabActive==index}" @click="setTab(index)">
							服装鞋帽
						</view> 
					</scroll-view> 
				</view>
			</view>
			<!-- 右边商品列表 -->
			<view class="parduct-list-box">
				<view class="commodity-list">
					<commodity-item class="item" v-for="(item,index) of commodity" :key="index"/>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import commodityItem from "../components/commodity-item/commodity-item.vue"
	export default {
		name:'commercial-tenant-type',//分类页面
		components:{
			commodityItem
		},
		props:{
			pageHeight:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				tabActive:0,//当前选中tab
				commodity:50,//
			};
		},
		mounted() {
			this.$emit('event',{scrolltolower:this.scrolltolower})
		},
		methods:{
			// 左边tab被点击
			setTab(index){
				this.tabActive = index
			},
			//滚动到底部
			scrolltolower(){
				this.tabActive ++
				this.commodity = 0
				uni.showLoading({
					title:"加载更多"
				})
				setTimeout(()=>{
					uni.hideLoading()
					this.commodity = 50
				},1500)
			}
		}
	}
</script>

<style lang="scss">
.commercial-tenant-type{
	.type-box{
		display: flex;
		.type-tab-bar{
			width: 22%;
			.type-tab-fixed{
				position: fixed;
				height: 100%;
				width: 22%;
				.type-tab-item{
					font-size: upx(26);
					height: upx(90);
					display: flex;
					justify-content: space-around;
					align-items: center;
					position: relative;
					border-bottom: upx(1) solid $uni-bg-color-hover;
					transition: all 0.2s;
				}
				.type-tab-item.active{
					background-color: $uni-bg-color-hover;
				}
				.type-tab-item.active::before{
					content: '';
					display: inline-block;
					height: 30%;
					width: upx(10);
					background-color: $essential;
					position: absolute;
					left: 0;
					border-top-right-radius: upx(8);
					border-bottom-right-radius: upx(8);
				}
			}
		}
		.parduct-list-box{
			background-color: $uni-bg-color-hover;
			flex: 1;
			.commodity-list{
				display: flex;
				flex-wrap: wrap;
				.item{
					width: 48.2%;
					margin-left: 1.2%;
				}
			}
		}
	}
}
</style>
