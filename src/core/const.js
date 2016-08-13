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
      ORG_SETTINGS: '/org/intro-list',
      ARTICLE_LATEST: '/article/latest',
      ARTICLE_GUIDE_PROCESS_LIST: '/article/guide-process-list',
      ARTICLE_GUIDE_RULE_LIST: '/article/guide-rule-list',
      ARTICLE_GUIDE_WORK_LIST: '/article/guide-work-list',
      ARTICLE_GUIDE_DOWNLOAD_LIST: '/article/guide-download-list',
      ARTICLE_NEWS_HOT_LIST: '/article/news-hot-list',
      ARTICLE_NEWS_POST_LIST: '/article/news-post-list',
      ARTICLE_NEWS_ALL_LIST: '/article/news-all-list',
      ARTICLE_LOG_DEVICE_LIST: '/article/log-device-list',
      ARTICLE_LOG_TEACHING_LIST: '/article/log-teaching-list',
      ARTICLE_LOG_DEPARTMENT_LIST: '/article/log-department-list',
      ARTICLE_LOG_PROPERTY_LIST: '/article/log-property-list'
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
