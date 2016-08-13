/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/7/31.
 */
import Core from '../core/core'

export default {
  getParams: getParams,
  getLogList: getLogList
}

var list = ['特种设备', '消防安全', '教学巡查', '公寓巡查', '物业巡查']

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

function getLogList (context, type, callback) {
  switch (parseInt(type)) {
    case 1:
      getLogDeviceList(context, callback)
      break
    case 2:
      getLogTeachingList(context, callback)
      break
    case 3:
      getLogDepartmentList(context, callback)
      break
    case 4:
      getLogPropertyList(context, callback)
      break
    default:
      getLogDeviceList(context, callback)
      break
  }
}

function getLogDeviceList (context, cb) {
  Core.Api.ARTICLE.getLogDeviceList(0).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}

function getLogTeachingList (context, cb) {
  Core.Api.ARTICLE.getLogTeachingList(0).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}

function getLogDepartmentList (context, cb) {
  Core.Api.ARTICLE.getLogDepartmentList(0).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}

function getLogPropertyList (context, cb) {
  Core.Api.ARTICLE.getLogPropertyList(0).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}
