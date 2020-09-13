<template>
	<view class="start">
		 <web-view :src="url"></web-view> 
	</view>
</template>
<script>
//create by: 邓志锋 <280160522@qq.com> <http://www.diygw.com>
export default {
	data(){
	    return {
	        url:'https://xcx.0760k.com/'
	    }
    },
    onLoad(option) {
		if (options && options.url) {
			this.url = decodeURIComponent(option.url);
		}
    	
    },
    onShow() {
    },
    onShareAppMessage: function () {
    }
}
</script>

<style>
	page,body{
		width: 100%;
		height: 100%;
		position: relative;
		color: #333;
	    background-color: #F8F8F8;
	    font-size: 16px;
	    font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
	    -ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: transparent;
	}
	
	.start {
		height: 100%;
	}
	
	.start swiper {
		height: 100%;
	}
	
	.start image {
		width: 100%;
		height: 100%;
	}
</style>