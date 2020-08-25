<template>
	<view class="more">

		<view class="food-box">
			<image src="../../static/food.jpg" mode=""></image>
		</view>

		<view class="title">

			<view class="comprehensive" @click="getComprehensiveData">
				综合
			</view>
			<view class="price-text ">
				<view class="price-text-box">
					价格
				</view>
				<view class="icon">
					<view class="icon-up" @click="upOrder">
						<image src="../../static/up.png" mode=""></image>
					</view>
					<view class="icon-down" @click="downOrder">
						<image src="../../static/down.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="classification" @click="getComprehensiveData">
				分类
			</view>

		</view>
		<view class="content-box">
			<view class="content-loop " v-for="(item,index) in comprehensive" :key="index">
				<view class="content-loop-item ">
					<view class="content-pic">
						<image :src="item.list_pic_url" mode=""></image>
					</view>
					<view class="content-des ">
						{{item.name}}
					</view>
					<view class="content-price">
						￥{{item.retail_price}}
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
				comprehensive: [],
			}
		},
		methods: {
			getClassification(){
				
			},
			getComprehensiveData() {
				uni.request({
					url: `/api/goods/goodsList?isNew=1`,
					method: 'GET',
					data: {},
					success: res => {
						this.comprehensive = res.data.data
						console.log(res);
					},
					fail: (err) => {
						console.log(err);
					},
					complete: () => {}
				});
			},
			upOrder(){
				uni.request({
					url: '/api/goods/goodsList?isNew=1&order=asc',
					method: 'GET',
					data: {},
					success: res => {
						console.log(res);
						this.comprehensive = res.data.data
					},
					fail: () => {},
					complete: () => {}
				});
			},
			downOrder(){
				
				uni.request({
					url: '/api/goods/goodsList?isNew=1&order=desc',
					method: 'GET',
					data: {},
					success: res => {
						console.log(res);
						this.comprehensive = res.data.data
					},
					fail: () => {},
					complete: () => {}
				});
			}

		},
		mounted() {


		},
		onLoad() {
			this.getComprehensiveData()

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
	@import './lookMore.css'
</style>
