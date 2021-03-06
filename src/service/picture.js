/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/7/31.
 */
import Core from '../core/core'

export default {
  validate: validate,
  getCoverList: getCoverList,
  getPhotoList: getPhotoList,
  getPhotoLatest: getPhotoLatest,
  getCoverLatest: getCoverLatest
}

var list = ['领导关怀', '荣誉奖励', '会议纪实', '物业动态', '校园绿化']

function validate (_type, callback) {
  var type = _type
  if (type === undefined) {
    type = 1
  }
  if (type === undefined || type <= 0 || type > list.length) {
    type = 1
  }
  callback(type, list)
}

function getCoverList (context, type, page, cb) {
  Core.Api.PICTURE.getCoverList(type, page).then((data) => {
    cb(data)
  }, (error) => {
    Core.Toast.error(context, error.message)
  })
}

function getPhotoList (context, type, coverId, page, cb) {
  Core.Api.PICTURE.getPhotoList(type, coverId, page).then((data) => {
    cb(data)
  }, (error) => {
    Core.Toast.error(context, error.message)
  })
}

function getPhotoLatest (context, cb) {
  Core.Api.PICTURE.getPhotoLatest().then((data) => {
    cb(data)
  }, (error) => {
    Core.Toast.error(context, error.message)
  })
}

function getCoverLatest (context, cb) {
  Core.Api.PICTURE.getCoverLatest().then((data) => {
    cb(data)
  }, (error) => {
    Core.Toast.error(context, error.message)
  })
}
