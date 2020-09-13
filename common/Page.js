import Tools from './Tools'
import Session from './Session'
import HttpService from './HttpService'
import WxValidate from './WxValidate'

module.exports = {
	    Session: Session,
	    Tools : new Tools,
	    HttpService : new HttpService,
		WxValidate:(rules, messages) => new WxValidate(rules, messages),
		setData(dataset) {
			for (let key in dataset) {
				this[key] = dataset[key]
			}
		},
		navigateTo(e) {
			if (e.currentTarget.dataset.url.indexOf("__weui-popup") > 0) {
				let url = e.currentTarget.dataset.url;
				let windowid = url.substring(0, url.indexOf("__weui-popup"));
				let effects = this.data['windoweffects' + url.substring(0, url.indexOf("__weui-popup"))];
				this.showDiygwWindow(windowid, 0, effects);
			} else if (e.currentTarget.dataset.url == '/pages/actions/index' || e.currentTarget.dataset.url == 'actions') {
				let dataset = e.currentTarget.dataset;
				var item = this.data[dataset.field][dataset.index]['menu'];
				item.effectType = 'In';
				item.isMenu = true;
				if (item.title) {
					if (!item.title.nodes) {
						App.WxParse.wxParse('actionsTitle', 'html', item.title, this, 5);
						item.title = this.data['actionsTitle'];
					}
					item.title = this.data['actionsTitle'];
				} else {
					item.title = ""
				}
				if (item.menuPosition == "Up" || item.menuPosition == "Down") {
					item.menuWidth = "100%"
				}

				this.setData({
					actionitem: item
				})
			} else if (e.currentTarget.dataset.url == 'closetoasts') {
				let menuPosition = this.data.toastitem.menuPosition;
				let menuDefaultPosition = menuPosition;
				if (menuPosition == 'Down') {
					menuPosition = 'Up';
				} else if (menuPosition == 'Up') {
					menuPosition = 'Down';
				}
				this.setData({
					'toastitem.effectType': 'Out',
					'toastitem.menuDefaultPosition': menuDefaultPosition,
					'toastitem.menuPosition': menuPosition
				})
				var that = this;
				setTimeout(function() {
					that.setData({
						'toastitem.isToast': false
					});
				}.bind(this), 1000);
			} else if (e.currentTarget.dataset.url == 'closeactions') {
				let menuPosition = this.data.actionitem.menuPosition;
				let menuDefaultPosition = menuPosition;
				if (menuPosition == 'Down') {
					menuPosition = 'Up';
				} else if (menuPosition == 'Up') {
					menuPosition = 'Down';
				}
				this.setData({
					'actionitem.effectType': 'Out',
					'actionitem.menuDefaultPosition': menuDefaultPosition,
					'actionitem.menuPosition': menuPosition
				})
				var that = this;
				setTimeout(function() {
					that.setData({
						'actionitem.isMenu': false
					});
				}.bind(this), 1000);
			} else {
				(new Tools()).navigateTo(e.currentTarget.dataset.url, e.currentTarget.dataset);
			}
		},
		showDiygwToast(message) {
			this.setData({
				showpopup:true,
				showtype:'top',
				showcontent: message
			});
		},
		hideDiygwToast(e){
			if (!e.show) {
				this.setData({
					showpopup:false
				});
			}			
		},
		closeDiygwWindow(e) {
			let windowid = e.currentTarget.dataset.id;
			var json = {};
			json['windowhide' + windowid] = true;
			this.setData(json)
		},
		showDiygwWindow(windowid, index, effects) {
			var json = {};
			json['windowhide' + windowid] = false;
			var effect = effects[index];
			if (effect.effect == "") {
				effect.effect = 'slideInUp';
			}
			if (effect.count == "0") {
				effect.count = 'infinite';
			}
			let style =
				`-webkit-animation-name:${effect.effect};animation-name:${effect.effect};-webkit-animation-duration:${effect.duration};animation-duration:${effect.duration};-webkit-animation-delay:${effect.delay};animation-delay:${effect.delay};-webkit-animation-iteration-count:${effect.count}`;
			json['windoweffect' + windowid] = style;
			this.setData(json);
			index++;
			if (index < effects.length && effect.count != 'infinite') {
				var that = this;
				setTimeout(function() {
					if (effect.hide) {
						json['windowhide' + windowid] = true;
						this.setData(json);
					}
					that.showDiygwWindow(windowid, index, effects);
				}.bind(this), (parseInt(effect.duration) + parseInt(effect.delay)) * 1000);
			}
		},
		showModal(message) {
			uni.showModal({
				title: '友情提示',
				content: message,
				showCancel: !1,
			});
		}
	}
