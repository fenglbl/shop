let init = {
	tabBar:{
		list:[
			{
				id:0,
				title:"首页",
				icon:"../../static/image/icon/home.png",
				selectIcon:"../../static/image/icon/home-active.png",
			},
			{
				id:1,
				title:"商品分类",
				icon:"../../static/image/icon/type.png",
				selectIcon:"../../static/image/icon/type-active.png",
			},
			{
				id:2,
				title:"购物车",
				icon:"../../static/image/icon/cart.png",
				selectIcon:"../../static/image/icon/cart-active.png",
			},
			{
				id:3,
				title:"我的",
				icon:"../../static/image/icon/me.png",
				selectIcon:"../../static/image/icon/me-active.png",
			}
		],
		style:{
			color:"#333333",
			selectColor:"#eb4d4b",
			backgroundColor:"#efefef",
			height:55,//单位px
		}
	}
}

module.exports = init