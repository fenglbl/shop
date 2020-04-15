<template>
	<view class="index">
		<!-- 页面，swiper -->
		<swiper :style="{height:pageHeight+'px'}" :current="tabActive" @change="swiperChange">
			<swiper-item>
				<!-- 首页 -->
				<scroll-view scroll-y="true" style="height: 100%;" :enable-back-to-top="true" @scrolltolower="scrollToLower('home')">
					<commercial-tenant-index @event="homeEvent" />
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<!-- 分类 -->
				<scroll-view scroll-y="true" style="height: 100%;" @scrolltolower="scrollToLower('type')">
					<commercial-tenant-type :pageHeight="pageHeight"  @event="typeEvent"/>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<!-- 购物车 -->
				<scroll-view scroll-y="true" style="height: 100%;" @scrolltolower="scrollToLower('cart')">
					<commercial-tenant-cart />
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<!-- 我的 -->
				<scroll-view scroll-y="true" style="height: 100%;" @scrolltolower="scrollToLower('me')">
					<commercial-tenant-me />
				</scroll-view>
			</swiper-item>
		</swiper>
		
		<!-- 底部导航栏 -->
		<view class="footer-tab-bar" :style="{'background-color':tabBar.style.backgroundColor,height:tabBar.style.height+'px',color:tabBar.style.color}">
			<view class="tab-bar">
				<!-- 每一项 -->
				<view class="tab-bar-item" v-for="(item,index) of tabBar.list" :key="index" :style="{color:tabActive==item.id?tabBar.style.selectColor:tabBar.style.color}" @click="changeTabBar(item)">
					<view class="item">
						<view class="image">
							<image style="width: 50upx;height: 50upx;" :src="tabActive==item.id?item.selectIcon:item.icon" mode="scaleToFill"></image>
						</view>
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {tabBar} from "../../init/index.js"
	import commercialTenantIndex from "../../components/commercial-tenant-index/commercial-tenant-index.vue"
	import commercialTenantType from "../../components/commercial-tenant-type/commercial-tenant-type.vue"
	import commercialTenantCart from "../../components/commercial-tenant-cart/commercial-tenant-cart.vue"
	import commercialTenantMe from "../../components/commercial-tenant-me/commercial-tenant-me.vue"
	export default {
		name:"index",//首页
		components:{
			commercialTenantIndex,
			commercialTenantType,
			commercialTenantCart,
			commercialTenantMe
		},
		data() {
			return {
				tabBar,//底部导航栏对象
				tabActive:1,//当前选中tabbar
				pageHeight:0,//页面高度
				pageEvent:{//页面事件
					home:{},
					type:{},
					cart:{},
					me:{}
				},
			};
		},
		// 数据周期
		onLoad() {
			
		},
		// 渲染周期
		onReady() {
			console.log(this.sysInfo)
			// #ifdef MP
			this.pageHeight = this.sysInfo.windowHeight - tabBar.style.height
			// #endif
			// #ifdef H5
			this.pageHeight = this.sysInfo.windowHeight - tabBar.style.height-44
			// #endif
		},
		// 方法
		methods:{
			// 底部tabbar改变事件
			changeTabBar(tabbarList){
				this.tabActive = tabbarList.id
			},
			// 页面变动
			swiperChange(val){
				this.tabActive = val.detail.current
			},
			// 页面滚动到底部
			scrollToLower(page){
				this.pageEvent[page] && this.pageEvent[page].scrolltolower()
			},
			//首页事件
			homeEvent(event){
				this.pageEvent.home = event
			},
			// 分类页事件
			typeEvent(event){
				this.pageEvent.type = event
			}
		},
		// 监听
		watch:{
			tabActive(){
				uni.setNavigationBarTitle({
					title:this.tabBar.list[this.tabActive].title
				})
			}
		}
	}
</script>

<style lang="scss">
.index{
	.footer-tab-bar{
		position: fixed;
		bottom: 0;
		width: 100%;
		// box-shadow: 0 0 1px 0 #999999;
		box-shadow: 0 upx(-2) upx(10) 0 #c8c7cc;
		.tab-bar{
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			.tab-bar-item{
				transition: all 0.3s;
				.item{
					width: upx(100);
					height: upx(80);
					font-size: upx(22);
					text-align: center;
				}
			}
		}
	} 
}
</style>
