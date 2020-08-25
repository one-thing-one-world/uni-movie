<template>
	<view class="choisePage">
		<view class="topNav" v-if="titleList.length>0">
			<u-tabs name="name" :list="titleList" active-color="#B4282D" :current="current" @change="change" :is-scroll="true"></u-tabs>

		</view>
		<view class="content">
			<view class="">
				<view class="content-box">
					<view class="content-title " v-if="titleList.length>0">
						<view class="title">
							{{contentTitle.name}}
						</view>
						<view class="des">
							{{contentTitle.front_name}}
						</view>
					</view>
				</view>
				<view class="content-pic-box ">
					<view class="content-pic " v-for="(item,index) in contentList" :key="index">
						<view class="content-image ">
							<image :src="item.list_pic_url" mode=""></image>
						</view>
						<view class="content-des">
							{{item.goods_brief}}
						</view>
						<view class="price">
							￥{{item.retail_price}}
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
				titleList: [],
				current: 0,
				num:0,
				contentList:[],
				index:0,
				contentTitle:[],
			}
		},
		methods: {

			DataFromClassification(option) {
				let item = JSON.parse(option.item)
				let index = option.index
				this.current = index
				
				console.log(this.current);
				let id = item.id
				uni.request({
					url: `/api/category/categoryNav?id=${id}`,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res);
						this.titleList = res.data.navData
						console.log(this.titleList);
						
						uni.request({
							url: `/api/goods/goodsList?categoryId=${this.titleList[this.index].id}`,
							method: 'GET',
							data: {},
							success: res => {
								this.contentTitle = res.data.currentNav
								this.contentList = res.data.data
								
							},
							fail: () => {},
							complete: () => {}
						});
					},
					fail: () => {},
					complete: () => {}
				});
			},
			change(index) {
				this.current = index;
				uni.request({
					url: `/api/goods/goodsList?categoryId=${this.titleList[index].id}`,
					method: 'GET',
					data: {},
					success: res => {
						
						this.contentTitle = res.data.currentNav
						this.contentList = res.data.data
						
					},
					fail: () => {},
					complete: () => {}
				});
			}

		},
		mounted() {

		},
		onLoad(option) {

			this.DataFromClassification(option)


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
.topNav{
		width: 750rpx;
		
	}
	.content-title{
		margin-top: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 160rpx;
		background-color: white;
	}
	.title{
		margin-bottom:20rpx;
		font-size: 36rpx;
		
	}
	.des{
		color: gray;
	}
	.content-pic-box{
		background: #F4F4F4;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 10rpx;
	}
	.content-pic{
		width: 370rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: white;
		margin-bottom: 10rpx;
	}
	.choisePage{
		background: #F4F4F4;
	}
	.content-image{
		width: 280rpx;
		height: 260rpx;
	}
	.content-image image{
		width: 100%;
		height: 100%;
	}
	
	.content-des{
		font-size: 24rpx;
	}
	.price{
		margin-top: 10rpx;
		color: red;
	}
</style>
