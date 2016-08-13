/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/7/31.
 */
import Core from '../core/core'

export default {
  getParams: getParams,
  getGuideList: getGuideList
}

var list = ['政策法规', '工作简报', '流程指南', '相关下载']

function getParams (params, callback) {
  var type = params.type
  if (type === undefined) {
    type = 1
  }
  if (type === undefined || type <= 0 || type > list.length) {
    var error = {}
    error.message = 'param type error'
  }
  //  mock network request
  callback(error, {
    type: type,
    list: list,
    title: list[type - 1]
  })
}

function getGuideList (context, type, callback) {
  switch (parseInt(type)) {
    case 1:
      getGuideRuleList(context, callback)
      break
    case 2:
      getGuideWorkList(context, callback)
      break
    case 3:
      getGuideProcessList(context, callback)
      break
    case 4:
      getGuideDownloadList(context, callback)
      break
    default:
      getGuideRuleList(context, callback)
      break
  }
}

function getGuideProcessList (context, cb) {
  Core.Api.ARTICLE.getGuideProcessList(0).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}

function getGuideRuleList (context, cb) {
  Core.Api.ARTICLE.getGuideRuleList(0).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}

function getGuideDownloadList (context, cb) {
  Core.Api.ARTICLE.getGuideDownloadList(0).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}

function getGuideWorkList (context, cb) {
  Core.Api.ARTICLE.getGuideWorkList(0).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}
