/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/6/3.
 */
import Const from './const'
import Log from './log'
import Config from './config'
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
      return get(Const.NET.API.ARTICLE_LATEST, {})
    },
    getArticleList: function (type, page) {
      return get(Const.NET.API.ARTICLE_LIST, {type: type, page: page})
    },
    getArticleContent: function (id, type) {
      return get(Const.NET.API.ARTICLE_CONTENT, {
        id: id,
        type: type
      })
    },
    getArticleLatest: function (page) {
      return get(Const.NET.API.ARTICLE_LATEST, {page: page})
    }
  },
  PICTURE: {
    getPhotoLatest: function () {
      return get(Const.NET.API.PICTURE_PHOTO_LATEST, {})
    },
    getCoverLatest: function () {
      return get(Const.NET.API.PICTURE_COVER_LATEST, {})
    },
    getCoverList: function (type, page) {
      return get(Const.NET.API.PICTURE_COVER_LIST, {type: type, page: page})
    },
    getPhotoList: function (type, coverId, page) {
      return get(Const.NET.API.PICTURE_PHOTO_LIST, {type: type, cover_id: coverId, page: page})
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

function get (api, params, requestHeaders, raw) {
  var endPoint = Config.IS_DEBUG ? Const.NET.END_POINT_DEBUG : Const.NET.END_POINT_RELEASE
  var url = endPoint + Const.NET.API_PATH + api
  Log.d(url + '?' + transformObjectToUrlencodedData(params))

  return Vue.http.get(url, {
    params: params,
    headers: configureGetHeaders(requestHeaders)
  }).then(function (response) {
    if (!response.data.hasOwnProperty('code') || response.data.code !== 0) {
      return Promise.reject(JSON.stringify(response.data))
    }
    return raw ? response : response.data.data
  }, function (error) {
    Log.e(error)
    return error
  })
}

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

function configureGetHeaders (requestHeaders) {
  if (!requestHeaders) {
    requestHeaders = {}
  }
  //  if (!requestHeaders.hasOwnProperty('Authorization')) {
  //  requestHeaders['Authorization'] = 'Basic ' + Data.getToken()
  //  }
  return requestHeaders
}

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

