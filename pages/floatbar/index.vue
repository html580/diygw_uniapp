<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup>  
 <view class="weui-floatbar r-b" style="bottom:0px"> 
  <block v-for="(item, index) in floatbars1"> 
   <view @tap="navigateTo" data-field="floatbars1" :data-index="index" :data-url="item.url" class="weui-grid" hover-class="weui-grid_active" :style="item.backgroundColor" style=""> 
    <image :src="item.thumb_url" mode="widthFix" style="" /> 
   </view> 
  </block> 
 </view>  
 <view class="weui-floatbar l-t" style="top:0px"> 
  <block v-for="(item, index) in floatbars2"> 
   <view @tap="navigateTo" data-field="floatbars2" :data-index="index" :data-url="item.url" class="weui-grid" hover-class="weui-grid_active" :style="item.backgroundColor" style=""> 
    <image :src="item.thumb_url" mode="widthFix" style="" /> 
   </view> 
  </block> 
 </view>  
 <view class="weui-floatbar r-t" style="top:70px"> 
  <block v-for="(item, index) in floatbars3"> 
   <view @tap="navigateTo" data-field="floatbars3" :data-index="index" :data-url="item.url" class="weui-grid" hover-class="weui-grid_active" :style="item.backgroundColor" style=""> 
    <image :src="item.thumb_url" mode="widthFix" style="" /> 
   </view> 
  </block> 
 </view>  
 <view class="weui-floatbar l-b" style="bottom:42px"> 
  <block v-for="(item, index) in floatbars4"> 
   <view @tap="navigateTo" data-field="floatbars4" :data-index="index" :data-url="item.url" class="weui-grid" hover-class="weui-grid_active" :style="item.backgroundColor" style=""> 
    <image :src="item.thumb_url" mode="widthFix" style="" /> 
   </view> 
  </block> 
 </view>  
 <view class="weui-form button5"> 
  <view class="weui-form-item"> 
   <button type="primary" data-field="buttons5" data-index="0" @tap="navigateTo" data-url="indexx" class="weui-btn weui-btn_primary  ">首页</button> 
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
	     floatbars1:[],
	     floatbars2:[],
	     floatbars3:[],
	     floatbars4:[],
	     buttons5:[
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
     this.getFloatbars1();
     this.getFloatbars2();
     this.getFloatbars3();
     this.getFloatbars4();
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	getFloatbars1(){
	  //调用数据
	  var datas=[
	  	 {
	  	 thumb_url:'/static/images/icon1.png',backgroundColor:'',color:'',url:Tools.renderUrl('grid','index'),title:`九宫格`
	  	 },
	  	 {
	  	 thumb_url:'/static/images/icon6.png',backgroundColor:'',color:'',url:Tools.renderUrl('actions','index'),title:`滑出菜单` ,menu:{
	 menuPosition:'',
	 menuEffect:'',
	 menuWidth:'',
	 title:``,
	 borderclz:'weui-grids-noborder',
	 isImg:false,
	 widthType:'',
	 directionType:'',
	 datas:[
	 ]
 }

	  	 },
	  	 {
	  	 thumb_url:'/static/images/icon7.png',backgroundColor:'',color:'',url:Tools.renderUrl('swiperok','index'),title:`滑块组件`
	  	 }
	  ];	 
	  
      this.setData({
          floatbars1: datas
      });
},
	getFloatbars2(){
	  //调用数据
	  var datas=[
	  	 {
	  	 thumb_url:'/static/images/icon5.png',backgroundColor:'',color:'',url:Tools.renderUrl('grid','index'),title:`九宫格`
	  	 },
	  	 {
	  	 thumb_url:'/static/images/icon7.png',backgroundColor:'',color:'',url:Tools.renderUrl('appmsg','index'),title:`图文列表`
	  	 }
	  ];	 
	  
      this.setData({
          floatbars2: datas
      });
},
	getFloatbars3(){
	  //调用数据
	  var datas=[
	  	 {
	  	 thumb_url:'/static/images/icon1.png',backgroundColor:'',color:'',url:Tools.renderUrl('grid','index'),title:`九宫格`
	  	 }
	  ];	 
	  
      this.setData({
          floatbars3: datas
      });
},
	getFloatbars4(){
	  //调用数据
	  var datas=[
	  	 {
	  	 thumb_url:'/static/images/icon1.png',backgroundColor:'',color:'',url:Tools.renderUrl('swiperok','index'),title:`滑块组件`
	  	 }
	  ];	 
	  
      this.setData({
          floatbars4: datas
      });
}
}
}
</script>

<style>
.button5{}
</style>


