<template>
	<view class="container">
		<view class="search-box ">
			<view class="search-item">
				<u-search v-model="keyword" height="70" @change="searchSomeThing"></u-search>
			</view>

		</view>
		<view class="search-content" v-if="value!==''">
			<view class="searchListData" v-for="(item,index) in searchListData" :key="index">
				<view class="searchListData-item" @click="addHistory(item,index)">
					<u-parse :html="item.name"></u-parse>
				</view>
			</view>
			<view class="tips" v-if="searchListData.length==0">
				您搜索的东西不存在
			</view>
		</view>
		<view class="" v-if="value==''">
			<view class="history" v-if="historyData.length>0">
				<view class="search-history">
					搜索历史
				</view>
				<view class="delete-icon" @click="deleteHistory">
					<image src="../../static/delete.png" mode=""></image>
				</view>
			</view>

			<scroll-view scroll-x="true" scroll-left="120">
				<view class="historyData-container" v-if="historyData.length>0">
					<view class="historyData-box" v-for="(item,index) in historyData" :key="index">
						{{item.keyword}}
					</view>
				</view>
			</scroll-view>

			<view class="search-item">
				<view class="search-item-box">
					热门搜索
				</view>
			</view>
			<view class="hotSearch-box">
				<view class="hotSearch" v-for="(item,index) in hotKeywordList" :key="index">
					<view class="hotSearch-item">
						{{item.keyword}}
					</view>
				</view>
			</view>
		</view>

		<view class="df">

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
				hotKeywordList: [],
				historyData: [],
				searchListData: [],
				value: '',

			}
		},
		methods: {
			addHistory(item, index) {
				let id = 'qweasd11'
				uni.request({
					url: `/api/search/addhistoryaction`,
					method: 'POST',
					data: {
						keyword: item.name,
						openId: id
					},
					success: res => {
						console.log(res);
						this.getHotSearchData()

					},
					fail: (err) => {
						console.log(err)
					},
					complete: () => {}
				});

			},
			getHotSearchData() {
				let id = 'qweasd11'
				uni.request({
					url: `/api/search/indexaction?openId=${id}`,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res);
						this.hotKeywordList = res.data.hotKeywordList
						this.historyData = res.data.historyData
						console.log(this.historyData);
						console.log(this.hotKeywordList);
					},
					fail: (err) => {
						console.log(err);
					},
					complete: () => {}
				});
			},
			searchSomeThing(e) {
				let id = 'qweasd11'
				this.value = e
				uni.request({
					url: `/api/search/helperaction?keyword=${e} `,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res);
						this.searchListData = res.data.keywords
						this.searchListData.map((item, index) => {
							
							let replaceReg = new RegExp(e, 'g') // 匹配关键字正则

							let replaceString = '<text  style="color:red">' + e + "</text>" // 高亮替换v-html值
							item.name = item.name.replace(replaceReg, replaceString);
							console.log(item.name);

						})
						console.log(this.searchListData);
					},
					fail: () => {},
					complete: () => {}
				});
			},
			deleteHistory() {
				let id = 'qweasd11'
				uni.request({
					url: `/api/search/clearhistoryAction`,
					method: 'POST',
					data: {
						openId: id
					},
					success: res => {
						console.log(res);
						this.getHotSearchData()

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

		onLoad() {
			this.getHotSearchData()

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
	.reds{
		color: red;
	}
	.historyData-container {
		display: flex;

	}

	.historyData-box {
		white-space: nowrap;
		padding: 6rpx 10rpx;
		border: 2rpx solid #999;
		margin-left: 20rpx;
		margin-top: 16rpx;


	}

	.searchListData-item {
		line-height: 80rpx;
		margin-left: 30rpx;
	}

	.tips {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 500rpx;
		width: 750rpx;
	}

	.search-item-box {
		margin-top: 20rpx;
		margin-bottom: 10rpx;
		margin-left: 20rpx;
	}

	.hotSearch-box {
		display: flex;
		flex-wrap: wrap;
		font-size: 24rpx;
		padding: 0 20rpx;



	}

	.hotSearch-item {
		padding: 10rpx 14rpx;
		border: 2rpx solid gray;
		margin-right: 18rpx;
		margin-top: 20rpx;

	}

	.hotSearch:nth-child(1) .hotSearch-item {
		border: 2rpx solid red;
	}

	.search-history {
		display: flex;
		align-items: center;
	}

	.delete-icon {
		width: 50rpx;
		height: 50rpx;
	}

	.delete-icon image {
		width: 100%;
		height: 100%;
	}

	.history {
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;

	}

	.search-box {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 120rpx;
	}

	.search-item {
		width: 700rpx;
	}
</style>
