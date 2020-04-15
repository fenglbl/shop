<template>
	<view class="recommend">
		<view class="header" @click="headerClick" :style="{'justify-content': 'start'}">
			<view class="letf-icon" v-if="leftIcon">
				<image class="image" :src="leftIcon" mode="scaleToFill"></image>
			</view>
			<view class="title">
				<view class="name">
					{{title}}
				</view>
				<view class="sub">
					{{subTitle}}
				</view>
			</view>
			<view class="icon" v-if="!leftIcon"><uni-icons type="arrowright"></uni-icons></view>
		</view>
		<view class="content">
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		name:"recommend-list",//推荐列表组件
		props:{ 
			title:{
				type:String,
				default:'标题'
			},
			subTitle:{
				type:String,
				default:'副标题'
			},
			leftIcon:{
				type:String,
				default:''
			}
			
		},
		data() {
			return {
				
			};
		},
		methods:{
			headerClick(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
.recommend{
	width: 100%;
	.header{
		width: 100%;
		padding: 30upx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		.letf-icon{
			margin-left: 30upx;
			.image{
				width: upx(84);
				height: upx(84);
			}
		}
		.title{
			margin-left: 30upx;
			.name{
				font-size: 28upx;
				font-weight: 600;
				
			}
			.sub{
				font-size: 22upx;
				color: #C0C0C0;
				
			}
			
		}
		.icon{
			margin-right: 30upx;
		}
	}
	.content{
		padding: 20upx 30upx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
}
</style>
