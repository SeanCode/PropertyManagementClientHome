/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/8/1.
 */
import Core from '../core/core'

export default {
  getLatestArticles: getLatestArticles,
  getGuideProcessList: getGuideProcessList,
  getGuideRuleList: getGuideRuleList,
  getGuideDownloadList: getGuideDownloadList,
  getNewsPostList: getNewsPostList
}

function getLatestArticles (context, cb) {
  Core.Api.ARTICLE.getLatest().then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
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

function getNewsPostList (context, cb) {
  Core.Api.ARTICLE.getNewsPostList(0).then((data) => {
    cb(data.article_list)
  }, (data) => {
    Core.Toast.error(context, data.message)
  })
}
