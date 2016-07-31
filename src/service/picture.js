/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/7/31.
 */
export default {
  getParams: getParams
}

var list = ['领导关怀', '荣誉奖励', '会议纪实', '物业动态', '校园绿化']

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
