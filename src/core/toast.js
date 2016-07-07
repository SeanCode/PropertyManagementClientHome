/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/6/28.
 */
export default {
  success: success,
  error: error,
  info: info,
  warning: warning
}

function error (context, msg) {
  if (!msg) {
    msg = '发生一个未知错误'
  }
  toast(context, {
    error: msg,
    duration: 5000
  })
}

function success (context, msg) {
  if (!msg) {
    msg = 'success'
  }
  toast(context, {
    success: msg
  })
}

function info (context, msg) {
  if (!msg) {
    msg = '这是一条消息'
  }
  toast(context, {
    info: msg,
    duration: 5000
  })
}

function warning (context, msg) {
  if (!msg) {
    msg = '警告'
  }
  toast(context, {
    warning: msg,
    duration: 5000
  })
}

function toast (context, options) {
  context.$root.$broadcast('show::toast', options)
}
