<template>
	<view class="increaseAdress">
		<view class="userInfo">
			<view class="username b1">
				<u-field v-model="username" label-width="120" label="姓名" placeholder="请填写姓名">
				</u-field>
			</view>
			<view class="phoneNumber">
				<u-field v-model="mobile" label-width="120" label="手机号" placeholder="请填写手机号">
				</u-field>
			</view>
			<view class="adress">

			</view>
			<view class="detailAddress">

			</view>
			<view class="addressOrigin">
				<view class="left">
					<view class="checkbox-box">
						<u-checkbox-group>
							<u-checkbox v-model="checked">设置为默认地址</u-checkbox>
						</u-checkbox-group>
					</view>
				</view>
				<view class="right">
					一键导入微信
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
				checked: false,
				username:'',
				mobile: '',
			}
		},
		methods: {

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
	.userInfo {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.addressOrigin {}
</style>
