/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/5/31.
 */
import NotFound from '../components/NotFound.vue'
import Core from '../core/core'

export function configRouter (router) {
  Core.Log.d('configure router')
  // normal routes
  router.map({
    // not found handler
    '*': {
      component: NotFound
    }
  })

  router.redirect({
    '/': '/index'
  })
}
