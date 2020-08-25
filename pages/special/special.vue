<template>
	<view class="special">
		<view class="loop" v-for="(item,index) in specail" :key="index">
			<view class="loop-item">
				<view class="img" @click="goToSpecialPage(item)">
					<image :src="item.scene_pic_url" mode=""></image>
				</view>
				<view class="title">
					{{item.title}}
				</view>
				<view class="subtitle">
					{{item.subtitle}}
				</view>
				<view class="price_info">
					￥{{item.price_info}}起
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
			
		},
		data() {
			return {
				specail: [],
				page:1,
			}
		},
		methods: {

			// 89255592CDB28AE40FCC870F1C504A47
			getSpecialData() {
				
				uni.request({
					url: `/api/topic/listaction?page=${this.page}`,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res);
						this.specail = res.data.data
					},
					fail: (err) => {
						console.log(err);
					},
					complete: () => {}
				});
			},
			goToSpecialPage(item){
				console.log(item);
				uni.navigateTo({
					url:`/pages/specialPage/specialPage?id=${item.id}`
				})
			}

		},
		mounted() {
			this.getSpecialData()

		},
		onReachBottom(){
			this.page = this.page+1
			uni.request({
				url: `/api/topic/listaction?page=${this.page}`,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
					this.specail = this.specail.concat(res.data.data)
				},
				fail: (err) => {
					console.log(err);
				},
				complete: () => {}
			});
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
	.title{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10rpx;
		margin-bottom: 10rpx;

	}
	.subtitle{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		color: #DBD9DE;
		font-size:28rpx;
	}
	.price_info{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		color: #C93891;
		font-size: 30rpx;
	}
.img{
	width: 750rpx;
	height: 376rpx;
}
.img image{
	width: 100%;
	height: 100%;
}
</style>
