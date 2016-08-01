/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/6/3.
 */
import Const from './const'
import Log from './log'
import Config from './config'
//  import Data from './data'
//  import Util from './util'
import Vue from 'vue'

export default {
  COMMON: {
    login: function (name, password) {
      return post(Const.NET.API.ADMIN_LOGIN, {
        name: name,
        password: password
      })
    }
  },
  ORG: {
    getOrgSettings: function () {
      return post(Const.NET.API.ORG_SETTINGS, {})
    }
  },
  ARTICLE: {
    getLatest: function () {
      return post(Const.NET.API.ARTICLE_LATEST, {})
    },
    getGuideProcessList: function (page) {
      return post(Const.NET.API.ARTICLE_GUIDE_PROCESS_LIST, {
        page: page
      })
    },
    getGuideWorkList: function (page) {
      return post(Const.NET.API.ARTICLE_GUIDE_WORK_LIST, {
        page: page
      })
    },
    getGuideRuleList: function (page) {
      return post(Const.NET.API.ARTICLE_GUIDE_RULE_LIST, {
        page: page
      })
    },
    getGuideDownloadList: function (page) {
      return post(Const.NET.API.ARTICLE_GUIDE_DOWNLOAD_LIST, {
        page: page
      })
    },
    getNewsHotList: function (page) {
      return post(Const.NET.API.ARTICLE_NEWS_HOT_LIST, {
        page: page
      })
    },
    getNewsPostList: function (page) {
      return post(Const.NET.API.ARTICLE_NEWS_POST_LIST, {
        page: page
      })
    },
    getLogDeviceList: function (page) {
      return post(Const.NET.API.ARTICLE_LOG_DEVICE_LIST, {
        page: page
      })
    },
    getLogDepartmentList: function (page) {
      return post(Const.NET.API.ARTICLE_LOG_DEPARTMENT_LIST, {
        page: page
      })
    },
    getLogTeachingList: function (page) {
      return post(Const.NET.API.ARTICLE_LOG_TEACHING_LIST, {
        page: page
      })
    },
    getLogPropertyList: function (page) {
      return post(Const.NET.API.ARTICLE_LOG_PROPERTY_LIST, {
        page: page
      })
    }
  }
}

function post (api, data, requestHeaders, raw) {
  var endPoint = Config.IS_DEBUG ? Const.NET.END_POINT_DEBUG : Const.NET.END_POINT_RELEASE
  var url = endPoint + Const.NET.API_PATH + api

  Log.d(url + '?' + transformObjectToUrlencodedData(data))

  return Vue.http.post(url, transformObjectToUrlencodedData(data), {
    headers: configurePostHeaders(requestHeaders)
  }).then((response) => {
    if (!response.data.hasOwnProperty('code') || response.data.code !== 0) {
      return Promise.reject(response.data)
    }
    return raw ? response : response.data.data
  }, function (error) {
    Log.e(error)
    return Promise.reject(error)
  })
}
//
//  function get (api, params, requestHeaders, raw) {
//  var url = Const.NET.END_POINT + api
//  Log.d(url + '?' + transformObjectToUrlencodedData(params))
//
//  return Vue.http.get(url, {}, {
//    params: params,
//    headers: configureGetHeaders(requestHeaders)
//  }).then(function (response) {
//    if (!response.data.hasOwnProperty('code') || response.data.code !== 0) {
//      return Promise.reject(JSON.stringify(response.data))
//    }
//    return raw ? response : response.data.data
//  }, function (error) {
//    Log.e(error)
//    return error
//  })
//  }

function transformObjectToUrlencodedData (obj) {
  var p = []
  if (obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] === undefined) {
          obj[key] = ''
        }
        p.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
      }
    }
  }
  return p.join('&')
}
//
//  function configureGetHeaders (requestHeaders) {
//  if (!requestHeaders) {
//    requestHeaders = {}
//  }
//  //  if (!requestHeaders.hasOwnProperty('Authorization')) {
//  //  requestHeaders['Authorization'] = 'Basic ' + Data.getToken()
//  //  }
//  return requestHeaders
//  }

function configurePostHeaders (requestHeaders) {
  if (!requestHeaders) {
    requestHeaders = {}
  }
  requestHeaders['Content-Type'] = 'application/x-www-form-urlencoded'
  //  if (!requestHeaders.hasOwnProperty('Authorization')) {
  //  requestHeaders['Authorization'] = 'Basic ' + Data.getToken()
  //  }
  return requestHeaders
}

