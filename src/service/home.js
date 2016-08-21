/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/8/1.
 */
import Core from '../core/core'

export default {
  getGuideProcessList: getGuideProcessList,
  getGuideRuleList: getGuideRuleList,
  getGuideDownloadList: getGuideDownloadList,
  getLatestList: getLatestList,
  getNewsAllList: getNewsAllList
}

function getGuideProcessList (context, cb) {
  Core.Api.ARTICLE.getArticleList(10003).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}

function getGuideRuleList (context, cb) {
  Core.Api.ARTICLE.getArticleList(10001).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}

function getGuideDownloadList (context, cb) {
  Core.Api.ARTICLE.getArticleList(10004).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}

function getLatestList (context, cb) {
  Core.Api.ARTICLE.getArticleLatest(0).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}

function getNewsAllList (context, cb) {
  Core.Api.ARTICLE.getArticleList(20000, 0).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}
