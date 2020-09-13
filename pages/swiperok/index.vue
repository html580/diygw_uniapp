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
 <swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" :current="currentIndex2" circular="true" duration="1000" style="height:150px"> 
  <swiper-item v-for="(item, index) in swipers2"> 
   <view @tap="navigateTo" :data-url="item.url" class="slide-image"> 
    <image :src="item.thumb_url" mode="aspectFill" class="slide-image" /> 
   </view> 
  </swiper-item> 
 </swiper>   
 <view class=" base3 bg-gradual-red    "> 
  <parser :html="content3" show-with-animation="" lazy-load=""></parser> 
 </view>  
 <swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" :current="currentIndex4" vertical="true" circular="true" duration="1000" style="height:150px"> 
  <swiper-item v-for="(item, index) in swipers4"> 
   <view @tap="navigateTo" :data-url="item.url" class="slide-image"> 
    <image :src="item.thumb_url" mode="aspectFill" class="slide-image" /> 
   </view> 
  </swiper-item> 
 </swiper>   
 <view class=" base5 bg-gradual-red    "> 
  <parser :html="content5" show-with-animation="" lazy-load=""></parser> 
 </view>  
 <scroll-view scroll-x="true" style="height:100px;" class="scroll-view-items"> 
  <block v-for="(item, index) in swipers6"> 
   <view class="scroll-view-item_H bc_green" style="padding:0" @tap="navigateTo" scroll-x="true" :data-url="item.url"> 
    <image :src="item.thumb_url" mode="widthFix" /> 
   </view> 
  </block> 
 </scroll-view>   
 <view class=" base7 bg-gradual-red    "> 
  <parser :html="content7" show-with-animation="" lazy-load=""></parser> 
 </view>  
 <scroll-view scroll-x="true" style="height:30px;" class="scroll-view-items"> 
  <block v-for="(item, index) in swipers8"> 
   <view class="scroll-view-item_H bc_green" @tap="navigateTo" scroll-x="true" :data-url="item.url">
     {{item.title}} 
   </view> 
  </block> 
 </scroll-view>   
 <view class=" base9 bg-gradual-red    "> 
  <parser :html="content9" show-with-animation="" lazy-load=""></parser> 
 </view>  
 <swiper class="swiper" autoplay="true" interval="3000" :current="currentIndex10" vertical="true" circular="" duration="1000" style="height:30px"> 
  <swiper-item v-for="(item, index) in swipers10"> 
   <view @tap="navigateTo" :data-url="item.url"> 
    <view>
      {{item.title}} 
    </view> 
   </view> 
  </swiper-item> 
 </swiper> 
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
	     content1:`水平滑块`,
	     swipers2: [],
currentIndex2:0,
	     content3:`垂直滑块`,
	     swipers4: [],
currentIndex4:0,
	     content5:`自由滑块`,
	     swipers6: [],
currentIndex6:0,
	     content7:`左右按钮鼠标滑动菜单 `,
	     swipers8: [],
currentIndex8:0,
	     content9:`滚动新闻`,
	     swipers10: [],
currentIndex10:0
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
     this.getSwipers2();
     this.getText3();
     this.getSwipers4();
     this.getText5();
     this.getSwipers6();
     this.getText7();
     this.getSwipers8();
     this.getText9();
     this.getSwipers10();
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	getText1(){
	var that = this;
},
	getSwipers2(){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/pic1.jpg',title:`滑块新闻一`,url:Tools.renderUrl('','index')},
	  	 {thumb_url:'/static/images/pic2.jpg',title:`滑块新闻二`,url:Tools.renderUrl('','index')},
	  	 {thumb_url:'/static/images/pic3.jpg',title:`滑块新闻三`,url:Tools.renderUrl('','index')}
	  ];
      this.setData({
          swipers2: datas
      });
},
	getText3(){
	var that = this;
},
	getSwipers4(){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/pic1.jpg',title:`滑块新闻一`,url:Tools.renderUrl('','index')},
	  	 {thumb_url:'/static/images/pic2.jpg',title:`滑块新闻二`,url:Tools.renderUrl('','index')},
	  	 {thumb_url:'/static/images/pic3.jpg',title:`滑块新闻三`,url:Tools.renderUrl('','index')}
	  ];
      this.setData({
          swipers4: datas
      });
},
	getText5(){
	var that = this;
},
	getSwipers6(){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/pic1.jpg',title:`九宫格`,url:Tools.renderUrl('grid','index')},
	  	 {thumb_url:'/static/images/pic2.jpg',title:`图文列表`,url:Tools.renderUrl('appmsg','index')},
	  	 {thumb_url:'/static/images/pic3.jpg',title:`滑出菜单`,url:Tools.renderUrl('menu','index')},
	  	 {thumb_url:'/static/images/pic2.jpg',title:`悬浮框`,url:Tools.renderUrl('floatbar','index')},
	  	 {thumb_url:'/static/images/pic2.jpg',title:`表单组件`,url:Tools.renderUrl('form','index')}
	  ];
      this.setData({
          swipers6: datas
      });
},
	getText7(){
	var that = this;
},
	getSwipers8(){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/pic1.jpg',title:`九宫格`,url:Tools.renderUrl('grid','index')},
	  	 {thumb_url:'/static/images/pic2.jpg',title:`图文列表`,url:Tools.renderUrl('appmsg','index')},
	  	 {thumb_url:'/static/images/pic3.jpg',title:`滑出菜单`,url:Tools.renderUrl('menu','index')},
	  	 {thumb_url:'/static/images/pic2.jpg',title:`悬浮框`,url:Tools.renderUrl('floatbar','index')},
	  	 {thumb_url:'/static/images/pic2.jpg',title:`表单组件`,url:Tools.renderUrl('form','index')}
	  ];
      this.setData({
          swipers8: datas
      });
},
	getText9(){
	var that = this;
},
	getSwipers10(){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/static/images/pic1.jpg',title:`九宫格`,url:Tools.renderUrl('grid','index')},
	  	 {thumb_url:'/static/images/pic2.jpg',title:`图文列表`,url:Tools.renderUrl('appmsg','index')},
	  	 {thumb_url:'/static/images/pic3.jpg',title:`滑出菜单`,url:Tools.renderUrl('menu','index')},
	  	 {thumb_url:'/static/images/pic2.jpg',title:`悬浮框`,url:Tools.renderUrl('floatbar','index')},
	  	 {thumb_url:'/static/images/pic2.jpg',title:`表单组件`,url:Tools.renderUrl('form','index')}
	  ];
      this.setData({
          swipers10: datas
      });
}
}
}
</script>

<style>
.base1{padding: 5px 0px 5px 5px; font-weight: bold;}.base3{padding: 5px 0px 5px 5px; font-weight: bold;}.base5{padding: 5px 0px 5px 5px; font-weight: bold;}.base7{padding: 5px 0px 5px 5px; font-weight: bold;}.base9{padding: 5px 0px 5px 5px; font-weight: bold;}
</style>


