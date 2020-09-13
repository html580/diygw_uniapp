<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup>   
 <view class=" base1 bg-gradual-orange    "> 
  <parser :html="content1" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   weui-grids2 "> 
  <block v-for="(item, index) in grids2"> 
   <view @tap="navigateTo" data-field="grids2" :data-index="index" :data-url="item.url" class="weui-grid weui-grid-50" hover-class="weui-grid_active"> 
    <view class="weui-grid-inner   " :style="item.backgroundColor" style=""> 
     <image class="weui-grid__icon" :src="item.thumb_url" mode="scaleToFill" style="" /> 
     <view class="weui-grid__label" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
    </view> 
   </view> 
  </block> 
 </view>   
 <view class=" base3 bg-gradual-orange    "> 
  <parser :html="content3" show-with-animation="" lazy-load=""></parser> 
 </view>  
 <view class="weui-form button4"> 
  <view class="weui-form-item"> 
   <view class="weui_btn_area weui_btn_area_inline"> 
    <button type="primary" data-field="buttons4" data-index="0" @tap="navigateTo" data-url="actions" class="weui-btn weui-btn_primary  ">底部滑出</button> 
    <button type="warn" data-field="buttons4" data-index="1" @tap="navigateTo" data-url="actions" class="weui-btn weui-btn_warn  ">上面弹出</button> 
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
	     content1:`点击宫格打开滑出菜单`,
	     grids2:[],
	     content3:`点击按钮打开滑出菜单`,
	     buttons4:[
				{type:'button',url:Tools.renderUrl('actions','index'),title:`` ,menu:{
	 menuPosition:'Up',
	 menuEffect:'bounce',
	 menuWidth:'100%',
	 title:``,
	 borderclz:'weui-grids-noborder',
	 isImg:true,
	 widthType:'weui-grid-33',
	 directionType:'direction-column',
	 datas:[
	  {thumb_url:'/static/images/icon4.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon6.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('appmsg','index'),title:`图文列表`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon7.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('tab','index'),title:`选项卡`,desc:`说明文字`}
	 ]
 }
},

				{type:'button',url:Tools.renderUrl('actions','index'),title:`` ,menu:{
	 menuPosition:'Down',
	 menuEffect:'bounce',
	 menuWidth:'100%',
	 title:``,
	 borderclz:'weui-grids-noborder',
	 isImg:true,
	 widthType:'weui-grid-33',
	 directionType:'direction-column',
	 datas:[
	  {thumb_url:'/static/images/icon4.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('','index'),title:`标题一`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon6.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('','index'),title:`标题二`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon7.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('','index'),title:`标题三`,desc:`说明文字`}
	 ]
 }
}
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
     this.getText1();
     this.getGrids2(1);
     this.getText3();
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	getText1(){
	var that = this;
},
	getGrids2(isShow){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/icon5.png',backgroundColor:'',color:'',url:Tools.renderUrl('actions','index'),title:`左边弹性滑出` ,menu:{
	 menuPosition:'Left',
	 menuEffect:'bounce',
	 menuWidth:'60%',
	 title:``,
	 borderclz:'weui-grids-noborder',
	 isImg:true,
	 widthType:'weui-grid-33',
	 directionType:'direction-column',
	 datas:[
	  {thumb_url:'/static/images/icon4.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('indexx','index'),title:`标题一`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon6.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('empty','index'),title:`标题二`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon7.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('empty','index'),title:`标题三`,desc:`说明文字`}
	 ]
 }
},
	  	 {thumb_url:'/static/images/icon6.png',backgroundColor:'',color:'',url:Tools.renderUrl('actions','index'),title:`左边放大滑出` ,menu:{
	 menuPosition:'Left',
	 menuEffect:'zoom',
	 menuWidth:'60%',
	 title:``,
	 borderclz:'weui-grids-noborder',
	 isImg:true,
	 widthType:'weui-grid-100',
	 directionType:'',
	 datas:[
	  {thumb_url:'/static/images/icon4.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('tab','index'),title:`标题一`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon6.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('empty','index'),title:`标题二`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon7.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('empty','index'),title:`标题三`,desc:`说明文字`}
	 ]
 }
},
	  	 {thumb_url:'/static/images/icon7.png',backgroundColor:'',color:'',url:Tools.renderUrl('actions','index'),title:`右边渐显` ,menu:{
	 menuPosition:'Right',
	 menuEffect:'fade',
	 menuWidth:'60%',
	 title:``,
	 borderclz:'weui-grids-noborder',
	 isImg:true,
	 widthType:'weui-grid-100',
	 directionType:'reverse',
	 datas:[
	  {thumb_url:'/static/images/icon4.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon6.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('swiperok','index'),title:`滑块组件`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon7.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('other','index'),title:`其他组件`,desc:`说明文字`}
	 ]
 }
},
	  	 {thumb_url:'/static/images/icon8.png',backgroundColor:'',color:'',url:Tools.renderUrl('actions','index'),title:`右边占比渐滑` ,menu:{
	 menuPosition:'Right',
	 menuEffect:'slide',
	 menuWidth:'74%',
	 title:``,
	 borderclz:'weui-grids-noborder',
	 isImg:true,
	 widthType:'weui-grid-50',
	 directionType:'direction-column',
	 datas:[
	  {thumb_url:'/static/images/icon4.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon6.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('appmsg','index'),title:`图文列表`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon7.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('form','index'),title:`表单组件`,desc:`说明文字`}
	 ]
 }
},
	  	 {thumb_url:'/static/images/icon1.png',backgroundColor:'',color:'',url:Tools.renderUrl('actions','index'),title:`底部放大滑出` ,menu:{
	 menuPosition:'Up',
	 menuEffect:'zoom',
	 menuWidth:'100%',
	 title:`带标题菜单`,
	 borderclz:'weui-grids-noborder',
	 isImg:true,
	 widthType:'weui-grid-33',
	 directionType:'direction-column',
	 datas:[
	  {thumb_url:'/static/images/icon4.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon6.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('swiperok','index'),title:`滑块组件`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon7.png'.split(","), backgroundColor:'',color:'',width:'width:50px;heihgt:50px;',padding:'',dcolor:'',url:Tools.renderUrl('floatbar','index'),title:`悬浮框`,desc:`说明文字`}
	 ]
 }
},
	  	 {thumb_url:'/static/images/icon8.png',backgroundColor:'',color:'',url:Tools.renderUrl('actions','index'),title:`自定义背景` ,menu:{
	 menuPosition:'Up',
	 menuEffect:'bounce',
	 menuWidth:'100%',
	 title:`自定义背景`,
	 borderclz:'weui-grids-noborder',
	 isImg:true,
	 widthType:'weui-grid-33',
	 directionType:'direction-column',
	 datas:[
	  {thumb_url:'/static/images/icon4.png'.split(","), backgroundColor:'background:#ff3000;',color:'color:#ffffff;',width:'width:50px;height:50px;',padding:'padding:10px;margin:0px;',dcolor:'',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon6.png'.split(","), backgroundColor:'background:#1102ae;',color:'color:#ffffff;',width:'width:50px;height:50px;',padding:'padding:10px;margin:0px;',dcolor:'',url:Tools.renderUrl('swiperok','index'),title:`滑块组件`,desc:`说明文字`},
	  {thumb_url:'/static/images/icon7.png'.split(","), backgroundColor:'background:#f20021;',color:'color:#ffffff;',width:'width:50px;height:50px;',padding:'padding:10px;margin:0px;',dcolor:'',url:Tools.renderUrl('form','index'),title:`表单组件`,desc:`说明文字`}
	 ]
 }
}
	  ];
	  var that = this;
	   
      this.setData({
          grids2: datas
      });
},
	getText3(){
	var that = this;
}
}
}
</script>

<style>
.base1{padding: 5px 0px 5px 5px; font-weight: bold;}.weui-grids2{}.base3{font-weight: bold; padding: 5px 0px 5px 5px; margin-bottom: 5px;}.button4{}
</style>


