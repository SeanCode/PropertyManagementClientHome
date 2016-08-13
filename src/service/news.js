/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/7/31.
 */
import Core from '../core/core'

export default {
  getParams: getParams,
  getNewsList: getNewsList
}

var list = ['新闻热点', '公示公告']

function getParams (params, callback) {
  var type = params.type
  if (type === undefined) {
    type = 1
  }
  if (type === undefined || type <= 0 || type > list.length) {
    var error = {}
    error.message = 'param type error'
    type = 1
  }
  //  mock network request
  callback(error, {
    type: type,
    list: list,
    title: list[type - 1]
  })
}

function getNewsList (context, type, callback) {
  switch (parseInt(type)) {
    case 1:
      getNewsHotList(context, callback)
      break
    case 2:
      getNewsPostList(context, callback)
      break
    default:
      getNewsHotList(context, callback)
      break
  }
}

function getNewsHotList (context, cb) {
  Core.Api.ARTICLE.getNewsHotList(0).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}

function getNewsPostList (context, cb) {
  Core.Api.ARTICLE.getNewsPostList(0).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}
