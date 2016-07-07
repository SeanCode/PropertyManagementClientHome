/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/6/3.
 */
import Store from 'store'
import Const from './const'

export default {
  set: set,
  get: get,
  setPath: setPath,
  getPath: getPath,
  setToken: setToken,
  getToken: getToken,
  setUser: setUser,
  getUser: getUser,
  getUserName: getUserName,
  isGuest: isGuest,
  logout: logout,
  getAll: getAll,
  clear: clear
}

//  cache data
var userData
var tokenData
var pathData

function getKey (key) {
  return Const.DATA.KEY_PREFIX + key
}

function get (key) {
  key = getKey(key)
  return Store.get(key)
}

function set (key, value) {
  key = getKey(key)
  return Store.set(key, value)
}

function setPath (path) {
  pathData = path
}

function getPath () {
  if (pathData) {
    return pathData
  }
  return ''
}

function setToken (token) {
  tokenData = token
  set(Const.DATA.KEY_TOKEN, token)
}

function getToken () {
  if (!tokenData) {
    tokenData = get(Const.DATA.KEY_TOKEN)
  }
  return tokenData
}

function setUser (user) {
  userData = user
  set(Const.DATA.KEY_USER, user)
}

function getUser () {
  if (!userData) {
    userData = get(Const.DATA.KEY_USER)
  }
  return userData
}

function getUserName () {
  return getUser()['name']
}

function isGuest () {
  return !getToken()
}

function logout () {
  setToken(undefined)
  setUser(undefined)
}

function getAll () {
  return Store.getAll()
}

function clear () {
  tokenData = undefined
  userData = undefined
  Store.clear()
}
