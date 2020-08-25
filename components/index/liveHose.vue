<template>
	<view class="liveHose">

		<view class="">

			<view class="loop" v-for="(item,index) in liveHose" :key="index">
				<view class="liveHose-title">
					{{item.name}}
				</view>
				<view class="loop-box ">
					<view class="loop-item" v-for="(item1,index1) in item.goodsList" :key="index1">
						<view class="pic ">
							<image :src="item1.list_pic_url" mode=""></image>
						</view>
						<view class="title">
							{{item1.name}}
						</view>
						<view class="price">
							￥{{item1.retail_price}}元
						</view>
					</view>
					<view class="last-item">
						<view class="last-item-name">
							{{item.name}}
						</view>
						<view class="last-item-icon" @click="goToClassificationPage(item,index)">
							<image src="../../static/rightIcon.png" mode=""></image>
						</view>
					</view>
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
		props: {
			liveHose: {
				type: Array
			}
		},
		data() {
			return {}
		},
		methods: {
			goToClassificationPage(item,index){
				
				uni.setStorageSync('indexFlag',index)
				
				uni.switchTab({
					url:'/pages/classification/classification'
				})
			}

		},
		mounted() {

		},
		onLoad() {

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
	.last-item-name{
		margin-right: 4rpx;
	}
	.last-item-icon{
		margin-left: 4rpx;
		width: 80rpx;
		height: 80rpx;
	}
	.last-item{
		margin-top: 20rpx;
		width: 340rpx;
		height: 350rpx;
		margin-right: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		
		background: white;
	}
	.last-item-icon image{
		width: 100%;
		height: 100%;
	}
	.title{
		font-size: 28rpx;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		width: 340rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		
		
	}
	.price{
		display: flex;
		align-items: center;
		justify-content: center;
		color: red;
		font-size: 26rpx;
		margin-top: 10rpx;
		margin-bottom:10rpx;
	}
	.loop-box{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.pic {
		width: 340rpx;
		height: 260rpx;
		
	}

	.pic image {
		width: 100%;
		height: 100%;
	}

	.liveHose {
		background: #EEEEEE;
	}

	.liveHose-title {
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.loop-item{
		background-color: white;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		
	}
	.loop-item:nth-child(2n){
		margin-right: 18rpx;
		
	}
	.loop-item:nth-child(2n+1){
		margin-left: 18rpx;
		
	}
</style>
