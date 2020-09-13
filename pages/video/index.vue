<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup>  
 <view hidden="true"> 
  <audio :src="src1" :action="audioAction1" controls=""></audio> 
 </view> 
 <view class="swiper-music"> 
  <view class="music-btn music-play " :class="autoclz1" @tap="playMusic1"> 
  </view> 
 </view>   
 <view class="weui-videos"> 
  <block v-for="(item, index) in videos2"> 
   <view class="weui-video"> 
    <video id="video" :src="item.video" :autoplay="item.autoplay" :poster="item.image" controls="true"></video> 
    <view> 
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
	     src1:`http://cdn.diygw.com/1.mp3`,
autoclz1:'',
audioAction1: {
  method: 'play'
},
	     videos2:[]
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
     this.playMusic1();
     this.getVideos2();
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	playMusic1(e){
  	 if(!e){
    	 return;
  	 }
	 if (this.audioAction1.method=='play'){
        this.setData({          
          autoclz1: 'music-pause',
          audioAction1: {
            method: 'pause'
          }
        });
      }else{
        this.setData({
          autoclz1:'',
          audioAction1: {
            method: 'play'
          }
        });
      }
},
	getVideos2(){
	  //调用数据
	  var datas=[
	  	 {image:'/static/images/pic2.jpg',video:'http://cdn.diygw.com/diygwcom.mp4',autoplay:false,title:`视频标题一`},
	  	 {image:'/static/images/pic2.jpg',video:'http://cdn.diygw.com/diygwcom.mp4',autoplay:false,title:`视频标题`},
	  	 {image:'/static/images/pic2.jpg',video:'http://cdn.diygw.com/diygwcom.mp4',autoplay:false,title:`视频标题`}
	  ];
	  var that = this;
      this.setData({
          videos2: datas
      });
}
}
}
</script>

<style>
video{
   height:150px;
   width: 100%;
   box-sizing: border-box;
}
.weui-video{
  padding:4px;
  width: 100%;
  box-sizing: border-box;
}
</style>


