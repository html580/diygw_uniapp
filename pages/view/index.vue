<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup>   
 <view class=" base1 bg-gradual-red    "> 
  <parser :html="content1" show-with-animation="" lazy-load=""></parser> 
 </view>  
 <view class="page__bd view2 ">   
  <view class="images3"> 
   <block v-for="(item, index) in images3"> 
    <view @tap="navigateTo" data-field="images3" :data-index="index" :data-url="item.url" style=""> 
     <image :src="item.thumb_url" class="" mode="scaleToFill" style="width:100%;height:150px" /> 
    </view> 
   </block> 
  </view> 
 </view>  
 <view class="page__bd view4 ">   
  <view class=" base5 bg-gradual-red    "> 
   <parser :html="content5" show-with-animation="" lazy-load=""></parser> 
  </view>   
  <view class="weui-grids   weui-grids6 "> 
   <block v-for="(item, index) in grids6"> 
    <view @tap="navigateTo" data-field="grids6" :data-index="index" :data-url="item.url" class="weui-grid weui-grid-33" hover-class="weui-grid_active"> 
     <view class="weui-grid-inner   " :style="item.backgroundColor" style=""> 
      <image class="weui-grid__icon" :src="item.thumb_url" mode="scaleToFill" style="" /> 
      <view class="weui-grid__label" :style="item.color">
       <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
      </view> 
     </view> 
    </view> 
   </block> 
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
	     content1:`卡片式容器`,
	     images3:[],
	     content5:`容器里放文本及宫格`,
	     grids6:[]
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
     this.getImages3();
     this.getText5();
     this.getGrids6(1);
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	getText1(){
	var that = this;
},
	getImages3(){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/pic1.jpg',url:Tools.renderUrl('','index')}
	  ];
      this.setData({
          images3: datas
      });
},
	getText5(){
	var that = this;
},
	getGrids6(isShow){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/icon5.png',backgroundColor:'',color:'',url:Tools.renderUrl('grid','index'),title:`九宫格`},
	  	 {thumb_url:'/static/images/icon6.png',backgroundColor:'',color:'',url:Tools.renderUrl('appmsg','index'),title:`图文列表`},
	  	 {thumb_url:'/static/images/icon7.png',backgroundColor:'',color:'',url:Tools.renderUrl('menu','index'),title:`滑出菜单`},
	  	 {thumb_url:'/static/images/icon8.png',backgroundColor:'',color:'',url:Tools.renderUrl('tab','index'),title:`选项卡`},
	  	 {thumb_url:'/static/images/icon9.png',backgroundColor:'',color:'',url:Tools.renderUrl('form','index'),title:`表单组件`},
	  	 {thumb_url:'/static/images/icon10.png',backgroundColor:'',color:'',url:Tools.renderUrl('window','index'),title:`弹窗组件`}
	  ];
	  var that = this;
	   
      this.setData({
          grids6: datas
      });
}
}
}
</script>

<style>
.base1{padding: 5px 0px 5px 5px; font-weight: bold;}.view2{}.images3{width:100%;}.view4{}.base5{padding: 5px 0px 5px 5px; font-weight: bold;}.weui-grids6{}
</style>


