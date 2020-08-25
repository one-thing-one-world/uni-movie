<template>
	<view class="container">

		<view class="top">
			<view class="search-container">
				<view class="search-container-item">
					<u-search @focus="goToSearchPage" placeholder="请输入关键字" :show-action="false" :clearabled="true" v-model="keyword"></u-search>
				</view>
			</view>
		</view>
		<view class="content">


			<view class="sideBar">
				<view class="loop-box">
					<view @click="selecTab(item,index)" class="loop" v-for="(item,index) in classification" :key="index">
						<view class="loop-item">
							<view :class="index===0?'line':''">

							</view>
							<view class="loop-item-name" :class="index===num?'fontRed':''">
								{{item.name}}
							</view>
						</view>
					</view>
				</view>
			</view>


			<view class="main ">
				<view class="banner ">
					<image :src="banner_url" mode=""></image>
				</view>
				<view class="banner-title ">
					--{{bannerTitle}}分类--
				</view>
				<view class="banner-item ">
					<view class="loop-box-banner" @click="goToclassificationPage(item,index)" v-for="(item,index) in subList" :key="index">
						<view class="banner-img">
							<image :src="item.wap_banner_url" mode=""></image>
						</view>
						<view class="banner-name">
							{{item.name}}
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
		props: {},
		data() {
			return {
				keyword: '',
				classification: [],
				num: 0,
				subList: '',
				banner_url: '',
				bannerTitle: '',

			}
		},
		methods: {
			goToSearchPage() {

				uni.navigateTo({
					url: "/pages/searchDeatail/searchDeatail"
				})
			},
			goToclassificationPage(item, index) {
				console.log(item);
				console.log(index);
				let items = JSON.stringify(item)
				uni.navigateTo({
					url: `/pages/classificationPage/classificationPage?item=${items}&index=${index}`
				})

			},
			autoGetdata() {
				uni.request({
					url: '/api/category/indexaction',
					method: 'GET',
					data: {},
					success: res => {
						this.classification = res.data.categoryList
						let indexFlag = uni.getStorageSync('indexFlag') * 1
						console.log(indexFlag);
						if (indexFlag > -1 && indexFlag != undefined) {
							let id = this.classification[indexFlag].id
							this.num = indexFlag
							this.getCurrentCatagory(id)
							uni.removeStorageSync('indexFlag')
						} else {
							let id = this.classification[0].id
							this.getCurrentCatagory(id)
						}

					},
					fail: (err) => {
						console.log(err);
					},
					complete: () => {}
				});


			},
			getClassificationData() {
				uni.request({
					url: '/api/category/indexaction',
					method: 'GET',
					data: {},
					success: res => {
						console.log(res);

						this.classification = res.data.categoryList

					},
					fail: () => {},
					complete: () => {}
				});
			},
			selecTab(item, index) {
				this.num = index

				this.getCurrentCatagory(item.id)
			},
			getCurrentCatagory(id) {
				uni.request({
					url: `/api/category/currentaction?id=${id}`,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res);
						this.bannerTitle = res.data.data.currentOne.name
						this.banner_url = res.data.data.currentOne.banner_url
						this.subList = res.data.data.currentOne.subList
						console.log(this.subList);
						console.log(this.banner_url);
					},
					fail: () => {},
					complete: () => {}
				});
			}

		},
		mounted() {


		},
		onShow() {
			this.getClassificationData()
			this.autoGetdata()
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
	.container {
		border: 1rpx solid white;
	}

	.top {
		position: fixed;
		left: 3%;
		top: 6.5%;
		z-index: 999;
		background: white;

	}

	.banner-name {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loop-box-banner {
		margin-bottom: 20rpx;
	}

	.banner-item {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 30rpx;
	}

	.banner-img {
		width: 160rpx;
		height: 140rpx;
	}

	.banner-img image {
		width: 100%;
		height: 100%;
	}

	.banner-title {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20rpx;
	}

	.loop-box {
		position: fixed;
		left: 0;
		top: 15.5%;
	}

	.sideBar {
		width: 150rpx;
		position: relative;
	}

	.main {
		width: 600rpx;
		display: flex;
		align-items: center;
		flex-direction: column;

	}

	.content {

		display: flex;
		margin-top: 120rpx;

	}

	.banner {
		width: 540rpx;
		height: 250rpx;
	}

	.banner image {
		width: 100%;
		height: 100%;
	}

	// @keyframes select {
	// 	from: {
	// 		transform: translateY(0rpx);

	// 	}

	// 	to: {
	// 		transform: translateY(20rpx);

	// 	}
	// }

	.fontRed {
		color: red;
	}

	.search-container {
		margin-top: 20rpx;
		display: flex;
		justify-content: center;

	}

	.search-container-item {
		width: 700rpx;

	}

	.loop-item {
		height: 80rpx;
		width: 120rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

	}

	.line {
		height: 70rpx;
		width: 4rpx;
		background: red;
		animation: select 2s;
	}

	.loop-item-name {
		height: 80rpx;
		width: 90rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
