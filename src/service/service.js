/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/7/31.
 */
export default {
  getParams: getParams
}

var list = ['水电气查询', '物管费查询']

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
