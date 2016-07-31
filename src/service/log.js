/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/7/31.
 */
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
  setTimeout(() => {
    callback([])
  })
}
