import __config from '../siteinfo'
import Session from './Session'
//Update: 邓志锋 <280160522@qq.com> <http://www.diygw.com>
class ServiceBase {
  constructor() {
    Object.assign(this, {
      $$basePath: __config.basePath
    })
    this.__init()
  }

  /**
   * __init
   */
  __init() {
    this.__initDefaults()
    this.__initMethods()
  }

  /**
   * __initDefaults
   */
  __initDefaults() {
    // 方法名后缀字符串
    this.suffix = 'Request'

    // 发起请求所支持的方法
    this.instanceSource = {
      method: [
        'OPTIONS',
        'GET',
        'HEAD',
        'POST',
        'PUT',
        'DELETE',
        'TRACE',
        'CONNECT',
      ]
    }
  }

  /**
   * 遍历对象构造方法，方法名以小写字母+后缀名
   */
  __initMethods() {
    for (let key in this.instanceSource) {
      this.instanceSource[key].forEach((method, index) => {
        this[method.toLowerCase() + this.suffix] = (...args) => this.__defaultRequest(method, ...args)
      })
    }
  }

  /**
   * 以uni.request作为底层方法
   * @param {String} method 请求方法
   * @param {String} url    接口地址
   * @param {Object} params 请求参数
   * @param {Object} header 设置请求的 header
   * @param {String} dataType 请求的数据类型
   */
  __defaultRequest(method = '', url = '', params = {}, header = {}, dataType = 'json') {
    const $$header = Object.assign({}, this.setHeaders(), header)
    const $$url = this.setUrl(url)

    // 注入拦截器
    const chainInterceptors = (promise, interceptors) => {
      for (let i = 0, ii = interceptors.length; i < ii;) {
        let thenFn = interceptors[i++]
        let rejectFn = interceptors[i++]
        promise = promise.then(thenFn, rejectFn)
      }
      return promise
    }
    params['__isxcx__'] = '1';
    if (!params['dashboardid']) {
      params['dashboardid'] = __config.dashboardid;
    } 
    if (!params['mpid']) {
      params['mpid'] = __config.mpid;
    }


    // 请求参数配置
    const $$config = {
      url: $$url,
      data: params,
      header: $$header,
      method: method,
      dataType: dataType,
    }

    let requestInterceptors = []
    let responseInterceptors = []
    let reversedInterceptors = this.setInterceptors()
    let promise = this.__resolve($$config)

    // 缓存拦截器
    reversedInterceptors.forEach((n, i) => {
      if (n.request || n.requestError) {
        requestInterceptors.push(n.request, n.requestError)
      }
      if (n.response || n.responseError) {
        responseInterceptors.unshift(n.response, n.responseError)
      }
    })

    // 注入请求拦截器
    promise = chainInterceptors(promise, requestInterceptors)

    // 发起HTTPS请求
    promise = promise.then(this.__http)

    // 注入响应拦截器
    promise = chainInterceptors(promise, responseInterceptors)

    // 接口调用成功，res = {data: '开发者服务器返回的内容'}
    promise = promise.then(res => res.data, err => err)

    return promise
  }

  /**
   * __http - uni.request
   */
  __http(obj) {
    return new Promise((resolve, reject) => {
      obj.success = (res) => resolve(res)
      obj.fail = (res) => reject(res)
      uni.request(obj)
    })
  }

  /**
   * __resolve
   */
  __resolve(res) {
    return new Promise((resolve, reject) => {
      resolve(res)
    })
  }

  /**
   * __reject
   */
  __reject(res) {
    return new Promise((resolve, reject) => {
      reject(res)
    })
  }

  /**
   * 设置请求路径
   */
  setUrl(url) {
    var url = `${url}`;
    if (this.$$basePath.indexOf("http://www.diygw.com")>=0){
       return `${this.$$basePath}${this.$$prefix}${url}`
    }else{
      if (url.indexOf("xcx")>=0){
        return `${this.$$basePath}${this.$$prefix}${url}`
      }else{
         return `${this.$$basePath}/xcx${this.$$prefix}${url}`
      }      
    }
  }

  /**
   * 设置请求的 header , header 中不能设置 Referer
   */
  setHeaders() {
    return {
      // 'Accept': 'application/json', 
      // 'Content-type': 'application/json', 
      'Content-type': 'application/x-www-form-urlencoded'
    }
  }

  /**
   * 设置request拦截器
   */
  setInterceptors() {
    return [{
      request: (request) => {
        request.header = request.header || {}
        request.requestTimestamp = new Date().getTime()
        if (request.data.login && request.data.login === "1") {
          request.header.Authorization = Session.getToken()
        }
        uni.showLoading({
          title: request.data.loadmsg || '加载中...',
        });
        if (request.data['redirecturl']){
          Session.setRedirecturl(request.data['redirecturl']);
          delete request.data['redirecturl'];
        }
        delete request.data['loadmsg'];
        return request;
      },
      requestError: (requestError) => {
        uni.hideToast()
        return requestError
      },
      response: (response) => {
        response.responseTimestamp = new Date().getTime()
        uni.hideLoading();
        if (response.data.status === 401) {
          Session.clearUser();
		  uni.redirectTo({
		  	url: '/pages/login/index?login=1'
		  });
        }
        return response;
      },
      responseError: (responseError) => {
        uni.hideLoading();
        return responseError;
      },
    }]
  }
}

export default ServiceBase