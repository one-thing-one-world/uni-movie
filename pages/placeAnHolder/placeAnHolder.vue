<template>
	<view class="container">
		<view class="topLine">

		</view>
		<view class="address-box ">
			<view class="address-content ">
				<text class="text" @click="addAdress">点击添加地址</text>
			</view>
		</view>
		<view class="goods-box">
			<view class="goods-contet">
				<view class="goods-total">
					
				</view>
				<view class="goods-shipping">
					
				</view>
				<view class="goods-coupons">
					
				</view>
			</view>
			
			<view class="goods-des" v-for="(item,index) in list" :key="index">
				<view class="goods-des-left">
					<view class="goods-des-img ">
						<image :src="item.list_pic_url" mode=""></image>
					</view>
					<view class="goods-des-text ">
						<view class="goods-des-name">
							{{item.goods_name}}
						</view>
						<view class="goods-des-price">
							￥{{item.retail_price}}元
						</view>
					</view>
				</view>
				<view class="goods-right">
					*2
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {
				list:[]
			}
		},
		methods: {
			addAdress(){
				uni.navigateTo({
					url:'/pages/address/address'
				})
			},

			getDataFromPlaceAnHolder(option) {
				this.list = JSON.parse(option.list)
				console.log(this.list);
			}

		},
		mounted() {

		},
		onLoad(option) {

			this.getDataFromPlaceAnHolder(option)

		},
		filters: {

		},
		computed: {

		},
		watch: {

		},
		directives: {

		}
	}
</script>

<style scoped lang="scss">
	.goods-des-price{
		margin-top: 4rpx;
	}
	.goods-des-text{
		margin-left: 20rpx;
		display: flex;
		
		justify-content: center;
		flex-direction: column;
	}
	.goods-des-left{
		display: flex;
		
	}
	.goods-right{
		width: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.goods-des{
		padding: 20rpx;
		margin-top: 20rpx;
		background: white;
		display: flex;
		justify-content: space-between;
	}
	.goods-des-img{
		width: 120rpx;
		height: 120rpx;
		background: #F4F4F4;
	}
	.goods-des-img image{
		
		width: 100%;
		height: 100%;
	}
	.container{
		background: #F4F4F4;
		height: 1242rpx;
	}
	.text {
		display: block;
		border-bottom: 2rpx solid black;
	}

	.address-content {
		height: 160rpx;
		width: 750rpx;
	}

	.address-content {
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: 4rpx;

	}
</style>
