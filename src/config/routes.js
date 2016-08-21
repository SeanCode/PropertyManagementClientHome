/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/5/31.
 */
import NotFound from '../components/NotFound.vue'
import Home from '../Home.vue'
import Index from '../components/pages/index/Index.vue'
import ArticleList from '../components/pages/article/List.vue'
import ArticleContent from '../components/pages/article/Content.vue'
import Institution from '../components/pages/institution/Institution.vue'
import Service from '../components/pages/service/Service.vue'
import Cover from '../components/pages/picture/Cover.vue'
import Photo from '../components/pages/picture/Photo.vue'
import Core from '../core/core'

export function configRouter (router) {
  Core.Log.d('configure router')
  // normal routes
  router.map({
    // not found handler
    '*': {
      component: NotFound
    },
    '/home/404': {
      component: NotFound
    },
    '/home': {
      component: Home,
      subRoutes: {
        '/index': {
          component: Index
        },
        '/service': {
          component: Service
        },
        '/institution': {
          component: Institution
        },
        '/picture/covers': {
          component: Cover
        },
        '/picture/photos': {
          component: Photo
        },
        '/articles/:type': {
          component: ArticleList
        },
        '/articles/:type/:id': {
          component: ArticleContent
        }
      }
    }
  })

  router.redirect({
    '/': '/home/index',
    '/home': '/home/index',
    '/home/guide': '/home/guide/list?type=1'
  })
}
