<template>
	<view class="container">

		<view class="advantage ">
			<view class=" advantage-item">
				<view class="red-icon">

				</view>
				<view class="text">
					30天无忧退货
				</view>
			</view>
			<view class=" advantage-item df">
				<view class="red-icon">

				</view>
				<view class="text">
					48小时快速退款
				</view>

			</view>
			<view class=" advantage-item df">

				<view class="red-icon">

				</view>
				<view class="text">
					满88元免门票
				</view>

			</view>
		</view>

		<checkbox-group @change="checkboxChanges">

			<view class="middle " v-if="dataList.length>0">
				<u-swipe-action btn-width="120" :show="item.show" :index="index" v-for="(item, index) in dataList" :key="item.id"
				 @click="click" @open="open" :options="options">

					<view class="item  u-border-bottom">
						<view class="swap-content ">
							<view class="  df">
								<view class="checkbox-item">
									<checkbox :checked="item.checked" :value="item.goods_name" />
								</view>
								<view class="image-box ">
									<image mode="aspectFill" :src="item.list_pic_url" />
								</view>
								<view class="item-text ">
									<view class="goods_name">
										{{item.goods_name}}
									</view>
									<view class="price">
										￥{{item.retail_price}}
									</view>
								</view>
							</view>
							<view class="count ">
								x {{item.number}}
							</view>
						</view>
						<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
						<view class="title-wrap">
							<text class="title u-line-2">{{ item.title }}</text>
						</view>
					</view>
				</u-swipe-action>
			</view>
		</checkbox-group>
		<view class="all ">
			<view class="all-left ">
				<view class="all-checkbox ">
					<checkbox-group @change="changeall">
						<checkbox value="flag" :checked="flag" />
					</checkbox-group>
				</view>
				<view class="select">
					全选(0)
				</view>
			</view>
			<view class="all-right">
				<view class="all-price">
					￥{{totalPrice}}元
				</view>
				<view class="place-an-order" @click="goToPlaceAnHolder">
					下单
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
				dataList: [],
				items: [],
				disabled: false,
				btnWidth: 180,
				show: false,
				options: [{
					text: '删除',
					style: {

						backgroundColor: '#dd524d'
					}
				}],
				flag: false,
				totalPrice: '0.00',
				buyGoodsList:[],

			}
		},
		methods: {
			goToPlaceAnHolder(){
				if(this.buyGoodsList.length>0){
					let buyGoodsList = JSON.stringify(this.buyGoodsList)
					uni.navigateTo({
						url:`/pages/placeAnHolder/placeAnHolder?list=${buyGoodsList}`
					})
				}else{
					uni.showToast({
					    title: '您还没有选中商品',
					    duration: 2000,
						mask:true
					});
				}
				
			},
			checkboxChanges(e) {
				var items = this.dataList

				console.log(e)
				let values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.goods_name)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				console.log(this.dataList);
				this.flag = this.dataList.every((item, index) => {

					return item.checked === true

				})
				let arr = this.dataList.filter((item, index) => {
					return item.checked === true
				})
				this.buyGoodsList = arr
				if (arr.length > 0) {
					let number = 0
					let price = 0;
					arr.map((item, index) => {

						number = item.retail_price * item.number
						price = number.toFixed(2) * 1 + price

					})
					this.totalPrice = price
				}

			},
			changeall(e) {
				console.log(e);
				if (e.detail.value[0] === "flag") {
					this.flag = true
					console.log(this.flag);
				} else {
					this.flag = false
					console.log(this.flag);
				}

				this.dataList.map((item, index) => {
					item.checked = this.flag
				})
				console.log(this.dataList)
				let priceList = this.dataList.filter((item, index) => {
					return item.checked === true
				})
				if (priceList.length > 0) {
					let number = 0
					let price = 0;
					priceList.map((item, index) => {
						number = item.retail_price * item.number
						price = number.toFixed(2) * 1 + price
					})

					this.totalPrice = price
					this.buyGoodsList = this.dataList
				} else {
					this.totalPrice = 0.00
					this.buyGoodsList = []
				}
			},
			open(index) {

				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.dataList[index].show = true;
				this.dataList.map((item1, index1) => {
					if (index != index1) this.dataList[index1].show = false;
					// item1.show = false


				})
				// this.dataList[index].show = true;
				console.log(this.dataList);
			},

			click(index) {

				this.dataList.splice(index, 1);
				this.$u.toast(`删除了第${index}个cell`);

			},



			autoGetShoppingCare() {

				let openId = 'qweasd11'
				uni.request({
					url: `/api/cart/cartList?openId=${openId}`,
					method: 'GET',
					data: {},
					success: res => {
						this.dataList = res.data.data
						console.log(this.dataList);
					},
					fail: () => {},
					complete: () => {}

				});
			}

		},
		mounted() {

		},
		onLoad() {
			
			this.autoGetShoppingCare()

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
	.all-price {
		display: flex;
		align-items: center;
		justify-content: center;

		padding-right: 40rpx;
	}

	.all-right {
		display: flex;
	}

	.place-an-order {
		width: 200rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #D81E06;
		color: white;
	}

	.container {
		background: #F4F4F4;
		height: 1050rpx;

	}

	.all-checkbox {
		margin-left: 50rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
	}

	.select {
		height: 100rpx;
		display: flex;
		align-items: center;
	}

	.all {
		display: flex;
		justify-content: space-between;
		position: fixed;
		bottom: 100rpx;
		z-index: 999;
		height: 100rpx;
		width: 750rpx;
	}

	.all-left {
		display: flex;
		align-items: center;
	}

	.checkbox-item {
		display: flex;
		align-items: center;
		margin-left: 50rpx;
	}

	.count {
		display: flex;
		align-items: center;
		margin-right: 90rpx;
		justify-content: flex-start;
	}

	.swap-content {
		display: flex;
		justify-content: space-between;
		width: 750rpx;
	}

	.price {
		margin-top: 6rpx;
	}

	.item-text {
		margin-left: 20rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.u-border-bottom {
		height: 160rpx;
		display: flex;
		align-items: center;
	}

	.image-box {
		width: 100rpx;
		height: 100rpx;
	}

	.image-box image {
		width: 100%;
		height: 100%;
	}

	.text {
		margin-left: 8rpx;
	}

	.advantage-item {
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.advantage {
		padding: 20rpx 0rpx;
		background: #EEEEEE;
		display: flex;
		justify-content: space-around;
	}

	.red-icon {
		width: 2rpx;
		height: 2rpx;
		border: 4rpx solid red;
	}
</style>
