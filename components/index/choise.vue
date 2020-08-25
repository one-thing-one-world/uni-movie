<template>
	<view class="choise-item df j-around">
		<view @click="goTochoiseItem(item,index)" class="" v-for="(item,index) in choise" :key="index">
			<view class="pic">
				<image :src="item.icon_url" mode=""></image>
			</view>
			<view class="text">
				{{item.name}}
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
			choise: {
				type: Array
			}
		},
		data() {
			return {
				titleList: [],
				contentList: [],
			}
		},
		methods: {

			goTochoiseItem(item, index) {
				console.log(item);
				let id = item.id
				uni.request({
					url: `/api/category/categoryNav?id=${id}`,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res);

						this.titleList = res.data.navData
						console.log(this.titleList);
						
						uni.setStorageSync('titleList',JSON.stringify(this.titleList))
						
						
						
						uni.request({
							url: `/api/goods/goodsList?categoryId=${id}`,
							method: 'GET',
							data: {},
							success: res => {
								console.log(res);
								
								this.contentList = res.data.data
								this.contentTitle = res.data.currentNav
								console.log(this.contentList);
								uni.setStorageSync("contentList",JSON.stringify(this.contentList))
								uni.setStorageSync("contentTitle",JSON.stringify(this.contentTitle))
								uni.navigateTo({
									url:'/pages/choisePage/choisePage'
								})
								
							},
							fail: (err) => {
								console.log(err);
							},
							complete: () => {}
						});
					},
					fail: () => {},
					complete: () => {}
				});
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
	.pic {
		width: 50rpx;
		height: 50rpx;
	}

	.pic image {
		width: 100%;
		height: 100%;
	}

	.text {
		font-size: 18rpx;
	}
</style>
