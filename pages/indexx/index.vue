<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup>   
 <view class="weui-grids   weui-grids1 "> 
  <block v-for="(item, index) in grids1"> 
   <view @tap="navigateTo" data-field="grids1" :data-index="index" :data-url="item.url" class="weui-grid weui-grid-33" hover-class="weui-grid_active"> 
    <view class="weui-grid-inner   " :style="item.backgroundColor" style=""> 
     <image class="weui-grid__icon" :src="item.thumb_url" mode="scaleToFill" style="" /> 
     <view class="weui-grid__label" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
    </view> 
   </view> 
  </block> 
 </view>   
 <view class="weui-article__p base2     "> 
  <parser :html="content2" show-with-animation="" lazy-load=""></parser> 
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
	     grids1:[],
	     content2:`<p style="text-align: center;">
    由http://www.diygw.com设计自动生成
</p>`
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
     this.getGrids1(1);
     this.getText2();
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	getGrids1(isShow){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/icon5.png',backgroundColor:'',color:'',url:Tools.renderUrl('grid','index'),title:`九宫格`},
	  	 {thumb_url:'/static/images/icon6.png',backgroundColor:'',color:'',url:Tools.renderUrl('appmsg','index'),title:`图文列表`},
	  	 {thumb_url:'/static/images/icon7.png',backgroundColor:'',color:'',url:Tools.renderUrl('swiperok','index'),title:`滑块组件`},
	  	 {thumb_url:'/static/images/icon1.png',backgroundColor:'',color:'',url:Tools.renderUrl('menu','index'),title:`滑出菜单`},
	  	 {thumb_url:'/static/images/icon8.png',backgroundColor:'',color:'',url:Tools.renderUrl('tab','index'),title:`选项卡`},
	  	 {thumb_url:'/static/images/icon9.png',backgroundColor:'',color:'',url:Tools.renderUrl('floatbar','index'),title:`悬浮框`},
	  	 {thumb_url:'/static/images/icon10.png',backgroundColor:'',color:'',url:Tools.renderUrl('window','index'),title:`弹窗组件`},
	  	 {thumb_url:'/static/images/icon6.png',backgroundColor:'',color:'',url:Tools.renderUrl('form','index'),title:`表单组件`},
	  	 {thumb_url:'/static/images/icon2.png',backgroundColor:'',color:'',url:Tools.renderUrl('checkbox','index'),title:`多选组件`},
	  	 {thumb_url:'/static/images/icon6.png',backgroundColor:'',color:'',url:Tools.renderUrl('video','index'),title:`视频音频`},
	  	 {thumb_url:'/static/images/icon1.png',backgroundColor:'',color:'',url:Tools.renderUrl('page607432','index'),title:`文本链接`},
	  	 {thumb_url:'/static/images/icon2.png',backgroundColor:'',color:'',url:Tools.renderUrl('button','index'),title:`按钮组件`},
	  	 {thumb_url:'/static/images/icon1.png',backgroundColor:'',color:'',url:Tools.renderUrl('view','index'),title:`容器组件`},
	  	 {thumb_url:'/static/images/icon3.png',backgroundColor:'',color:'',url:Tools.renderUrl('link','index'),title:`联系我们`},
	  	 {thumb_url:'/static/images/icon1.png',backgroundColor:'',color:'',url:Tools.renderUrl('about','index'),title:`关于我们`}
	  ];
	  var that = this;
	   
      this.setData({
          grids1: datas
      });
},
	getText2(){
	var that = this;
}
}
}
</script>

<style>
.weui-grids1{}.base2{}
</style>


