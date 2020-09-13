<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup> 
 <view style="z-index:10000" data-id="608754" class="weui-popup__container" data-delay="1" :hidden="windowhide608754"> 
  <view class="weui-popup__overlay" style="opacity:0.5"></view> 
  <view id="weui-popup__modal608754" style="top:5%;left:10%;width:80%;" class="weui-popup__modal weui-panel" :class="windoweffect608754"> 
   <view class="weui-panel__hd nav-black"> 
    <view class="weui-panel__title">
     默认打开 
    </view> 
    <view class="weui-panel__tools"> 
     <icon class="iconfont icon-delete1" @tap="closeDiygwWindow" data-id="608754"></icon> 
    </view> 
   </view> 
   <view class="weui-panel__bd">   
    <view class="weui-grids   weui-grids2 "> 
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
   </view> 
   <view class="weui-panel__ft"> 
    <view class="weui_btn_area weui_btn_area_inline"> 
     <button type="primary" @tap="closeDiygwWindow" data-id="608754" class="weui-btn weui-btn_primary  ">关闭</button> 
    </view> 
   </view> 
  </view> 
 </view>   
 <view class="weui-form button3"> 
  <view class="weui-form-item"> 
   <button type="primary" data-field="buttons3" data-index="0" @tap="navigateTo" data-url="275295__weui-popup" class="weui-btn weui-btn_primary  ">点击打开并设置多个效果</button> 
  </view> 
 </view>  
 <view style="z-index:10000" data-id="275295" class="weui-popup__container" data-delay="1" :hidden="windowhide275295"> 
  <view class="weui-popup__overlay" style="opacity:0.5"></view> 
  <view id="weui-popup__modal275295" style="top:8%;left:10%;width:80%;" class="weui-popup__modal weui-panel" :class="windoweffect275295"> 
   <view class="weui-panel__hd nav-black"> 
    <view class="weui-panel__title">
     多效果窗口 
    </view> 
    <view class="weui-panel__tools"> 
     <icon class="iconfont icon-delete1" @tap="closeDiygwWindow" data-id="275295"></icon> 
    </view> 
   </view> 
   <view class="weui-panel__bd">   
    <view class="weui-grids   weui-grids5 "> 
     <block v-for="(item, index) in grids5"> 
      <view @tap="navigateTo" data-field="grids5" :data-index="index" :data-url="item.url" class="weui-grid weui-grid-33" hover-class="weui-grid_active"> 
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
   <view class="weui-panel__ft"> 
    <view class="weui_btn_area weui_btn_area_inline"> 
     <button type="primary" @tap="closeDiygwWindow" data-id="275295" class="weui-btn weui-btn_primary  ">关闭</button> 
    </view> 
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
	     grids2:[],
	     windowhide608754:false,
windoweffects608754:[{"duration":"1s","hide":false,"delay":"0s","effect":"bounceIn","count":"1"}],
	     buttons3:[
				{type:'button',url:Tools.renderUrl('275295__weui-popup','index'),title:``}
			],
	     grids5:[],
	     windowhide275295:true,
windoweffects275295:[{"duration":"1s","hide":false,"delay":"0s","effect":"bounceInDown","count":"1"},{"duration":"1s","hide":false,"delay":"0s","effect":"bounceInUp","count":"1"},{"duration":"1s","hide":false,"delay":"0s","effect":"pulse","count":"1"},{"duration":"1s","hide":false,"delay":"0s","effect":"flip","count":"1"}]
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
     this.getGrids2(1);
     this.getWindow608754();
     this.getGrids5(1);
     this.getWindow275295();
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	getGrids2(isShow){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/icon5.png',backgroundColor:'',color:'',url:Tools.renderUrl('empty','index'),title:`菜单一`},
	  	 {thumb_url:'/static/images/icon6.png',backgroundColor:'',color:'',url:Tools.renderUrl('empty','index'),title:`菜单二`},
	  	 {thumb_url:'/static/images/icon7.png',backgroundColor:'',color:'',url:Tools.renderUrl('empty','index'),title:`菜单三`},
	  	 {thumb_url:'/static/images/icon8.png',backgroundColor:'',color:'',url:Tools.renderUrl('','index'),title:`菜单四`},
	  	 {thumb_url:'/static/images/icon9.png',backgroundColor:'',color:'',url:Tools.renderUrl('','index'),title:`菜单五`},
	  	 {thumb_url:'/static/images/icon10.png',backgroundColor:'',color:'',url:Tools.renderUrl('','index'),title:`菜单六`}
	  ];
	  var that = this;
	   
      this.setData({
          grids2: datas
      });
},
	getWindow608754(){
	this.showDiygwWindow('608754',0,this['windoweffects608754']);
},
	getGrids5(isShow){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/icon5.png',backgroundColor:'',color:'',url:Tools.renderUrl('empty','index'),title:`菜单一`},
	  	 {thumb_url:'/static/images/icon6.png',backgroundColor:'',color:'',url:Tools.renderUrl('empty','index'),title:`菜单二`},
	  	 {thumb_url:'/static/images/icon7.png',backgroundColor:'',color:'',url:Tools.renderUrl('empty','index'),title:`菜单三`},
	  	 {thumb_url:'/static/images/icon8.png',backgroundColor:'',color:'',url:Tools.renderUrl('','index'),title:`菜单四`},
	  	 {thumb_url:'/static/images/icon9.png',backgroundColor:'',color:'',url:Tools.renderUrl('','index'),title:`菜单五`},
	  	 {thumb_url:'/static/images/icon10.png',backgroundColor:'',color:'',url:Tools.renderUrl('','index'),title:`菜单六`}
	  ];
	  var that = this;
	   
      this.setData({
          grids5: datas
      });
},
	getWindow275295(){
}
}
}
</script>

<style>
.weui-grids2{}.button3{}.weui-grids5{}
</style>


