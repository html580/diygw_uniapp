<template>
	 
</template>

<script>
//create by: 邓志锋 <280160522@qq.com> <http://www.diygw.com>
export default {
	data(){
		return {
			logged: !1,
	    	logo:'http://lib.diygw.com/static/img/favicon.png',
	    	title: App.Config.title
		},
	},
    onLoad(option) {
	    if (option){
	      this.setData({
	         globalOption: option
	      })
	    }
    	this.setData({    	
            logo: Tools.renderImage("/static/diygw/assests/images/favicon.png")
        });
    },
    onShow() {
    	const openId = Session.getOpenId()
    	this.setData({
    		logged: !!openId
    	})
    	if (openId || !this.globalOption.login) {
        	setTimeout(this.goIndex, 1500);
      	}
    },
    login() {
        this.wechatDecryptData(this.goIndex)
    },
    methods:{
	    goIndex() {
	    	if (Session.getRedirecturl()){
	          var redirecturl = Session.getRedirecturl();
	          Session.setRedirecturl(null);
	          Tools.navigateTo(redirecturl);
	          return;
	      	}
	    	if(App.globalData.tabBar.length>0){
	        	Tools.navigateTo(App.globalData.tabBar[0]);
	        }else if(App.globalData.pages.length>0){
	        	Tools.navigateTo(App.globalData.pages[0]);
	        }else{
	            uni.showModal({
			    	title: '友情提示',
			    	content: '您还没有设计页面哟，请前往DIY官网(http://www.diygw.com)进行设计',
			    	showCancel: !1,
			   });
	        }
	    }
    },
	showModal() {
		uni.showModal({
            title: '友情提示', 
            content: '获取用户登录状态失败，请重新登录', 
            showCancel: !1, 
        })
	},
    wechatDecryptData(cb) {
        var thiz= this;
		let code;
		App.WxService.login()
		.then(data => {
			console.log('wechatDecryptData', data.code)
			code = data.code
			return App.WxService.getUserInfo()
		})
		.then(data => {
			return HttpService.wechatDecryptData({
				dashboardId:'17262',
				encryptedData: data.encryptedData, 
				iv: data.iv, 
				rawData: data.rawData, 
				signature: data.signature, 
				code: code, 
				loadmsg:'登录中',
        		debug: App.Config.debug?"1":"0"
			})
		})
		.then(data => {
        if (data.code == 0) {
        	Session.setUser(data)
          cb();
        } else{
          thiz.showModal()
        }
		})
	},
	wechatSignIn(cb) {
		if (Session.getOpenId()) return
		App.WxService.login()
		.then(data => {
			console.log('wechatSignIn', data.code)
			return HttpService.wechatSignIn({
				code: data.code
			})
		})
		.then(data => {
			console.log('wechatSignIn', data)
			if (data.meta.code == 0) {
				App.WxService.setStorageSync('openId', data.data.openId)
				cb()
			} else if(data.meta.code == 40029) {
				App.showModal()
			} else {
				App.wechatSignUp(cb)
			}
		})
	},
	wechatSignUp(cb) {
		App.WxService.login()
		.then(data => {
			console.log('wechatSignUp', data.code)
			return HttpService.wechatSignUp({
				code: data.code
			})
		})
		.then(data => {
			console.log('wechatSignUp', data)
			if (data.meta.code == 0) {
				App.WxService.setStorageSync('openId', data.data.openId)
				cb()
			} else if(data.meta.code == 40029) {
				App.showModal()
			}
		})
	},
	signIn(cb) {
		if (Session.getOpenId()) return
		HttpService.signIn({
			username: 'admin', 
			password: '123456', 
		})
		.then(data => {
			console.log(data)
			if (data.meta.code == 0) {
				App.WxService.setStorageSync('openId', data.data.openId)
				cb()
			}
		})
	},
})