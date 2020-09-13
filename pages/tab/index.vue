<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup>  
 <view class="weui-tab"> 
  <view class="weui-navbar bg-gradual-red "> 
   <block v-for="(item, index) in tabs1"> 
    <view :data-id="index" class="weui-navbar__item" :class="index==activeIndex1?'weui-bar__item_on on':''" @tap="tabClick1"> 
     <view class="weui-navbar__title">
      {{item}}
     </view> 
    </view> 
   </block> 
  </view> 
  <view class="weui-tab__panel"> 
   <view class="weui-tab__content" :hidden="activeIndex1 != 0">   
    <view class=" base2     "> 
     <parser :html="content2" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-tab__content" :hidden="activeIndex1 != 1">   
    <view class=" base3     "> 
     <parser :html="content3" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-tab__content" :hidden="activeIndex1 != 2">   
    <view class=" base4     "> 
     <parser :html="content4" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
  </view> 
 </view>  
 <view class="weui-tab"> 
  <view class="weui-navbar bg-gradual-orange "> 
   <block v-for="(item, index) in tabs5"> 
    <view :data-id="index" class="weui-navbar__item" :class="index==activeIndex5?'weui-bar__item_on on':''" @tap="tabClick5"> 
     <view class="weui-navbar__title">
      {{item}}
     </view> 
    </view> 
   </block> 
  </view> 
  <view class="weui-tab__panel"> 
   <view class="weui-tab__content" :hidden="activeIndex5 != 0">   
    <view class=" base6     "> 
     <parser :html="content6" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-tab__content" :hidden="activeIndex5 != 1">   
    <view class=" base7     "> 
     <parser :html="content7" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-tab__content" :hidden="activeIndex5 != 2">   
    <view class=" base8     "> 
     <parser :html="content8" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
  </view> 
 </view>  
 <view class="weui-tab"> 
  <view class="weui-navbar bg-gradual-green "> 
   <block v-for="(item, index) in tabs9"> 
    <view :data-id="index" class="weui-navbar__item" :class="index==activeIndex9?'weui-bar__item_on on':''" @tap="tabClick9"> 
     <view class="weui-navbar__title">
      {{item}}
     </view> 
    </view> 
   </block> 
  </view> 
  <view class="weui-tab__panel"> 
   <view class="weui-tab__content" :hidden="activeIndex9 != 0">   
    <view class=" base10     "> 
     <parser :html="content10" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-tab__content" :hidden="activeIndex9 != 1">   
    <view class=" base11     "> 
     <parser :html="content11" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-tab__content" :hidden="activeIndex9 != 2">   
    <view class=" base12     "> 
     <parser :html="content12" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
  </view> 
 </view>  
 <view class="weui-tab"> 
  <view class="weui-navbar bg-green "> 
   <block v-for="(item, index) in tabs13"> 
    <view :data-id="index" class="weui-navbar__item" :class="index==activeIndex13?'weui-bar__item_on on':''" @tap="tabClick13"> 
     <view class="weui-navbar__title">
      {{item}}
     </view> 
    </view> 
   </block> 
  </view> 
  <view class="weui-tab__panel"> 
   <view class="weui-tab__content" :hidden="activeIndex13 != 0">   
    <view class=" base14     "> 
     <parser :html="content14" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-tab__content" :hidden="activeIndex13 != 1">   
    <view class=" base15     "> 
     <parser :html="content15" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-tab__content" :hidden="activeIndex13 != 2">   
    <view class=" base16     "> 
     <parser :html="content16" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
  </view> 
 </view>  
 <view class="weui-tab"> 
  <view class="weui-navbar bg-pink "> 
   <block v-for="(item, index) in tabs17"> 
    <view :data-id="index" class="weui-navbar__item" :class="index==activeIndex17?'weui-bar__item_on on':''" @tap="tabClick17"> 
     <view class="weui-navbar__title">
      {{item}}
     </view> 
    </view> 
   </block> 
  </view> 
  <view class="weui-tab__panel"> 
   <view class="weui-tab__content" :hidden="activeIndex17 != 0">   
    <view class=" base18     "> 
     <parser :html="content18" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-tab__content" :hidden="activeIndex17 != 1">   
    <view class=" base19     "> 
     <parser :html="content19" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-tab__content" :hidden="activeIndex17 != 2">   
    <view class=" base20     "> 
     <parser :html="content20" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
  </view> 
 </view>  
 <view class="weui-tab"> 
  <view class="weui-navbar bg-cyan "> 
   <block v-for="(item, index) in tabs21"> 
    <view :data-id="index" class="weui-navbar__item" :class="index==activeIndex21?'weui-bar__item_on on':''" @tap="tabClick21"> 
     <view class="weui-navbar__title">
      {{item}}
     </view> 
    </view> 
   </block> 
  </view> 
  <view class="weui-tab__panel"> 
   <view class="weui-tab__content" :hidden="activeIndex21 != 0">   
    <view class=" base22     "> 
     <parser :html="content22" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-tab__content" :hidden="activeIndex21 != 1">   
    <view class=" base23     "> 
     <parser :html="content23" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-tab__content" :hidden="activeIndex21 != 2">   
    <view class=" base24     "> 
     <parser :html="content24" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
  </view> 
 </view>  
 <view class="weui-vertical-tab"> 
  <view class="weui-vertical-navbar bg-mauve "> 
   <block v-for="(item, index) in tabs25"> 
    <view :data-id="index" class="weui-vertical-navbar__item" :class="index==activeIndex25?'weui-vertical-bar__item_on on':''" @tap="tabClick25"> 
     <view class="weui-vertical-navbar__title">
      {{item}}
     </view> 
    </view> 
   </block> 
  </view> 
  <view class="weui-vertical-tab__panel"> 
   <view class="weui-vertical-tab__content" :hidden="activeIndex25 != 0">   
    <view class=" base26     "> 
     <parser :html="content26" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-vertical-tab__content" :hidden="activeIndex25 != 1">   
    <view class=" base27     "> 
     <parser :html="content27" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-vertical-tab__content" :hidden="activeIndex25 != 2">   
    <view class=" base28     "> 
     <parser :html="content28" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
  </view> 
 </view>  
 <view class="weui-vertical-tab"> 
  <view class="weui-vertical-navbar bg-purple "> 
   <block v-for="(item, index) in tabs29"> 
    <view :data-id="index" class="weui-vertical-navbar__item" :class="index==activeIndex29?'weui-vertical-bar__item_on on':''" @tap="tabClick29"> 
     <view class="weui-vertical-navbar__title">
      {{item}}
     </view> 
    </view> 
   </block> 
  </view> 
  <view class="weui-vertical-tab__panel"> 
   <view class="weui-vertical-tab__content" :hidden="activeIndex29 != 0">   
    <view class=" base30     "> 
     <parser :html="content30" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-vertical-tab__content" :hidden="activeIndex29 != 1">   
    <view class=" base31     "> 
     <parser :html="content31" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
   <view class="weui-vertical-tab__content" :hidden="activeIndex29 != 2">   
    <view class=" base32     "> 
     <parser :html="content32" show-with-animation="" lazy-load=""></parser> 
    </view> 
   </view> 
  </view> 
 </view>  
 <view class="weui-floatbar r-b" style="bottom:50px"> 
  <block v-for="(item, index) in floatbars33"> 
   <view @tap="navigateTo" data-field="floatbars33" :data-index="index" :data-url="item.url" class="weui-grid" hover-class="weui-grid_active" :style="item.backgroundColor" style=""> 
    <image :src="item.thumb_url" mode="widthFix" style="" /> 
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
	     tabs1:['菜单一','菜单二','菜单三'],
	activeIndex1:0,
	     content2:`内容一`,
	     content3:`内容二`,
	     content4:`内容三`,
	     tabs5:['菜单一','菜单二','菜单三'],
	activeIndex5:0,
	     content6:`内容一`,
	     content7:`内容二`,
	     content8:`内容三`,
	     tabs9:['菜单一','菜单二','菜单三'],
	activeIndex9:0,
	     content10:`内容一`,
	     content11:`内容二`,
	     content12:`内容三`,
	     tabs13:['菜单一','菜单二','菜单三'],
	activeIndex13:0,
	     content14:`内容一`,
	     content15:`内容二`,
	     content16:`内容三`,
	     tabs17:['菜单一','菜单二','菜单三'],
	activeIndex17:0,
	     content18:`内容一`,
	     content19:`内容二`,
	     content20:`内容三`,
	     tabs21:['菜单一','菜单二','菜单三'],
	activeIndex21:0,
	     content22:`内容一`,
	     content23:`内容二`,
	     content24:`内容三`,
	     tabs25:['菜单一','菜单二','菜单三'],
	activeIndex25:0,
	     content26:`内容一`,
	     content27:`内容二`,
	     content28:`内容三`,
	     tabs29:['菜单一','菜单二','菜单三'],
	activeIndex29:0,
	     content30:`更多样式请更改选项卡样式`,
	     content31:`内容二`,
	     content32:`内容三`,
	     floatbars33:[]
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
     this.getText2();
     this.getText3();
     this.getText4();
     this.getText6();
     this.getText7();
     this.getText8();
     this.getText10();
     this.getText11();
     this.getText12();
     this.getText14();
     this.getText15();
     this.getText16();
     this.getText18();
     this.getText19();
     this.getText20();
     this.getText22();
     this.getText23();
     this.getText24();
     this.getText26();
     this.getText27();
     this.getText28();
     this.getText30();
     this.getText31();
     this.getText32();
     this.getFloatbars33();
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	tabClick1: function (e) {
	const dataset = e.currentTarget.dataset;
    this.setData({
        activeIndex1: dataset.id
    });
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
	tabClick5: function (e) {
	const dataset = e.currentTarget.dataset;
    this.setData({
        activeIndex5: dataset.id
    });
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
	tabClick9: function (e) {
	const dataset = e.currentTarget.dataset;
    this.setData({
        activeIndex9: dataset.id
    });
},
	getText10(){
	var that = this;
},
	getText11(){
	var that = this;
},
	getText12(){
	var that = this;
},
	tabClick13: function (e) {
	const dataset = e.currentTarget.dataset;
    this.setData({
        activeIndex13: dataset.id
    });
},
	getText14(){
	var that = this;
},
	getText15(){
	var that = this;
},
	getText16(){
	var that = this;
},
	tabClick17: function (e) {
	const dataset = e.currentTarget.dataset;
    this.setData({
        activeIndex17: dataset.id
    });
},
	getText18(){
	var that = this;
},
	getText19(){
	var that = this;
},
	getText20(){
	var that = this;
},
	tabClick21: function (e) {
	const dataset = e.currentTarget.dataset;
    this.setData({
        activeIndex21: dataset.id
    });
},
	getText22(){
	var that = this;
},
	getText23(){
	var that = this;
},
	getText24(){
	var that = this;
},
	tabClick25: function (e) {
	const dataset = e.currentTarget.dataset;
    this.setData({
        activeIndex25: dataset.id
    });
},
	getText26(){
	var that = this;
},
	getText27(){
	var that = this;
},
	getText28(){
	var that = this;
},
	tabClick29: function (e) {
	const dataset = e.currentTarget.dataset;
    this.setData({
        activeIndex29: dataset.id
    });
},
	getText30(){
	var that = this;
},
	getText31(){
	var that = this;
},
	getText32(){
	var that = this;
},
	getFloatbars33(){
	  //调用数据
	  var datas=[
	  	 {
	  	 thumb_url:'/static/images/icon1.png',backgroundColor:'',color:'',url:Tools.renderUrl('indexx','index'),title:`首页`
	  	 }
	  ];	 
	  
      this.setData({
          floatbars33: datas
      });
}
}
}
</script>

<style>
.base2{}.base3{}.base4{}.base6{}.base7{}.base8{}.base10{}.base11{}.base12{}.base14{}.base15{}.base16{}.base18{}.base19{}.base20{}.base22{}.base23{}.base24{}.base26{}.base27{}.base28{}.base30{}.base31{}.base32{}
</style>


