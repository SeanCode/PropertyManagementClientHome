/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/7/31.
 */
export default {
  getParams: getParams,
  getInstitutionList: getInstitutionList
}

var list = ['中心简介', '综合管理部', '工程维修部', '物业管理部', '能源保障部', '教学服务部']

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

function getInstitutionList (context, type, callback) {
  setTimeout(() => {
    callback([])
  })
}
