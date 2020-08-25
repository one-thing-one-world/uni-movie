<template>
	<view class="brand">
		<view class="title">
			平拍制造商提供
		</view>
		<view class="content">
			<view class="loop" v-for="(item,index) in brand" :key="index">
				<view class="text-box">
					<view class="name">
							{{item.name}}
					</view>
					<view class="price">
						{{item.floor_price}}
					</view>
				</view>
				<view class="loop-item">
					<image :src="item.new_pic_url" mode=""></image>
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
			brand: {
				type: Array
			}
		},
		data() {
			return {}
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
	.loop{
		position: relative;
	}
	.price{
		color: #CFCFD1;
	}
	.text-box{
		position: absolute;
		top: 20rpx;
		left: 20rpx;
		z-index: 999;
	}
	.content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.title {

		display: flex;
		justify-content: center;
		align-items: center;
		height: 110rpx;
		font-size: 36rpx;
	}
	.loop{
		margin-bottom: 40rpx;
	}
	.loop-item {
		width: 330rpx;
		height: 330rpx;
	}

	.loop-item image {
		width: 100%;
		height: 100%;
	}
</style>
