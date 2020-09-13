<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup>  
 <view class="weui-form button1"> 
  <view class="weui-form-item"> 
   <view class="weui_btn_area weui_btn_area_inline"> 
    <button type="bg-gradual-red" data-field="buttons1" data-index="0" @tap="navigateTo" data-url="grid" class="weui-btn bg-gradual-red  ">九宫格</button> 
    <button type="bg-gradual-green" data-field="buttons1" data-index="1" @tap="navigateTo" data-url="floatbar" class="weui-btn bg-gradual-green  ">悬浮框</button> 
   </view> 
  </view> 
 </view>   
 <view class="weui-form button2"> 
  <view class="weui-form-item"> 
   <view class="weui_btn_area weui_btn_area_inline"> 
    <button type="bg-gradual-blue" data-field="buttons2" data-index="0" @tap="navigateTo" data-url="appmsg" class="weui-btn bg-gradual-blue  ">图文列表</button> 
    <button type="bg-gradual-pink" data-field="buttons2" data-index="1" @tap="navigateTo" data-url="menu" class="weui-btn bg-gradual-pink  ">滑出菜单</button> 
   </view> 
  </view> 
 </view>   
 <view class="weui-form button3"> 
  <view class="weui-form-item"> 
   <view class="weui_btn_area weui_btn_area_inline"> 
    <button type="bg-orange" data-field="buttons3" data-index="0" @tap="navigateTo" data-url="tab" class="weui-btn bg-orange  ">选项卡</button> 
    <button type="bg-olive" data-field="buttons3" data-index="1" @tap="navigateTo" data-url="form" class="weui-btn bg-olive  ">表单组件</button> 
   </view> 
  </view> 
 </view>   
 <view class="weui-form button4"> 
  <view class="weui-form-item"> 
   <view class="weui_btn_area weui_btn_area_inline"> 
    <button type="bg-purple" data-field="buttons4" data-index="0" class="weui-btn bg-purple  ">多选组件</button> 
    <button type="bg-mauve" data-field="buttons4" data-index="1" @tap="navigateTo" data-url="video" class="weui-btn bg-mauve  ">视频音频</button> 
   </view> 
  </view> 
 </view>   
 <view class="weui-form button5"> 
  <view class="weui-form-item"> 
   <view class="weui_btn_area weui_btn_area_inline"> 
    <button type="bg-grey" data-field="buttons5" data-index="0" @tap="navigateTo" data-url="link" class="weui-btn bg-grey  ">联系我们</button> 
    <button type="bg-gray" data-field="buttons5" data-index="1" @tap="navigateTo" data-url="about" class="weui-btn bg-gray  ">关于我们</button> 
   </view> 
  </view> 
 </view>   
 <view class="weui-form button6"> 
  <view class="weui-form-item"> 
   <view class="weui_btn_area weui_btn_area_inline"> 
    <button type="bg-gradual-blue" data-field="buttons6" data-index="0" @tap="navigateTo" data-url="indexx" class="weui-btn bg-gradual-blue  ">首页</button> 
   </view> 
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
	     buttons1:[
				{type:'button',url:Tools.renderUrl('grid','index'),title:``},

				{type:'button',url:Tools.renderUrl('floatbar','index'),title:``}
			],
	     buttons2:[
				{type:'button',url:Tools.renderUrl('appmsg','index'),title:``},

				{type:'button',url:Tools.renderUrl('menu','index'),title:``}
			],
	     buttons3:[
				{type:'button',url:Tools.renderUrl('tab','index'),title:``},

				{type:'button',url:Tools.renderUrl('form','index'),title:``}
			],
	     buttons4:[
				{type:'button',url:Tools.renderUrl('empty','index'),title:``},

				{type:'button',url:Tools.renderUrl('video','index'),title:``}
			],
	     buttons5:[
				{type:'button',url:Tools.renderUrl('link','index'),title:``},

				{type:'button',url:Tools.renderUrl('about','index'),title:``}
			],
	     buttons6:[
				{type:'button',url:Tools.renderUrl('indexx','index'),title:``}
			]
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
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal
}
}
</script>

<style>
.button1{}.button2{}.button3{}.button4{}.button5{}.button6{}
</style>


