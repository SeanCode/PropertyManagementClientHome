/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/8/15.
 */
import Core from '../core/core'

export default {
  validate: validate,
  getArticleList: getArticleList,
  getArticleContent: getArticleContent
}

var newsTitles = ['新闻热点', '公示公告']
var guideTitles = ['政策法规', '工作简报', '流程指南', '相关下载']
var logTitles = ['特种设备', '教学巡查', '公寓巡查', '物业巡查']

function validate (type, callback) {
  var kind = Math.floor(type / 10000)
  var category = type % 10000
  switch (kind) {
    case 1:
      getGuideTitleList(category, callback)
      break
    case 2:
      getNewsTitleList(category, callback)
      break
    case 3:
      getLogTitles(category, callback)
      break
    default:
      getNewsTitleList(category, callback)
      break
  }
}

function getGuideTitleList (category, cb) {
  if (category === undefined || category <= 0 || category > guideTitles.length) {
    category = 1
  }
  cb(category, guideTitles)
}

function getNewsTitleList (category, cb) {
  if (category === undefined || category <= 0 || category > newsTitles.length) {
    category = 1
  }
  cb(category, newsTitles)
}

function getLogTitles (category, cb) {
  if (category === undefined || category <= 0 || category > logTitles.length) {
    category = 0
  }
  cb(category, logTitles)
}

function getArticleList (context, type, page, cb) {
  Core.Api.ARTICLE.getArticleList(parseInt(type), page).then((data) => {
    cb(data)
  }, (error) => {
    Core.Toast.error(context, error.message)
  })
}

function getArticleContent (context, type, id, cb) {
  Core.Api.ARTICLE.getArticleContent(id, type).then((data) => {
    cb(data)
  }, (error) => {
    Core.Toast.error(context, error.message)
  })
}
