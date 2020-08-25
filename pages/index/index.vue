<template>
	<view class="container">

		<view class="top">
			<top></top>
		</view>

		<view class="banner">
			<banner :banner="banner"></banner>
		</view>

		<view class="choise">
			<choise :choise="choise"></choise>
		</view>

		<view class="brand">
			<brand :brand="brand"></brand>
		</view>

		<view class="newProduct">
			<newProduct :newProduct="newProduct"></newProduct>
		</view>

		<view class="popularityRecommend">
			<popularityRecommend :popularityRecommend="popularityRecommend"></popularityRecommend>
		</view>

		<view class="featuredSelection">
			<featuredSelection :featuredSelection="featuredSelection"></featuredSelection>
		</view>

		<view class="liveHose">
			<liveHose :liveHose="liveHose"></liveHose>
		</view>

	</view>
</template>

<script>
	import top from "../../components/index/top.vue"
	import banner from "../../components/index/banner.vue"
	import choise from "../../components/index/choise.vue"
	import brand from "../../components/index/brand.vue"
	import newProduct from "../../components/index/newProduct.vue"
	import popularityRecommend from "../../components/index/popularityRecommend.vue"
	import featuredSelection from "../../components/index/featuredSelection.vue"
	import liveHose from "../../components/index/liveHose.vue"

	export default {
		components: {
			top,
			banner,
			choise,
			brand,
			newProduct,
			popularityRecommend,
			featuredSelection,
			liveHose,
		},
		data() {
			return {
				banner: [],
				choise: [],
				brand: [],
				newProduct: [],
				popularityRecommend: [],
				featuredSelection: [],
				liveHose: []

			}
		},
		methods: {
			getIndexData() {
				uni.request({
					url: `/api/index/index`,
					method: 'GET',
					data: {},
					success: res => {
						this.banner = res.data.banner,
							this.choise = res.data.channel,
							this.brand = res.data.brandList,
							this.newProduct = res.data.newGoods
						this.popularityRecommend = res.data.hotGoods
						this.featuredSelection = res.data.topicList
						this.liveHose = res.data.newCategoryList
						console.log(res);
					},
					fail: (err) => {
						console.log(err);
					},
					complete: () => {}
				})
			}

		},
		onShow() {
			this.getIndexData()
		}

	}
</script>

<style>
	.top {
		margin-top: 20rpx;
	}

	.banner {
		margin-top: 20rpx;
	}

	.choise {
		margin-top: 20rpx;
	}

	.featuredSelection {
		margin-top: 20rpx;
	}
</style>
