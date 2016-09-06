/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/7/31.
 */
import Core from '../core/core'

export default {
  getSuggestList: getSuggestList,
  addSuggest: addSuggest
}

function getSuggestList (context, page, cb) {
  Core.Api.SUGGEST.getSuggeastList(page).then((data) => {
    cb(data)
  }, (error) => {
    Core.Toast.error(context, error.message)
  })
}

function addSuggest (context, type, userName, userAccount, content, cb) {
  Core.Api.SUGGEST.addSuggest(type, userName, userAccount, content).then((data) => {
    cb(data)
  }, () => {
    Core.Toast.error(context, '提交失败! 请稍后重试')
  })
}
