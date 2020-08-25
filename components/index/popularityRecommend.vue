<template>

<view class="">
	<view class=" text-box">
		
		<view class="new">
			人气推荐好物精选
		</view>
		
		<view class="more" @click="goToLookMorePage">
			查看更多
		</view>
		
	</view>
	<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
		<view class="loop-box">
			<view class="loop" v-for="(item,index) in popularityRecommend" :key="index">
				<view class="img ">
					<image :src="item.list_pic_url"></image>
				</view>
				<view class="name">
					{{item.name}}
				</view>
				<view class="Characteristics">
					{{item.goods_brief}}
				</view>
				<view class="price">
					￥{{item.retail_price}}
				</view>
			</view>
		</view>
	</scroll-view>
</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {
			popularityRecommend: {
				type: Array
			}
		},
		data() {
			return {
				value: 30
			}
		},
		methods: {
			goToLookMorePage(){
				uni.navigateTo({
					url:'/pages/lookMore/lookMore'
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
	.text-box{
		width: 750rpx;
		height: 220rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: #FCF4DD;
		font-size: 40rpx;
	}
	.more{
		font-size: 34rpx;
		margin-top: 10rpx;
		background: #D8E4F0;
		padding: 10rpx 20rpx;
	}
	.Characteristics {
		font-size: 26rpx;
		line-height: 46rpx;
		color: #8E8E8E;
		
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		width: 290rpx;
	}

	.price {
		font-size: 28rpx;
		color: #9F3939;
	}

	.loop-box {
		display: flex;

	}
	.loop{
		padding-left: 20rpx;
	}

	.name {
		width: 290rpx;
		font-size: 30rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;


	}

	.img {
		width: 290rpx;
		height: 290rpx;
	}

	.img image {
		width: 100%;
		height: 100%;
	}
</style>
