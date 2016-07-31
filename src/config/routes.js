/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/5/31.
 */
import NotFound from '../components/NotFound.vue'
import Home from '../Home.vue'
import Index from '../components/pages/index/Index.vue'
import GuideList from '../components/pages/guide/GuideList.vue'
import GuideContent from '../components/pages/guide/GuideContent.vue'
import Institution from '../components/pages/institution/Institution.vue'
import Service from '../components/pages/service/Service.vue'
import NewsList from '../components/pages/news/List.vue'
import NewsContent from '../components/pages/news/Content.vue'
import LogList from '../components/pages/log/List.vue'
import LogContent from '../components/pages/log/Content.vue'
import GalleryCoverGrid from '../components/pages/picture/GalleryCoverGrid.vue'
import GalleryPhotoGrid from '../components/pages/picture/GalleryPhotoGrid.vue'
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
        '/guide/list': {
          component: GuideList
        },
        '/guide/content': {
          component: GuideContent
        },
        '/institution': {
          component: Institution
        },
        '/news/list': {
          component: NewsList
        },
        '/news/content': {
          component: NewsContent
        },
        '/picture/covers': {
          component: GalleryCoverGrid
        },
        '/picture/photos': {
          component: GalleryPhotoGrid
        },
        '/log/list': {
          component: LogList
        },
        '/log/content': {
          component: LogContent
        },
        '*': {
          component: NotFound
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
