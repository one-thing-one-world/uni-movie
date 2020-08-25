<template>
	<view class="df ">
		<view  class="position" @click="goToPositionPage">
			{{address}}
		</view>
		<view class="search-box ">
			
			<u-search   @focus="goToSearchPage"  v-model="keyword" height="70"  :show-action="false" >
				
			</u-search>
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
		address:"定位失败...",
			}
		},
		methods: {
			goToPositionPage(){
				
				uni.chooseLocation({
					success: (res) => {
					
						this.address = res.address
						console.log(res.address);
						
					}
				});
			},
			goToSearchPage(){
				console.log(666);
				uni.navigateTo({
					url:"/pages/searchDeatail/searchDeatail"
				})
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
	.position {
		width: 250rpx;
		height: 70rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search-box {
		width: 460rpx;
	}

	.search {
		border: 2rpx solid gray;
		height: 40rpx;
	}
</style>
