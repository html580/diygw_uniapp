import ServiceBase from './ServiceBase'
//Update: 邓志锋 <280160522@qq.com> <http://www.diygw.com>
class Service extends ServiceBase {
  constructor() {
    super()
    this.$$prefix = ''
    this.$$path = {
      wechatSignUp: '/xcx/login/wechatSignUp.html',
      wechatSignIn: '/xcx/login/wechatSignIn.html',
      decryptData: '/xcx/login/decryptData.html',
      signIn: '/xcx/index/signIn',
      signOut: '/xcx/index/signOut',
      data: '/data/data.html',
      save: '/data/save.html',
      del: '/data/remove.html'
    }
  }

  wechatSignUp(params) {
    return this.postRequest(this.$$path.wechatSignUp, params)
  }

  wechatSignIn(params) {
    return this.postRequest(this.$$path.wechatSignIn, params)
  }

  wechatDecryptData(params) {
    return this.postRequest(this.$$path.decryptData, params)
  }


  signIn(params) {
    return this.postRequest(this.$$path.signIn, params)
  }

  signOut() {
    return this.postRequest(this.$$path.signOut)
  }

  //获取表格分页数据
  getData(params, url) {
    return this.postRequest(url || this.$$path.data, params)
  }

  //保存数据
  saveData(params, url) {
    return this.postRequest(url || this.$$path.save, params)
  }

  //删除数据
  delData(params, url) {
    return this.postRequest(url || this.$$path.del, params)
  }

}

export default Service