<template>
	 <view class="container"> 
 <uni-popup :show="showpopup" :type="showtype" @change="hideDiygwToast">
  <text class="popup-content">
   {{ showcontent }}
  </text>
 </uni-popup>   
 <form class="form1 row-form" @submit="formSubmit1" @reset="formReset1"> 
  <view class="weui-cell "> 
   <view class="weui-cell__hd"> 
    <view class="weui-label">
     字段标题
    </view> 
   </view> 
   <view class="weui-cell__bd"> 
    <input class="weui-input" placeholder="请输入字段预期提示信息" name="name_630245" :value="name_630245" /> 
   </view> 
  </view>  
  <view class="weui-cell"> 
   <view class="weui-cell__hd"> 
    <view class="weui-label">
     字段标题
    </view> 
   </view> 
   <view class="weui-cell__bd"> 
    <textarea class="weui-textarea" placeholder="请输入字段预期提示信息" name="name_816180">{{name_816180}}</textarea> 
   </view> 
  </view>  
  <view class="weui-cell "> 
   <view class="weui-cell__hd"> 
    <view class="weui-label">
     选择日期
    </view> 
   </view> 
   <view class="weui-cell__bd"> 
    <picker mode="date" :value="date2" start="1900-01-01" end="2050-01-01" @change="bindDateChange2"> 
     <view class="weui-input">
      {{date2}}
     </view> 
    </picker> 
   </view> 
  </view>  
  <view class="weui-cell "> 
   <view class="weui-cell__hd"> 
    <view class="weui-label">
     选择时分
    </view> 
   </view> 
   <view class="weui-cell__bd"> 
    <picker mode="time" :value="time3" @change="bindTimeChange3"> 
     <view class="weui-input">
      {{time3}}
     </view> 
    </picker> 
   </view> 
  </view>  
  <view class="weui-cell weui-cell_switch"> 
   <view class="weui-cell__bd  ">
    开关选择
   </view> 
   <view class="weui-cell__ft"> 
    <view class="weui-switch " :class="swicthclz4" :data-checked="switchchecked4" @tap="changename_832089"> 
     <checkbox name="name_832089" :checked="switchchecked4" hidden="true" /> 
     <view class="weui-switch__node"></view> 
    </view> 
   </view> 
  </view>  
  <view class="weui-form weui-cells__title ">
   单选列表
  </view> 
  <view class="weui-form weui-cell"> 
   <radio-group class="weui-form-item" @change="changename_837997" name="name_837997"> 
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
  <view class="weui-form weui-cells__title ">
   单选列表
  </view> 
  <view class="weui-form weui-cell"> 
   <radio-group class="weui-form-item" @change="changename_78994" name="name_78994"> 
    <label v-for="(item, index) in radioItems6" class="iblock"> 
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
   <radio-group @change="changename_859241" name="name_859241"> 
    <label class="weui-cell weui-check__label  weui-noborder" v-for="(item, index) in radioItems7" :key="item.value"> 
     <radio class="weui-check" :value="item.value" :checked="item.checked" /> 
     <view class="weui-cell__bd">
      {{item.label}}
     </view> 
     <view class="weui-cell__ft weui-cell__ft_in-radio" v-if="item.checked"> 
      <icon class="weui-icon-radio" type="success_no_circle" size="16"></icon> 
     </view> </label> 
   </radio-group> 
  </view>  
  <view class="weui-form weui-cells__title ">
   多选列表
  </view> 
  <view class="weui-form"> 
   <checkbox-group class="weui-form-item" @change="changename_96" name="name_96"> 
    <label v-for="(item, index) in checkboxItems8" class=""> 
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
  <view class="weui-form"> 
   <checkbox-group class="weui-form-item" @change="changename_912536" name="name_912536"> 
    <label v-for="(item, index) in checkboxItems9" class="iblock"> 
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
   <checkbox-group @change="changename_671892" name="name_671892"> 
    <label class="weui-cell weui-check__label weui-noborder" v-for="(item, index) in checkboxItems10" :key="item.value"> 
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
  <view class="weui-form weui-cells__title ">
   上传组件
  </view> 
  <view class="weui-uploader"> 
   <view class="weui-uploader__bd"> 
    <view class="weui-uploader__files" id="uploaderFiles11"> 
     <block v-for="(item, index) in files11"> 
      <view class="weui-uploader__file" @tap="previewImage11" :id="item"> 
       <image class="weui-uploader__img" :src="item" mode="aspectFill" /> 
      </view> 
     </block> 
    </view> 
    <view class="weui-uploader__input-box"> 
     <view class="weui-uploader__input" @tap="chooseImage11"></view> 
    </view> 
    <view class="hidden"> 
     <input :value="filestr11" name="name_488211" maxlength="-1" /> 
    </view> 
   </view> 
  </view>  
  <view class="weui-cell"> 
   <view class="weui-cell__hd"> 
    <view class="weui-label">
     弹出选项
    </view> 
   </view> 
   <view class="weui-cell__bd"> 
    <picker @change="selectChange12" :value="valueIndex12" :range="selectItems12"> 
     <view class="weui-select weui-select_in-select-after">
      {{selectItems12[valueIndex12]}}
     </view> 
    </picker> 
    <view hidden="true"> 
     <input name="name_318089" :value="name_318089" type="text" /> 
    </view> 
   </view> 
  </view>   
  <view class="weui-form button13"> 
   <view class="weui-form-item"> 
    <view class="weui_btn_area weui_btn_area_inline"> 
     <button type="primary" data-field="buttons13" data-index="0" form-type="submit" @tap="navigateTo" data-url="indexx" class="weui-btn weui-btn_primary  ">提交</button> 
     <button type="warn" data-field="buttons13" data-index="1" @tap="navigateTo" data-url="indexx" class="weui-btn weui-btn_warn  ">重置</button> 
    </view> 
   </view> 
  </view>  
  <view hidden="true"> 
   <input value="630550" name="formid" /> 
   <input value="17262" name="dashboardid" /> 
   <input value="table_630550" name="tableName" /> 
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
	     name_630245:'',
	     name_816180:'',
	     date2: Tools.getCurrentDate(),
	     time3: Tools.getCurrentTime(),
	     swicthclz4:'weui-switch-checked',
