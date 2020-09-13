var SESSION_KEY = 'user_session_diygw_com';
var REDIRECT_SESSION_KEY = 'redirect_session_diygw_com';

var Session = {
	getRedirecturl() {
		return uni.getStorageSync(REDIRECT_SESSION_KEY) || null;
	},

	setRedirecturl(url) {
		uni.setStorageSync(REDIRECT_SESSION_KEY, url);
	},
	getUser() {
		return uni.getStorageSync(SESSION_KEY) || null;
	},

	setUser(session) {
		uni.setStorageSync(SESSION_KEY, session);
	},

	clearUser() {
		uni.removeStorageSync(SESSION_KEY);
	},

	getToken() {
		var userInfo = this.getUser();
		return userInfo ? userInfo.token : null
	},

	getOpenId() {
		var userInfo = this.getUser();
		return userInfo ? userInfo.openid : null
	}
}

export default Session
