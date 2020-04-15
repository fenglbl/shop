import Vue from 'vue'
import App from './App'
import {getSysInfo} from  './init/config.js'

Vue.config.productionTip = false

App.mpType = 'app'

getSysInfo().then(info=>{
	Vue.prototype.sysInfo = info
})


const app = new Vue({
    ...App
})
app.$mount()
