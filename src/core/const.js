/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/6/4.
 */
export default {
  NET: {
    END_POINT_RELEASE: 'http://202.202.43.93:8080',
    END_POINT_DEBUG: 'http://localhost:8080',
    API_PATH: '/api/public/v1',
    API: {
      ADMIN_LOGIN: '/admin/login',
      HOME_BANNER_LIST: '/home/banner-list',
      ORG_SETTINGS: '/org/intro-list',
      ARTICLE_LATEST: '/articles/',
      ARTICLE_LIST: '/articles/{type}',
      ARTICLE_CONTENT: '/articles/{type}/{id}',
      PICTURE_PHOTO_LATEST: '/photo/',
      PICTURE_COVER_LATEST: '/photo/covers/',
      PICTURE_COVER_LIST: '/photo/{type}',
      PICTURE_PHOTO_LIST: '/photo/{type}/{cover_id}'
    }
  },

  ERROR: {
    ERROR_NETWORK: -10000,
    ERROR_INVALID: -1,
    ERROR_PARAM_NOT_SET: 1,
    ERROR_EXISTS: 2,
    ERROR_NOT_EXISTS: 3,
    ERROR_LOGIN_FAIL: 4,
    ERROR_WRONG_PASSWORD: 5
  },

  SYSTEM: {
    LOG_LEVEL_ERROR: 1,
    LOG_LEVEL_WARN: 2,
    LOG_LEVEL_INFO: 3,
    LOG_LEVEL_TRACE: 4,
    LOG_LEVEL_DEBUG: 5
  },

  DATA: {
    KEY_PREFIX: 'cqupt.management.home.data.',
    KEY_COOKIE: 'cookie',
    KEY_TOKEN: 'token',
    KEY_USER: 'user'
  },

  TYPE: {}
}
