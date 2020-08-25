<template>
    <view class="">
    	<u-parse :html="specialPage"></u-parse>
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
	  specialPage:'',
    }
  },
  methods: {
	  autoGetspecialDeatil(option){
		  let id = option.id
		  console.log(id);
		  uni.request({
		  	url: `/api/topic/detailaction?id=${id}`,
		  	method: 'GET',
		  	data: {},
		  	success: res => {
				console.log(res);
				this.specialPage = res.data.data.content
			},
		  	fail: () => {},
		  	complete: () => {}
		  });
	  }

  },
  mounted () {

  },
  onLoad (option) {
	  this.autoGetspecialDeatil(option)
	
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
.specialPage{
	width: 100%;
	height: 100%;
	
}

</style>
