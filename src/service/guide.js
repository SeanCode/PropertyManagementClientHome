/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/7/31.
 */
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
  setTimeout(() => {
    callback([])
  })
}
