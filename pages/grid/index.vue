<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup>   
 <view class=" base1 bg-gradual-blue    "> 
  <parser :html="content1" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids  weui-card shadow weui-grids2 "> 
  <block v-for="(item, index) in grids2"> 
   <view @tap="navigateTo" data-field="grids2" :data-index="index" :data-url="item.url" class="weui-grid weui-grid-33" hover-class="weui-grid_active"> 
    <view class="weui-grid-inner   " :style="item.backgroundColor" style=""> 
     <image class="weui-grid__icon" :src="item.thumb_url" mode="scaleToFill" style="" /> 
     <view class="weui-grid__label" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
    </view> 
   </view> 
  </block> 
 </view>   
 <view class=" base3 bg-gradual-blue    "> 
  <parser :html="content3" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   weui-grids4 "> 
  <block v-for="(item, index) in grids4"> 
   <view @tap="navigateTo" data-field="grids4" :data-index="index" :data-url="item.url" class="weui-grid weui-grid-33" hover-class="weui-grid_active"> 
    <view class="weui-grid-inner   weui-card shadow" :style="item.backgroundColor" style=""> 
     <image class="weui-grid__icon" :src="item.thumb_url" mode="scaleToFill" style="" /> 
     <view class="weui-grid__label" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
    </view> 
   </view> 
  </block> 
 </view>   
 <view class=" base5 bg-gradual-blue    "> 
  <parser :html="content5" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   weui-grids6 weui-grids-border"> 
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
 <view class=" base7 bg-gradual-blue    "> 
  <parser :html="content7" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   weui-grids8 "> 
  <block v-for="(item, index) in grids8"> 
   <view @tap="navigateTo" data-field="grids8" :data-index="index" :data-url="item.url" class="weui-grid weui-grid-33" hover-class="weui-grid_active"> 
    <view class="weui-grid-inner   " :style="item.backgroundColor" style=""> 
     <image class="weui-grid__icon" :src="item.thumb_url" mode="scaleToFill" style="" /> 
     <view class="weui-grid__label" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
    </view> 
   </view> 
  </block> 
 </view>   
 <view class=" base9 bg-gradual-blue    "> 
  <parser :html="content9" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   weui-grids10 "> 
  <block v-for="(item, index) in grids10"> 
   <view @tap="navigateTo" data-field="grids10" :data-index="index" :data-url="item.url" class="weui-grid weui-grid-33" hover-class="weui-grid_active"> 
    <view class="weui-grid-inner   " :style="item.backgroundColor" style="padding:10px;margin:5px;"> 
     <image class="weui-grid__icon" :src="item.thumb_url" mode="scaleToFill" style="width:50px;height:50px;" /> 
     <view class="weui-grid__label" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
    </view> 
   </view> 
  </block> 
 </view>   
 <view class=" base11 bg-gradual-blue    "> 
  <parser :html="content11" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   weui-grids12 "> 
  <block v-for="(item, index) in grids12"> 
   <view @tap="navigateTo" data-field="grids12" :data-index="index" :data-url="item.url" class="weui-grid weui-grid-25" hover-class="weui-grid_active"> 
    <view class="weui-grid-inner   " :style="item.backgroundColor" style=""> 
     <image class="weui-grid__icon" :src="item.thumb_url" mode="scaleToFill" style="" /> 
     <view class="weui-grid__label" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
    </view> 
   </view> 
  </block> 
 </view>   
 <view class=" base13 bg-gradual-blue    "> 
  <parser :html="content13" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   weui-grids14 "> 
  <block v-for="(item, index) in grids14"> 
   <view @tap="navigateTo" data-field="grids14" :data-index="index" :data-url="item.url" class="weui-grid weui-grid-50" hover-class="weui-grid_active"> 
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
	     content1:`整体卡片`,
	     grids2:[],
	     content3:`子卡片`,
	     grids4:[],
	     content5:`带边框宫格`,
	     grids6:[],
	     content7:`不带边框宫格`,
	     grids8:[],
	     content9:`带背景宫格`,
	     grids10:[],
	     content11:`四宫格`,
	     grids12:[],
	     content13:`二宫格`,
	     grids14:[]
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
     this.getGrids2(1);
     this.getText3();
     this.getGrids4(1);
     this.getText5();
     this.getGrids6(1);
     this.getText7();
     this.getGrids8(1);
     this.getText9();
     this.getGrids10(1);
     this.getText11();
     this.getGrids12(1);
     this.getText13();
     this.getGrids14(1);
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	getText1(){
	var that = this;
},
	getGrids2(isShow){
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
          grids2: datas
      });
},
	getText3(){
	var that = this;
},
	getGrids4(isShow){
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
          grids4: datas
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
},
	getText7(){
	var that = this;
},
	getGrids8(isShow){
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
          grids8: datas
      });
},
	getText9(){
	var that = this;
},
	getGrids10(isShow){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/icon5.png',backgroundColor:'background:#009688;',color:'color:#ffffff;',url:Tools.renderUrl('grid','index'),title:`九宫格`},
	  	 {thumb_url:'/static/images/icon6.png',backgroundColor:'background:#1e9fff;',color:'color:#ffffff;',url:Tools.renderUrl('appmsg','index'),title:`图文列表`},
	  	 {thumb_url:'/static/images/icon7.png',backgroundColor:'background:#ffb800;',color:'color:#ffffff;',url:Tools.renderUrl('menu','index'),title:`滑出菜单`},
	  	 {thumb_url:'/static/images/icon8.png',backgroundColor:'background:#ff5722;',color:'color:#ffffff;',url:Tools.renderUrl('tab','index'),title:`选项卡`},
	  	 {thumb_url:'/static/images/icon9.png',backgroundColor:'background:#2ec7c9;',color:'color:#ffffff;',url:Tools.renderUrl('form','index'),title:`表单组件`},
	  	 {thumb_url:'/static/images/icon10.png',backgroundColor:'background:#0098d9;',color:'color:#ffffff;',url:Tools.renderUrl('window','index'),title:`弹窗组件`}
	  ];
	  var that = this;
	   
      this.setData({
          grids10: datas
      });
},
	getText11(){
	var that = this;
},
	getGrids12(isShow){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/icon5.png',backgroundColor:'',color:'',url:Tools.renderUrl('grid','index'),title:`九宫格`},
	  	 {thumb_url:'/static/images/icon6.png',backgroundColor:'',color:'',url:Tools.renderUrl('appmsg','index'),title:`图文列表`},
	  	 {thumb_url:'/static/images/icon7.png',backgroundColor:'',color:'',url:Tools.renderUrl('menu','index'),title:`滑出菜单`},
	  	 {thumb_url:'/static/images/icon8.png',backgroundColor:'',color:'',url:Tools.renderUrl('tab','index'),title:`选项卡`}
	  ];
	  var that = this;
	   
      this.setData({
          grids12: datas
      });
},
	getText13(){
	var that = this;
},
	getGrids14(isShow){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/icon5.png',backgroundColor:'',color:'',url:Tools.renderUrl('grid','index'),title:`九宫格`},
	  	 {thumb_url:'/static/images/icon6.png',backgroundColor:'',color:'',url:Tools.renderUrl('appmsg','index'),title:`图文列表`},
	  	 {thumb_url:'/static/images/icon7.png',backgroundColor:'',color:'',url:Tools.renderUrl('menu','index'),title:`滑出菜单`},
	  	 {thumb_url:'/static/images/icon8.png',backgroundColor:'',color:'',url:Tools.renderUrl('tab','index'),title:`选项卡`}
	  ];
	  var that = this;
	   
      this.setData({
          grids14: datas
      });
}
}
}
</script>

<style>
.base1{font-size: 12px; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; font-weight: bold;}.weui-grids2{padding-left: 0px; margin-bottom: 10px;}.base3{font-size: 12px; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; font-weight: bold;}.weui-grids4{}.base5{font-size: 12px; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; font-weight: bold;}.weui-grids6{margin-top: 10px; margin-bottom: 10px;}.base7{font-size: 12px; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; font-weight: bold;}.weui-grids8{}.base9{font-size: 12px; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; font-weight: bold;}.weui-grids10{}.base11{font-size: 12px; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; font-weight: bold;}.weui-grids12{}.base13{font-size: 12px; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; font-weight: bold;}.weui-grids14{}
</style>


