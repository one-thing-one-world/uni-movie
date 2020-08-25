<template>
    <view class="order">
    	<view class="">
    		
    	</view>
		<view class="increaseAdress" @click="goToIncreaseAdress">
			新增地址
		</view>
    </view>
</template>

<script>
export default {
name: "",
components: {

},
props: {},
data () {
  return {
    }
  },
  methods: {
	  goToIncreaseAdress(){
		  uni.navigateTo({
		  	url:'/pages/increaseAdress/increaseAdress'
		  })
	  }

  },
  mounted () {

  },
  onLoad () {

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
.increaseAdress{
	position: fixed;
	bottom: 0;
	width: 750rpx;
	z-index: 999;
	background: #D81E06;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 40rpx;
	color: white;
	letter-spacing: 4rpx;
	
}
</style>
