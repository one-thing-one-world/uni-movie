<template>
	<view class="goodsDetail">
		<swiper class="swiper" :indicator-dots="indicatorDots" circular="true" :autoplay="autoplay" :interval="interval"
		 :duration="duration">
			<swiper-item class="swaper-loop-box" v-for="(item,index) in swaperList" :key="index">
				<view class="swaper-loop">
					<image :src="item.img_url"></image>
				</view>
			</swiper-item>

		</swiper>
		<view class="">

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

			<view class="description" v-if="des">
				<view class="des-name">
					{{des.name}}
				</view>
				<view class="des-detail">
					{{des.goods_brief}}
				</view>
				<view class="des-price">
					￥{{des.retail_price}}
				</view>
			</view>
			<view class="underline">

			</view>

			<view class="parameters">
				<view class="parameters-title">
					商品参数
				</view>
				<view class="parameters-detail">
					<view class="attribute" v-for="(item,index) in attribute" :key="index">
						<view class="attribute-item ">
							<view class=" item-name">
								{{item.name}}
							</view>
							<view class=" item-value">
								{{item.value}}
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="parse-box" v-if="des">
				<u-parse :html="des.goods_desc"></u-parse>
			</view>
			<view class="bottom-box">

			</view>

		</view>
		<view class="shop-car-box">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>

		<uni-popup ref="popup" type="bottom">

			<view class="popup-box" v-if="des">
				<view class="popup-box-top df">
					<view class="pop-box-top-img ">
						<image :src="des.list_pic_url" mode=""></image>
					</view>
					<view class="pop-box-top-price-des ">
						<view class="pop-box-top-price">
							价格{{}}
						</view>
						<view class="pop-box-top-des">
							请选择数量
						</view>
					</view>
				</view>
				<view class="popup-box-bottom">
					<view class="count-box-title">
						数量
					</view>
					<view class="count-tool df">
						<view class="">
							<u-number-box v-model="value" @change="valChange"></u-number-box>
						</view>
						<view class="btn" @click="addCar">
							确定
						</view>
					</view>
				</view>
			</view>

		</uni-popup>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		name: "",
		components: {
			uniGoodsNav,
			uniPopup,
			uniPopupMessage,
			uniPopupDialog,
		},
		props: {},
		data() {
			return {
				countNumber: 0,
				value: 0,
				goodsId: '',
				attribute: [],
				des: null,
				swaperList: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				options: [{
					icon: 'heart',
					text: '收藏',

				}, {
					icon: 'cart',
					text: '购物车',
					info: 0
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			addCar() {
				let openId = 'qweasd11'
				uni.request({
					url: `/api/cart/addCart?goodsId=${this.goodsId}`,
					method: 'POST',
					data: {
						goodsId: this.goodsId,
						number: this.countNumber,
						openId: openId
					},
					success: res => {
						console.log(res);

						this.$refs.popup.close()

					},
					fail: () => {},
					complete: () => {}
				});
			},
			valChange(e) {
				this.countNumber = e.value
				console.log(this.countNumber);
				console.log('当前值为: ' + e.value)
			},
			open() {
				this.$refs.popup.open()
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				this.open()
				console.log(e)
				this.options[1].info++
				console.log(this.options[1].info)
				let openId = 'qweasd11'
				if (e.index === 0) {
					// uni.request({
					// 	url: `/api/cart/addCart?goodsId=${this.goodsId}`,
					// 	method: 'POST',
					// 	data: {
					// 		goodsId: this.goodsId,
					// 		number: this.options[1].info,
					// 		openId: openId
					// 	},
					// 	success: res => {
					// 		console.log(res);
					// 	},
					// 	fail: () => {},
					// 	complete: () => {}
					// });
				} else {
					let openId = 'qweasd11'
					uni.request({
						url: `/api/cart/cartList?openId=${openId}`,
						method: 'GET',
						data: {},
						success: res => {
							console.log(res);
						},
						fail: () => {},
						complete: () => {}
					});
				}
			},
			autoGetSomeData(option) {
				let openId = "qweasd11"
				let goodsId = option.id
				this.goodsId = goodsId
				console.log(goodsId);
				uni.request({
					url: `/api/goods/detailaction?id=${goodsId}&openId=${openId}`,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res);
						this.swaperList = res.data.gallery
						this.des = res.data.info
						this.attribute = res.data.attribute
						console.log(this.swaperList);

					},
					fail: (err) => {
						console.log(err);
					},
					complete: () => {}
				});
			}

		},
		mounted() {

		},
		onLoad(option) {
			this.autoGetSomeData(option)
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
	.btn {
		margin-left: 100rpx;
	}

	.count-tool {
		margin-top: 60rpx;
	}

	.pop-box-top-des {
		margin-bottom: 60rpx;
	}

	.pop-box-top-price {
		margin-bottom: 20rpx;
	}

	.pop-box-top-price-des {
		display: flex;

		justify-content: flex-end;
		flex-direction: column;
	}

	.popup-box-bottom {
		margin-top: 60rpx;
	}

	.pop-box-top-img {
		width: 300rpx;
		height: 300rpx;
	}

	.pop-box-top-img image {
		width: 100%;
		height: 100%;
	}

	.bottom-box {
		height: 80rpx;

	}

	.popup-box {
		width: 750rpx;
		height: 600rpx;
		background: white;
		padding: 40rpx;

	}

	.shop-car-box {
		width: 750rpx;
		position: fixed;
		bottom: 0;
	}

	.parse-box {
		font-size: 0rpx;
	}

	.item-name {
		color: gray;
		width: 176rpx;
		font-size: 28rpx;
	}

	.item-value {
		font-size: 32rpx;
		font-weight: 700;
	}

	.parameters {
		padding: 20rpx;
	}

	.attribute-item {
		display: flex;
		padding: 20rpx;
		background: #F7F7F7;
		margin-top: 20rpx;
	}

	.underline {
		height: 4rpx;
		background: #EEEEEE;
	}

	.des-name {
		font-size: 34rpx;

	}

	.des-detail {
		font-size: 24rpx;
		margin-top: 4rpx;
	}

	.des-price {
		color: #B4282D;
		margin-top: 20rpx;
	}

	.description {
		height: 200rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
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

	.swiper {
		height: 700rpx;
	}

	image {
		height: 700rpx;
		width: 750rpx;
	}
</style>
