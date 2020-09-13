<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup>   
 <view class=" base1 bg-gradual-orange    "> 
  <view @tap="navigateTo" data-url="/pages/grid/index" class=" bg-gradual-orange   "> 
   <parser :html="content1" show-with-animation="" lazy-load=""></parser> 
  </view> 
 </view>   
 <view class=" base2 bg-gradual-red    "> 
  <view @tap="navigateTo" data-url="/pages/appmsg/index" class=" bg-gradual-red   "> 
   <parser :html="content2" show-with-animation="" lazy-load=""></parser> 
  </view> 
 </view>   
 <view class=" base3 bg-gradual-green    "> 
  <view @tap="navigateTo" data-url="/pages/menu/index" class=" bg-gradual-green   "> 
   <parser :html="content3" show-with-animation="" lazy-load=""></parser> 
  </view> 
 </view>   
 <view class=" base4 bg-gradual-blue    "> 
  <view @tap="navigateTo" data-url="/pages/tab/index" class=" bg-gradual-blue   "> 
   <parser :html="content4" show-with-animation="" lazy-load=""></parser> 
  </view> 
 </view>   
 <view class=" base5 bg-gradual-purple    "> 
  <view @tap="navigateTo" data-url="/pages/floatbar/index" class=" bg-gradual-purple   "> 
   <parser :html="content5" show-with-animation="" lazy-load=""></parser> 
  </view> 
 </view>   
 <view class=" base6 bg-gradual-pink    "> 
  <view @tap="navigateTo" data-url="/pages/checkbox/index" class=" bg-gradual-pink   "> 
   <parser :html="content6" show-with-animation="" lazy-load=""></parser> 
  </view> 
 </view>   
 <view class=" base7 bg-green    "> 
  <view @tap="navigateTo" data-url="/pages/form/index" class=" bg-green   "> 
   <parser :html="content7" show-with-animation="" lazy-load=""></parser> 
  </view> 
 </view>   
 <view class=" base8 bg-blue    "> 
  <view @tap="navigateTo" data-url="/pages/window/index" class=" bg-blue   "> 
   <parser :html="content8" show-with-animation="" lazy-load=""></parser> 
  </view> 
 </view>   
 <view class=" base9 bg-pink    "> 
  <view @tap="navigateTo" data-url="/pages/about/index" class=" bg-pink   "> 
   <parser :html="content9" show-with-animation="" lazy-load=""></parser> 
  </view> 
 </view> 
</view>
</template>

<script>
//create by: 邓志锋 <280160522@qq.com> <http://www.diygw.com>
import {Tools,Session,HttpService,WxValidate,setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal } from '@/common/Page.js'
export default {
data(){
	return {
		 showpopup: false,
		 showtype: '',
		 showcontent: '',
	     content1:`九宫格`,
	     content2:`图文列表`,
	     content3:`滑出菜单`,
	     content4:`选项卡`,
	     content5:`悬浮框`,
	     content6:`多选组件`,
	     content7:`表单组件`,
	     content8:`弹窗组件`,
	     content9:`关于我们`
	}
},
onShareAppMessage: function () {
},
onLoad(option) {
	if (option){
      this.setData({
         globalOption: option
      })
    }
},
onShow(){
     this.getText1();
     this.getText2();
     this.getText3();
     this.getText4();
     this.getText5();
     this.getText6();
     this.getText7();
     this.getText8();
     this.getText9();
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	getText1(){
	var that = this;
},
	getText2(){
	var that = this;
},
	getText3(){
	var that = this;
},
	getText4(){
	var that = this;
},
	getText5(){
	var that = this;
},
	getText6(){
	var that = this;
},
	getText7(){
	var that = this;
},
	getText8(){
	var that = this;
},
	getText9(){
	var that = this;
}
}
}
</script>

<style>
.base1{padding: 10px;}.base2{padding: 10px;}.base3{padding: 10px;}.base4{padding: 10px;}.base5{padding: 10px;}.base6{padding: 10px;}.base7{padding: 10px;}.base8{padding: 10px;}.base9{padding: 10px;}
</style>


