<template>

	<view class="">
		<view class="featuredSelection-title">
			专题精选
		</view>
		<scroll-view  scroll-x="true" scroll-left="120">
			<view class="featuredSelection">
				<view class="loop " v-for="(item,index) in featuredSelection" :key="index">
					<view class="img">
						<image :src="item.item_pic_url" mode=""></image>
					</view>
					<view class="title-box df">
						<view class="title">
							{{item.title}}
						</view>
						<view class="title-price">
							￥{{item.price_info}}起
						</view>
					</view>
					<view class="subtitle">
						{{item.subtitle}}
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
			featuredSelection: {
				type: Array
			}
		},
		data() {
			return {

			}
		},
		methods: {

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
	.featuredSelection-title{
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40rpx;
	}
	.loop{
		margin: 20rpx 0rpx 20rpx 30rpx;
	}
	
	.featuredSelection {
		display: flex;
		
		

	}

	.title-price {
		margin-left: 20rpx;
		color: #B46565;
	}

	.title-box {
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.subtitle {
		margin-bottom: 20rpx;
		color: #D6D6D6;
		font-size: 28rpx;
		width: 560rpx;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.img {
		width: 560rpx;
		height: 300rpx;
	}

	.img image {
		width: 100%;
		height: 100%;
	}
</style>
