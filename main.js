import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false
Vue.prototype.$api = 'http://118.25.222.68:5757/heyushuo'

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
