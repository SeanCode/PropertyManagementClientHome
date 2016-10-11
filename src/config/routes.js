/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/5/31.
 */
import NotFound from '../components/NotFound.vue'
import Home from '../Home.vue'
import Index from '../components/pages/index/Index.vue'
import ArticleList from '../components/pages/article/List.vue'
import ArticleContent from '../components/pages/article/Content.vue'
import ArticleLatestList from '../components/pages/article/LatestList.vue'
import ArticleLatestContent from '../components/pages/article/LastestContent.vue'
import Institution from '../components/pages/institution/Institution.vue'
import Sdq from '../components/pages/service/Sdq.vue'
import Tax from '../components/pages/service/Tax.vue'
import Stat from '../components/pages/service/Statistic.vue'
import Suggest from '../components/pages/service/Suggest.vue'
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
        '/service/sdq': {
          component: Sdq
        },
        '/service/tax': {
          component: Tax
        },
        '/service/stat': {
          component: Stat
        },
        '/service/suggest': {
          component: Suggest
        },
        '/institution': {
          component: Institution
        },
        '/pictures/:type': {
          component: Cover
        },
        '/pictures/:type/:cover_id': {
          component: Photo
        },
        '/articles/:type': {
          component: ArticleList
        },
        '/articles/:type/:id': {
          component: ArticleContent
        },
        '/articles/latest': {
          component: ArticleLatestList
        },
        'articles/latest/:type/:id': {
          component: ArticleLatestContent
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
