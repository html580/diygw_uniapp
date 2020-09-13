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
 <view class="weui-grids   appmsg2 "> 
  <block v-for="(item, index) in msgs2"> 
   <view @tap="navigateTo" :style="item.backgroundColor" style="" data-field="msgs2" :data-index="index" :data-url="item.url" :class="item.directionType" class="weui-media-box  weui-media-box_appmsg    "> 
    <view class="weui-media-box__hd weui-media-box__hd_in-appmsg"> 
     <block v-for="(img, index) in item.thumb_url"> 
      <image class="weui-media-box__thumb" :src="img" style="" /> 
     </block> 
    </view> 
    <view class="weui-media-box__bd weui-media-box__bd_in-appmsg"> 
     <view class="weui-media-box__title" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
     <view class="weui-media-box__desc" :style="item.dcolor">
      <parser :html="item.desc" show-with-animation="" lazy-load=""></parser> 
     </view> 
    </view> 
   </view>
  </block> 
 </view>   
 <view class=" base3 bg-gradual-red    "> 
  <parser :html="content3" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids  weui-card shadow appmsg4 "> 
  <block v-for="(item, index) in msgs4"> 
   <view @tap="navigateTo" :style="item.backgroundColor" style="" data-field="msgs4" :data-index="index" :data-url="item.url" :class="item.directionType" class="weui-media-box  weui-media-box_appmsg    "> 
    <view class="weui-media-box__hd weui-media-box__hd_in-appmsg"> 
     <block v-for="(img, index) in item.thumb_url"> 
      <image class="weui-media-box__thumb" :src="img" style="" /> 
     </block> 
    </view> 
    <view class="weui-media-box__bd weui-media-box__bd_in-appmsg"> 
     <view class="weui-media-box__title" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
     <view class="weui-media-box__desc" :style="item.dcolor">
      <parser :html="item.desc" show-with-animation="" lazy-load=""></parser> 
     </view> 
    </view> 
   </view>
  </block> 
 </view>   
 <view class=" base5 bg-gradual-red    "> 
  <parser :html="content5" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   appmsg6 "> 
  <block v-for="(item, index) in msgs6"> 
   <view @tap="navigateTo" :style="item.backgroundColor" style="" data-field="msgs6" :data-index="index" :data-url="item.url" :class="item.directionType" class="weui-media-box  weui-media-box_appmsg    "> 
    <view class="weui-media-box__hd weui-media-box__hd_in-appmsg"> 
     <block v-for="(img, index) in item.thumb_url"> 
      <image class="weui-media-box__thumb" :src="img" style="" /> 
     </block> 
    </view> 
    <view class="weui-media-box__bd weui-media-box__bd_in-appmsg"> 
     <view class="weui-media-box__title" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
     <view class="weui-media-box__desc" :style="item.dcolor">
      <parser :html="item.desc" show-with-animation="" lazy-load=""></parser> 
     </view> 
    </view> 
   </view>
  </block> 
 </view>   
 <view class=" base7 bg-gradual-red    "> 
  <parser :html="content7" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   appmsg8 "> 
  <block v-for="(item, index) in msgs8"> 
   <view @tap="navigateTo" :style="item.backgroundColor" style="padding:10px;margin:6px;" data-field="msgs8" :data-index="index" :data-url="item.url" :class="item.directionType" class="weui-media-box  weui-media-box_appmsg    weui-noborder"> 
    <view class="weui-media-box__hd weui-media-box__hd_in-appmsg"> 
     <block v-for="(img, index) in item.thumb_url"> 
      <image class="weui-media-box__thumb" :src="img" style="width:50px;height:50px;" /> 
     </block> 
    </view> 
    <view class="weui-media-box__bd weui-media-box__bd_in-appmsg"> 
     <view class="weui-media-box__title" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
     <view class="weui-media-box__desc" :style="item.dcolor">
      <parser :html="item.desc" show-with-animation="" lazy-load=""></parser> 
     </view> 
    </view> 
   </view>
  </block> 
 </view>   
 <view class=" base9 bg-gradual-red    "> 
  <parser :html="content9" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   appmsg10 "> 
  <block v-for="(item, index) in msgs10"> 
   <view @tap="navigateTo" :style="item.backgroundColor" style="" data-field="msgs10" :data-index="index" :data-url="item.url" :class="item.directionType" class="weui-media-box weui-grid-50 weui-media-box_appmsg    weui-noborder"> 
    <view class="weui-media-box__hd weui-media-box__hd_in-appmsg"> 
     <block v-for="(img, index) in item.thumb_url"> 
      <image class="weui-media-box__thumb" :src="img" style="" /> 
     </block> 
    </view> 
    <view class="weui-media-box__bd weui-media-box__bd_in-appmsg"> 
     <view class="weui-media-box__title" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
     <view class="weui-media-box__desc" :style="item.dcolor">
      <parser :html="item.desc" show-with-animation="" lazy-load=""></parser> 
     </view> 
    </view> 
   </view>
  </block> 
 </view>   
 <view class=" base11 bg-gradual-red    "> 
  <parser :html="content11" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   appmsg12 "> 
  <block v-for="(item, index) in msgs12"> 
   <view @tap="navigateTo" :style="item.backgroundColor" style="" data-field="msgs12" :data-index="index" :data-url="item.url" :class="item.directionType" class="weui-media-box weui-grid-50 weui-media-box_appmsg    weui-noborder"> 
    <view class="weui-media-box__hd weui-media-box__hd_in-appmsg"> 
     <block v-for="(img, index) in item.thumb_url"> 
      <image class="weui-media-box__thumb" :src="img" style="" /> 
     </block> 
    </view> 
    <view class="weui-media-box__bd weui-media-box__bd_in-appmsg"> 
     <view class="weui-media-box__title" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
     <view class="weui-media-box__desc" :style="item.dcolor">
      <parser :html="item.desc" show-with-animation="" lazy-load=""></parser> 
     </view> 
    </view> 
   </view>
  </block> 
 </view>   
 <view class=" base13 bg-gradual-red    "> 
  <parser :html="content13" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   appmsg14 "> 
  <block v-for="(item, index) in msgs14"> 
   <view @tap="navigateTo" :style="item.backgroundColor" style="" data-field="msgs14" :data-index="index" :data-url="item.url" :class="item.directionType" class="weui-media-box weui-grid-50 weui-media-box_appmsg    weui-noborder"> 
    <view class="weui-media-box__hd weui-media-box__hd_in-appmsg"> 
     <block v-for="(img, index) in item.thumb_url"> 
      <image class="weui-media-box__thumb" :src="img" style="" /> 
     </block> 
    </view> 
    <view class="weui-media-box__bd weui-media-box__bd_in-appmsg"> 
     <view class="weui-media-box__title" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
    </view> 
   </view> 
  </block> 
 </view>   
 <view class=" base15 bg-gradual-red    "> 
  <parser :html="content15" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   appmsg16 "> 
  <block v-for="(item, index) in msgs16"> 
   <view @tap="navigateTo" :style="item.backgroundColor" style="" data-field="msgs16" :data-index="index" :data-url="item.url" :class="item.directionType" class="weui-media-box weui-grid-50 weui-media-box_appmsg    weui-noborder"> 
    <view class="weui-media-box__hd weui-media-box__hd_in-appmsg"> 
     <block v-for="(img, index) in item.thumb_url"> 
      <image class="weui-media-box__thumb" :src="img" style="" /> 
     </block> 
    </view> 
    <view class="weui-media-box__bd weui-media-box__bd_in-appmsg"> 
     <view class="weui-media-box__title" :style="item.color">
      <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
     </view> 
    </view> 
   </view> 
  </block> 
 </view>   
 <view class=" base17 bg-gradual-red    "> 
  <parser :html="content17" show-with-animation="" lazy-load=""></parser> 
 </view>   
 <view class="weui-grids   appmsg18 "> 
  <view class="weui-media-box weui-media-box_small-appmsg"> 
   <view class="weui-cells  weui-cells_after-title"> 
    <block v-for="(item, index) in msgs18"> 
     <view @tap="navigateTo" :data-url="item.url" data-field="msgs18" :data-index="index" class="weui-cell weui-cell_access weui-noborder" :style="item.backgroundColor" style=""> 
      <view class="weui-cell_small__hd"> 
       <block v-for="(img, index) in item.thumb_url"> 
        <image class="weui-cell_small__thumb" :src="img" style="" /> 
       </block> 
      </view> 
      <view class="weui-cell__bd weui-cell_primary"> 
       <view :style="item.color">
        <parser :html="item.title" show-with-animation="" lazy-load=""></parser>
       </view> 
      </view> 
      <view class="weui-cell__ft" :style="item.dcolor">
       <parser :html="item.desc" show-with-animation="" lazy-load=""></parser>
      </view> 
      <view class="weui-cell__ft weui-cell__ft_in-access"></view> 
     </view> 
    </block> 
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
	     content1:`默认图文`,
	     msgs2:[],
	     content3:`卡页图文`,
	     msgs4:[],
	     content5:`图片在右边`,
	     msgs6:[],
	     content7:`带背景图文`,
	     msgs8:[],
	     content9:`改图文为宫格展示`,
	     msgs10:[],
	     content11:`文字在上方图文`,
	     msgs12:[],
	     content13:`文字在右边宫格型图文`,
	     msgs14:[],
	     content15:`文字在左边宫格型图文`,
	     msgs16:[],
	     content17:`小图文`,
	     msgs18:[]
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
     this.getMsgs2(1);
     this.getText3();
     this.getMsgs4(1);
     this.getText5();
     this.getMsgs6(1);
     this.getText7();
     this.getMsgs8(1);
     this.getText9();
     this.getMsgs10(1);
     this.getText11();
     this.getMsgs12(1);
     this.getText13();
     this.getMsgs14(1);
     this.getText15();
     this.getMsgs16(1);
     this.getText17();
     this.getMsgs18(1);
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	getText1(){
	var that = this;
},
	getMsgs2(isShow){
	  //调用数据
	  var datas=[
		  {thumb_url:'/static/images/icon4.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`九宫格演示例子`},
		  {thumb_url:'/static/images/icon6.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('swiperok','index'),title:`滑块列表`,desc:`滑块列表演示列子`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('window','index'),title:`弹窗组件`,desc:`请输入内容描述`}
	  ];
	  var that = this;
	  datas.forEach((n, index) =>{
	         if(n.thumb_url.length>1){
	         	 n.directionType='direction-column-reverse auto';
	         }else if(n.directionType.indexOf("auto")>=0&&n.thumb_url.length==1){
          	 	n.directionType='row'
          	 }
	  });
	          
      this.setData({
          msgs2: datas
      });
},
	getText3(){
	var that = this;
},
	getMsgs4(isShow){
	  //调用数据
	  var datas=[
		  {thumb_url:'/static/images/icon4.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`九宫格演示例子`},
		  {thumb_url:'/static/images/icon6.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('swiperok','index'),title:`滑块列表`,desc:`滑块列表演示列子`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('window','index'),title:`弹窗组件`,desc:`请输入内容描述`}
	  ];
	  var that = this;
	  datas.forEach((n, index) =>{
	         if(n.thumb_url.length>1){
	         	 n.directionType='direction-column-reverse auto';
	         }else if(n.directionType.indexOf("auto")>=0&&n.thumb_url.length==1){
          	 	n.directionType='row'
          	 }
	  });
	          
      this.setData({
          msgs4: datas
      });
},
	getText5(){
	var that = this;
},
	getMsgs6(isShow){
	  //调用数据
	  var datas=[
		  {thumb_url:'/static/images/icon4.png'.split(","),directionType:'reverse',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`九宫格演示例子`},
		  {thumb_url:'/static/images/icon6.png'.split(","),directionType:'reverse',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('swiperok','index'),title:`滑块列表`,desc:`滑块列表演示列子`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'reverse',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('window','index'),title:`弹窗组件`,desc:`请输入内容描述`}
	  ];
	  var that = this;
	  datas.forEach((n, index) =>{
	         if(n.thumb_url.length>1){
	         	 n.directionType='direction-column-reverse auto';
	         }else if(n.directionType.indexOf("auto")>=0&&n.thumb_url.length==1){
          	 	n.directionType='row'
          	 }
	  });
	          
      this.setData({
          msgs6: datas
      });
},
	getText7(){
	var that = this;
},
	getMsgs8(isShow){
	  //调用数据
	  var datas=[
		  {thumb_url:'/static/images/icon4.png'.split(","),directionType:'',backgroundColor:'background:#0098d9;',color:'color:#ffffff;',dcolor:'color:#ffffff;',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`九宫格演示例子`},
		  {thumb_url:'/static/images/icon6.png'.split(","),directionType:'',backgroundColor:'background:#d0648a;',color:'color:#ffffff;',dcolor:'color:#ffffff;',url:Tools.renderUrl('swiperok','index'),title:`滑块列表`,desc:`滑块列表演示列子`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'',backgroundColor:'background:#ffb248;',color:'color:#ffffff;',dcolor:'color:#ffffff;',url:Tools.renderUrl('window','index'),title:`弹窗组件`,desc:`请输入内容描述`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'',backgroundColor:'background:#ffb248;',color:'color:#ffffff;',dcolor:'color:#ffffff;',url:Tools.renderUrl('tab','index'),title:`选项卡`,desc:`请输入内容描述`}
	  ];
	  var that = this;
	  datas.forEach((n, index) =>{
	         if(n.thumb_url.length>1){
	         	 n.directionType='direction-column-reverse auto';
	         }else if(n.directionType.indexOf("auto")>=0&&n.thumb_url.length==1){
          	 	n.directionType='row'
          	 }
	  });
	          
      this.setData({
          msgs8: datas
      });
},
	getText9(){
	var that = this;
},
	getMsgs10(isShow){
	  //调用数据
	  var datas=[
		  {thumb_url:'/static/images/icon4.png'.split(","),directionType:'direction-column',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`九宫格演示例子`},
		  {thumb_url:'/static/images/icon6.png'.split(","),directionType:'direction-column',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('swiperok','index'),title:`滑块列表`,desc:`滑块列表演示列子`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'direction-column',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('window','index'),title:`弹窗组件`,desc:`请输入内容描述`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'direction-column',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('tab','index'),title:`选项卡`,desc:`请输入内容描述`}
	  ];
	  var that = this;
	  datas.forEach((n, index) =>{
	         if(n.thumb_url.length>1){
	         	 n.directionType='direction-column-reverse auto';
	         }else if(n.directionType.indexOf("auto")>=0&&n.thumb_url.length==1){
          	 	n.directionType='row'
          	 }
	  });
	          
      this.setData({
          msgs10: datas
      });
},
	getText11(){
	var that = this;
},
	getMsgs12(isShow){
	  //调用数据
	  var datas=[
		  {thumb_url:'/static/images/icon4.png'.split(","),directionType:'direction-column-reverse',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`九宫格演示例子`},
		  {thumb_url:'/static/images/icon6.png'.split(","),directionType:'direction-column-reverse',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('swiperok','index'),title:`滑块列表`,desc:`滑块列表演示列子`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'direction-column-reverse',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('window','index'),title:`弹窗组件`,desc:`请输入内容描述`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'direction-column-reverse',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('tab','index'),title:`选项卡`,desc:`请输入内容描述`}
	  ];
	  var that = this;
	  datas.forEach((n, index) =>{
	         if(n.thumb_url.length>1){
	         	 n.directionType='direction-column-reverse auto';
	         }else if(n.directionType.indexOf("auto")>=0&&n.thumb_url.length==1){
          	 	n.directionType='row'
          	 }
	  });
	          
      this.setData({
          msgs12: datas
      });
},
	getText13(){
	var that = this;
},
	getMsgs14(isShow){
	  //调用数据
	  var datas=[
		  {thumb_url:'/static/images/icon4.png'.split(","),directionType:'reverse',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`九宫格演示例子`},
		  {thumb_url:'/static/images/icon6.png'.split(","),directionType:'reverse',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('swiperok','index'),title:`滑块列表`,desc:`滑块列表演示列子`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'reverse',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('window','index'),title:`弹窗组件`,desc:`请输入内容描述`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'reverse',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('tab','index'),title:`选项卡`,desc:`请输入内容描述`}
	  ];
	  var that = this;
	  datas.forEach((n, index) =>{
	         if(n.thumb_url.length>1){
	         	 n.directionType='direction-column-reverse auto';
	         }else if(n.directionType.indexOf("auto")>=0&&n.thumb_url.length==1){
          	 	n.directionType='row'
          	 }
	  });
	          
      this.setData({
          msgs14: datas
      });
},
	getText15(){
	var that = this;
},
	getMsgs16(isShow){
	  //调用数据
	  var datas=[
		  {thumb_url:'/static/images/icon4.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`九宫格演示例子`},
		  {thumb_url:'/static/images/icon6.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('swiperok','index'),title:`滑块列表`,desc:`滑块列表演示列子`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('window','index'),title:`弹窗组件`,desc:`请输入内容描述`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('tab','index'),title:`选项卡`,desc:`请输入内容描述`}
	  ];
	  var that = this;
	  datas.forEach((n, index) =>{
	         if(n.thumb_url.length>1){
	         	 n.directionType='direction-column-reverse auto';
	         }else if(n.directionType.indexOf("auto")>=0&&n.thumb_url.length==1){
          	 	n.directionType='row'
          	 }
	  });
	          
      this.setData({
          msgs16: datas
      });
},
	getText17(){
	var that = this;
},
	getMsgs18(isShow){
	  //调用数据
	  var datas=[
		  {thumb_url:'/static/images/icon4.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('grid','index'),title:`九宫格`,desc:`九宫格演示例子`},
		  {thumb_url:'/static/images/icon6.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('swiperok','index'),title:`滑块列表`,desc:`滑块列表演示列子`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('window','index'),title:`弹窗组件`,desc:`请输入内容描述`},
		  {thumb_url:'/static/images/icon1.png'.split(","),directionType:'',backgroundColor:'',color:'',dcolor:'',url:Tools.renderUrl('tab','index'),title:`选项卡`,desc:`请输入内容描述`}
	  ];
	  var that = this;
	  datas.forEach((n, index) =>{
	         if(n.thumb_url.length>1){
	         	 n.directionType='direction-column-reverse auto';
	         }else if(n.directionType.indexOf("auto")>=0&&n.thumb_url.length==1){
          	 	n.directionType='row'
          	 }
	  });
	          
      this.setData({
          msgs18: datas
      });
}
}
}
</script>

<style>
.base1{padding: 5px 0px 5px 5px; font-weight: bold;}.appmsg2{}.base3{padding: 5px 0px 5px 5px; font-weight: bold;}.appmsg4{margin-bottom: 10px;}.base5{padding: 5px 0px 5px 5px; font-weight: bold;}.appmsg6{}.base7{padding: 5px 0px 5px 5px; font-weight: bold;}.appmsg8{}.base9{padding: 5px 0px 5px 5px; font-weight: bold;}.appmsg10{}.base11{padding: 5px 0px 5px 5px; font-weight: bold;}.appmsg12{}.base13{padding: 5px 0px 5px 5px; font-weight: bold;}.appmsg14{}.base15{padding: 5px 0px 5px 5px; font-weight: bold;}.appmsg16{}.base17{padding: 5px 0px 5px 5px; font-weight: bold;}.appmsg18{}
</style>


