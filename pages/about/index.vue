<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup>   
 <view class=" base1     "> 
  <parser :html="content1" show-with-animation="" lazy-load=""></parser> 
 </view>  
 <view class="weui-form button2"> 
  <view class="weui-form-item"> 
   <view class="weui_btn_area weui_btn_area_inline"> 
    <button type="primary" data-field="buttons2" data-index="0" @tap="navigateTo" data-url="tel:15913132246" class="weui-btn weui-btn_primary  ">一键拔号</button> 
    <button type="primary" data-field="buttons2" data-index="1" @tap="navigateTo" data-url="link" class="weui-btn weui-btn_primary  ">联系我们</button> 
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
	     content1:`<p>DIY官网做最好的可视化拖拽开发工具，无须编程 零代码基础 
所见即所得设计工具，轻松制作微信小程序、原型设计、WebApp设计、Bootstrap、单页动画。 DIY可视化设计工具特点 设计中心 
无需下载安装，登录网站后即可设计专属程序 在线打包 支持导出微信小程序、WebApp、Bootstrap、单页动画代码 框架组件丰富 
布局、菜单导航、轮播、选项卡、按钮、多媒体、位置、在线表单等 模块化编辑 模块化编辑可自定义专属&quot;小程序&quot;，满足您的各项业务需求 丰富模板 
丰富的现成模板满足复杂的业务需要和个性需求 个性化设计 微网站、Bootstrap、WebApp、场景动画、自定义表单。<br/></p><p>QQ：280160522</p><p>电话：15913132246</p><p>微信小程序QQ群:217549678</p>`,
	     buttons2:[
				{type:'button',url:Tools.renderUrl('tel:15913132246','index'),title:``},

				{type:'button',url:Tools.renderUrl('link','index'),title:``}
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
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	getText1(){
	var that = this;
}
}
}
</script>

<style>
.base1{}.button2{}
</style>


