<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup>   
 <form class="form1 row-form" @submit="formSubmit1" @reset="formReset1">   
  <view class=" base2 bg-gradual-red    "> 
   <parser :html="content2" show-with-animation="" lazy-load=""></parser> 
  </view> 
  <view class="weui-form weui-cells__title ">
   单选列表
  </view> 
  <view class="weui-form weui-cell"> 
   <radio-group class="weui-form-item" @change="changename_990338" name="name_990338"> 
    <label v-for="(item, index) in radioItems3" class=""> 
     <radio :value="item.value" :checked="item.checked" class="weui-form-checkbox" /> 
     <view class="weui-form-label"> 
      <icon class="weui-icon-radio checked" v-if="item.checked"></icon> 
      <icon class="weui-icon-radio" v-if="!item.checked"></icon> 
      <view class="weui-form-text">
       {{item.label}}
      </view> 
     </view> </label> 
   </radio-group> 
  </view>    
  <view class=" base4 bg-gradual-red    "> 
   <parser :html="content4" show-with-animation="" lazy-load=""></parser> 
  </view> 
  <view class="weui-form weui-cells__title ">
   单选列表
  </view> 
  <view class="weui-form weui-cell"> 
   <radio-group class="weui-form-item" @change="changename_462945" name="name_462945"> 
    <label v-for="(item, index) in radioItems5" class=""> 
     <radio :value="item.value" :checked="item.checked" class="weui-form-checkbox" /> 
     <view class="weui-form-label"> 
      <icon class="weui-icon-radio checked" v-if="item.checked"></icon> 
      <icon class="weui-icon-radio" v-if="!item.checked"></icon> 
      <view class="weui-form-text">
       {{item.label}}
      </view> 
     </view> </label> 
   </radio-group> 
  </view>    
  <view class=" base6 bg-gradual-red    "> 
   <parser :html="content6" show-with-animation="" lazy-load=""></parser> 
  </view> 
  <view class="weui-form weui-cells__title ">
   单选列表
  </view> 
  <view class="weui-form weui-cell"> 
   <radio-group class="weui-form-item" @change="changename_531964" name="name_531964"> 
    <label v-for="(item, index) in radioItems7" class="iblock"> 
     <radio :value="item.value" :checked="item.checked" class="weui-form-checkbox" /> 
     <view class="weui-form-label"> 
      <icon class="weui-icon-radio checked" v-if="item.checked"></icon> 
      <icon class="weui-icon-radio" v-if="!item.checked"></icon> 
      <view class="weui-form-text">
       {{item.label}}
      </view> 
     </view> </label> 
   </radio-group> 
  </view>  
  <view class="weui-form weui-cells__title ">
   单选列表
  </view> 
  <view class="weui-cells weui-cells_after-title  weui-noborder"> 
   <radio-group @change="changename_249436" name="name_249436"> 
    <label class="weui-cell weui-check__label  weui-noborder" v-for="(item, index) in radioItems8" :key="item.value"> 
     <radio class="weui-check" :value="item.value" :checked="item.checked" /> 
     <view class="weui-cell__bd">
      {{item.label}}
     </view> 
     <view class="weui-cell__ft weui-cell__ft_in-radio" v-if="item.checked"> 
      <icon class="weui-icon-radio" type="success_no_circle" size="16"></icon> 
     </view> </label> 
   </radio-group> 
  </view>    
  <view class=" base9 bg-gradual-red    "> 
   <parser :html="content9" show-with-animation="" lazy-load=""></parser> 
  </view> 
  <view class="weui-form weui-cells__title ">
   多选列表
  </view> 
  <view class="weui-form"> 
   <checkbox-group class="weui-form-item" @change="changename_335146" name="name_335146"> 
    <label v-for="(item, index) in checkboxItems10" class=""> 
     <checkbox :value="item.value" :checked="item.checked" class="weui-form-checkbox" /> 
     <view class="weui-form-label"> 
      <icon class="weui-icon-checkbox checked" v-if="item.checked"></icon> 
      <icon class="weui-icon-checkbox" v-if="!item.checked"></icon> 
      <view class="weui-form-text">
       {{item.label}}
      </view> 
     </view> </label> 
   </checkbox-group> 
  </view>    
  <view class=" base11 bg-gradual-red    "> 
   <parser :html="content11" show-with-animation="" lazy-load=""></parser> 
  </view> 
  <view class="weui-form weui-cells__title ">
   多选列表
  </view> 
  <view class="weui-form"> 
   <checkbox-group class="weui-form-item" @change="changename_991863" name="name_991863"> 
    <label v-for="(item, index) in checkboxItems12" class=""> 
     <checkbox :value="item.value" :checked="item.checked" class="weui-form-checkbox" /> 
     <view class="weui-form-label"> 
      <icon class="weui-icon-checkbox checked" v-if="item.checked"></icon> 
      <icon class="weui-icon-checkbox" v-if="!item.checked"></icon> 
      <view class="weui-form-text">
       {{item.label}}
      </view> 
     </view> </label> 
   </checkbox-group> 
  </view>    
  <view class=" base13 bg-gradual-red    "> 
   <parser :html="content13" show-with-animation="" lazy-load=""></parser> 
  </view> 
  <view class="weui-form weui-cells__title ">
   多选列表
  </view> 
  <view class="weui-form"> 
   <checkbox-group class="weui-form-item" @change="changename_340033" name="name_340033"> 
    <label v-for="(item, index) in checkboxItems14" class="iblock"> 
     <checkbox :value="item.value" :checked="item.checked" class="weui-form-checkbox" /> 
     <view class="weui-form-label"> 
      <icon class="weui-icon-checkbox checked" v-if="item.checked"></icon> 
      <icon class="weui-icon-checkbox" v-if="!item.checked"></icon> 
      <view class="weui-form-text">
       {{item.label}}
      </view> 
     </view> </label> 
   </checkbox-group> 
  </view>  
  <view class="weui-form weui-cells__title ">
   多选列表
  </view> 
  <view class="weui-cells weui-cells_after-title weui-noborder"> 
   <checkbox-group @change="changename_704993" name="name_704993"> 
    <label class="weui-cell weui-check__label weui-noborder" v-for="(item, index) in checkboxItems15" :key="item.value"> 
     <checkbox class="weui-check" :value="item.value" :checked="item.checked" /> 
     <view class="weui-cell__hd weui-check__hd_in-checkbox"> 
      <icon class="weui-icon-checkbox_circle" type="circle" size="23" v-if="!item.checked"></icon> 
      <icon class="weui-icon-checkbox_success" type="success" size="23" v-if="item.checked"></icon> 
     </view> 
     <view class="weui-cell__bd">
      {{item.label}}
     </view> </label> 
   </checkbox-group> 
  </view>  
  <view hidden="true"> 
   <input value="793358" name="formid" /> 
   <input value="17262" name="dashboardid" /> 
   <input value="table_793358" name="tableName" /> 
  </view> 
 </form>   
 <view class="weui-form button16"> 
  <view class="weui-form-item"> 
   <button type="primary" data-field="buttons16" data-index="0" @tap="navigateTo" data-url="indexx" class="weui-btn weui-btn_primary  ">首页</button> 
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
	     content2:`默认单选`,
	     radioItems3:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     content4:`更改单选样式`,
	     radioItems5:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     content6:`单选并排`,
	     radioItems7:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     radioItems8:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     content9:`默认多选`,
	     checkboxItems10:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     content11:`更改多选选中颜色 `,
	     checkboxItems12:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     content13:`多选并排`,
	     checkboxItems14:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     checkboxItems15:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     buttons16:[
				{type:'button',url:Tools.renderUrl('indexx','index'),title:``}
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
     this.getText2();
     this.getText4();
     this.getText6();
     this.getText9();
     this.getText11();
     this.getText13();
},
methods:{
	setData, navigateTo,showDiygwToast,hideDiygwToast,closeDiygwWindow,showDiygwWindow,showModal,
	getForm1(){
   this.WxValidate = WxValidate({
})
;
   if(this.globalOption && this.globalOption.id){
	   //调用数据
	   let param = {
	      formid:'793358',
	      dashboardid:'17262',
	      tableName:'table_793358'	   };
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
},
	getText2(){
	var that = this;
},
	changename_990338: function (value) {
	if(value.detail){
		value = value.detail.value
	}
    var radioItems3 = this.radioItems3;
    for (var i = 0, len = radioItems3.length; i < len; ++i) {
        radioItems3[i].checked = radioItems3[i].value == value;
    }
    this.setData({
        radioItems3: radioItems3
    });
},
	getText4(){
	var that = this;
},
	changename_462945: function (value) {
	if(value.detail){
		value = value.detail.value
	}
    var radioItems5 = this.radioItems5;
    for (var i = 0, len = radioItems5.length; i < len; ++i) {
        radioItems5[i].checked = radioItems5[i].value == value;
    }
    this.setData({
        radioItems5: radioItems5
    });
},
	getText6(){
	var that = this;
},
	changename_531964: function (value) {
	if(value.detail){
		value = value.detail.value
	}
    var radioItems7 = this.radioItems7;
    for (var i = 0, len = radioItems7.length; i < len; ++i) {
        radioItems7[i].checked = radioItems7[i].value == value;
    }
    this.setData({
        radioItems7: radioItems7
    });
},
	changename_249436: function (value) {
	if(value.detail){
		value = value.detail.value
	}
    var radioItems8 = this.radioItems8;
    for (var i = 0, len = radioItems8.length; i < len; ++i) {
        radioItems8[i].checked = radioItems8[i].value == value;
    }
    this.setData({
        radioItems8: radioItems8
    });
},
	getText9(){
	var that = this;
},
	changename_335146: function (values) {
	if(values.detail){
		values = values.detail.value
	}else if(Tools.isString(values)){
		values = values.split(",")
	}
    var checkboxItems10 = this.checkboxItems10;
    for (var i = 0, lenI = checkboxItems10.length; i < lenI; ++i) {
        checkboxItems10[i].checked = false;
        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
            if(checkboxItems10[i].value == values[j]){
                checkboxItems10[i].checked = true;
                break;
            }
        }
    }
    this.setData({
        checkboxItems10: checkboxItems10
    });
},
	getText11(){
	var that = this;
},
	changename_991863: function (values) {
	if(values.detail){
		values = values.detail.value
	}else if(Tools.isString(values)){
		values = values.split(",")
	}
    var checkboxItems12 = this.checkboxItems12;
    for (var i = 0, lenI = checkboxItems12.length; i < lenI; ++i) {
        checkboxItems12[i].checked = false;
        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
            if(checkboxItems12[i].value == values[j]){
                checkboxItems12[i].checked = true;
                break;
            }
        }
    }
    this.setData({
        checkboxItems12: checkboxItems12
    });
},
	getText13(){
	var that = this;
},
	changename_340033: function (values) {
	if(values.detail){
		values = values.detail.value
	}else if(Tools.isString(values)){
		values = values.split(",")
	}
    var checkboxItems14 = this.checkboxItems14;
    for (var i = 0, lenI = checkboxItems14.length; i < lenI; ++i) {
        checkboxItems14[i].checked = false;
        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
            if(checkboxItems14[i].value == values[j]){
                checkboxItems14[i].checked = true;
                break;
            }
        }
    }
    this.setData({
        checkboxItems14: checkboxItems14
    });
},
	changename_704993: function (values) {
	if(values.detail){
		values = values.detail.value
	}else if(Tools.isString(values)){
		values = values.split(",")
	}
    var checkboxItems15 = this.checkboxItems15;
    for (var i = 0, lenI = checkboxItems15.length; i < lenI; ++i) {
        checkboxItems15[i].checked = false;
        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
            if(checkboxItems15[i].value == values[j]){
                checkboxItems15[i].checked = true;
                break;
            }
        }
    }
    this.setData({
        checkboxItems15: checkboxItems15
    });
}
}
}
</script>

<style>
.form1{}.base2{padding: 5px 0px 5px 5px; font-weight: bold;}.base4{padding: 5px 0px 5px 5px; font-weight: bold;}.base6{padding: 5px 0px 5px 5px; font-weight: bold;}.base9{padding: 5px 0px 5px 5px; font-weight: bold;}.base11{padding: 5px 0px 5px 5px; font-weight: bold;}.base13{padding: 5px 0px 5px 5px; font-weight: bold;}.button16{}
</style>


