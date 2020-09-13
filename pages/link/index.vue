<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup>   
 <form class="form1 row-form" @submit="formSubmit1" @reset="formReset1"> 
  <view class="weui-form weui-cell"> 
   <view class="weui-form-item"> 
    <input class="weui-form-input" placeholder="请输入您的名字" name="name_908424" :value="name_908424" /> 
   </view> 
  </view>  
  <view class="weui-form weui-cell"> 
   <view class="weui-form-item"> 
    <input class="weui-form-input" placeholder="请输入您的电话" name="name_57162" :value="name_57162" /> 
   </view> 
  </view>  
  <view class="weui-form weui-cell"> 
   <view class="weui-form-item"> 
    <textarea class="weui-form-area" placeholder="请输入你的意见" name="name_727078">{{name_727078}}</textarea> 
   </view> 
  </view>   
  <view class="weui-form button2"> 
   <view class="weui-form-item"> 
    <view class="weui_btn_area weui_btn_area_inline"> 
     <button type="warn" data-field="buttons2" data-index="0" form-type="reset" class="weui-btn weui-btn_warn  ">重置</button> 
     <button type="primary" data-field="buttons2" data-index="1" form-type="submit" class="weui-btn weui-btn_primary  ">提交</button> 
    </view> 
   </view> 
  </view>  
  <view hidden="true"> 
   <input value="789755" name="formid" /> 
   <input value="17262" name="dashboardid" /> 
   <input value="table_789755" name="tableName" /> 
  </view> 
 </form>  
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
	     name_908424:'',
	     name_57162:'',
	     name_727078:'',
	     buttons2:[
				{type:'reset',url:Tools.renderUrl('empty','index'),title:``},

				{type:'submit',url:Tools.renderUrl('empty','index'),title:``}
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
     this.getForm1();
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	getForm1(){
   this.WxValidate = WxValidate({
	name_908424: {
		required:{
			message:'姓名不能为空哟'
		}
	},
	name_57162: {
		tel:{
			message:'电话请输入11位的手机号码'
		}
	},
	name_727078: {
		notEmpty:{
			message:'意见不能为空哟'
		}
	}
})
;
   if(this.globalOption && this.globalOption.id){
	   //调用数据
	   let param = {
	      formid:'789755',
	      dashboardid:'17262',
	      tableName:'table_789755'	   };
	   param =Tools.extend(param,this.globalOption);
	   //调用数据
	   HttpService.getData(param).then(data=>{
	        if(data.status == 'success'){
	        	var row = data.rows[0];
	        	var values = {};
	        	for (let key in row) {
	        		 var keyr = key.replace(new RegExp("-", "gm"), "");
					 if(this["change"+keyr]){
					 	this["change"+keyr](row[key]);
					 }else{
					 	values[key] = row[key];	
					 }
				}
				this.setData(values);
	        }else{
	           this.showModal(data.message);
	        }
	   });
   }
},
formSubmit1: function (e) {
	if (!this.WxValidate.checkForm(e)) {
		const error = this.WxValidate.errorList[0]
		var msg = `${error.msg}`;
    	this.showDiygwToast(msg);
		return false
	}else{
	    HttpService.saveData(e.detail.value).then(data => {
	      if (data.status == 'success') {
	        uni.showToast({
	          title: data.message,
	          icon: 'success',
	          duration: 1500,
	        });
	      }else{
	        this.showModal(data.message);
	      }
	    }); 
	  }
},
formReset1: function() {
    console.log('form发生了reset事件')
}
}
}
</script>

<style>
.form1{}.button2{}
</style>


