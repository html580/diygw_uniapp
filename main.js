import Vue from 'vue'
import App from './App'

import parser from "@/components/jyf-Parser/index";
Vue.component('parser',parser);
import uniPopup from '@/components/uni-popup/uni-popup.vue';
Vue.component('uniPopup',uniPopup);


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