switchchecked4:true,
	     radioItems5:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     radioItems6:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     radioItems7:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     checkboxItems8:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     checkboxItems9:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     checkboxItems10:[{"checked":true,"label":"选项一","value":"1"},{"checked":false,"label":"选项二","value":"2"},{"checked":false,"label":"选项三","value":"3"}],
	     files11: [],
filestr11:'',
	     name_318089:'1',
selectIds12:['1','2','3'],
selectItems12:['选项一','选项二','选项三'],
	valueIndex12:0,
	     buttons13:[
				{type:'submit',url:Tools.renderUrl('indexx','index'),title:``},

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
	      formid:'630550',
	      dashboardid:'17262',
	      tableName:'table_630550'	   };
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
	bindDateChange:function (e) {
    this.setData({
        date2: e.detail.value
	});
},
	bindTimeChange3:function (e) {
    this.setData({
        time3: e.detail.value
    })
},
	changename_832089: function (e) {
	var checked = !e.currentTarget.dataset.checked;
    this.setData({
      swicthclz4: checked ?"weui-switch-checked":"",
      switchchecked4: checked
    }); 
},
	changename_837997: function (value) {
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
	changename_78994: function (value) {
	if(value.detail){
		value = value.detail.value
	}
    var radioItems6 = this.radioItems6;
    for (var i = 0, len = radioItems6.length; i < len; ++i) {
        radioItems6[i].checked = radioItems6[i].value == value;
    }
    this.setData({
        radioItems6: radioItems6
    });
},
	changename_859241: function (value) {
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
	changename_96: function (values) {
	if(values.detail){
		values = values.detail.value
	}else if(Tools.isString(values)){
		values = values.split(",")
	}
    var checkboxItems8 = this.checkboxItems8;
    for (var i = 0, lenI = checkboxItems8.length; i < lenI; ++i) {
        checkboxItems8[i].checked = false;
        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
            if(checkboxItems8[i].value == values[j]){
                checkboxItems8[i].checked = true;
                break;
            }
        }
    }
    this.setData({
        checkboxItems8: checkboxItems8
    });
},
	changename_912536: function (values) {
	if(values.detail){
		values = values.detail.value
	}else if(Tools.isString(values)){
		values = values.split(",")
	}
    var checkboxItems9 = this.checkboxItems9;
    for (var i = 0, lenI = checkboxItems9.length; i < lenI; ++i) {
        checkboxItems9[i].checked = false;
        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
            if(checkboxItems9[i].value == values[j]){
                checkboxItems9[i].checked = true;
                break;
            }
        }
    }
    this.setData({
        checkboxItems9: checkboxItems9
    });
},
	changename_671892: function (values) {
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
	changename_488211: function (values) {
	if(values.detail){
		values = values.detail.value;
	}else if(Tools.isString(values)){
		values = values.split(",");
	}
	var files=[];
	for(var i=0;i<values.length;i++){
		files[i]=Tools.renderImage(values[i])
	}
	this.setData({
       files11: files,
       filestr11:(files|| []).join(',').replace(/^[]/, '')
    });
},
chooseImage11: function (e) {
    var that = this;
    uni.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              var tempFilePaths = res.tempFilePaths;
	          for (var i = 0; i < tempFilePaths.length; i++) {
	            uni.uploadFile({
	              url: HttpService.setUrl('/data/file.html'), //仅为示例，非真实的接口地址  
	              filePath: tempFilePaths[0],
	              name: 'file',
	              success: function (res) {
	                var data = Tools.fromJson(res.data);
	                var url = Tools.renderImage(data.url);
	                var files  = that.files11.concat(url);
	                that.setData({
	                   files11: files,
	                   filestr11:(files|| []).join(',').replace(/^[]/, '')
			        });
	              }
	            })  
	          }
        }
    })
},
previewImage11: function(e){
    wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.files11 // 需要预览的图片http链接列表
    })
},
	selectChange12: function (e) {
   this.setData({
   		name_318089:this.data.selectIds12[this.data.valueIndex12],
        valueIndex12: e.detail.value
   });
}
}
}
</script>

<style>
.form1{}.button13{}
</style>


