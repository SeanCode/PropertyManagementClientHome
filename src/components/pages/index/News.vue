<style>
  .window_container {
    float: left;
    width: 458px;
    height: 360px;
    margin-left: 12px;
    border-bottom: 2px solid #bababa;
  }

  .window_header {
    height: 48px;
    background-color: #eee;
  }

  .window_nav {
    float: left;
    width: 106px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    margin-right: 18px;
    position: relative;
    cursor: pointer;
  }

  .window_nav span {
    font-size: 16px;
    color: #bdbdbd;
  }

  .window_nav:hover {
    border-bottom: 2px solid #ff9a5f;
  }

  .window_nav:hover > span {
    color: #ff9a5f;
  }

  .window_nav_active {
    border-bottom: 2px solid #ff9a5f;
  }

  .window_nav_active > span {
    color: #ff9a5f;
  }

  .news_index_content {
    overflow: hidden;
    margin-top: 10px;
    height: 244px;
  }

  .news_index_list {
    margin-top: 12px;
    margin-left: 18px;
    color: #666666;
    font-size: 15px;
    list-style: disc;
  }

  .news_index_list a:hover {
    color: #ff9a5f;
  }

  .news_index_list a {
    position: relative;
    color: #666666;
  }

  .news_index_date {
    float: right;
    width: 80px;
  }

  .more {
    margin-top: 16px;
  }

  .more a {
    float: right;
  }

  .more a:hover {
    color: #ff9a5f;
  }

  .more a span {
    font-size: 16px;
    color: #666666;
  }

  .more a span:hover {
    color: #ff9a5f;
  }

</style>
<template>

  <div class="window_container">
    <div class="window_header">
      <ul>
        <li class="window_nav" v-bind:class="{ 'window_nav_active': showNews }" @click="showNewsList()">
          <span>新闻公告</span></li>
        <li class="window_nav" v-bind:class="{ 'window_nav_active': showDownload }" @click="showDownloadList()"><span>相关下载</span>
        </li>
      </ul>
    </div>
    <div class="news_index_content">
      <ul>
        <li class="news_index_list" v-for="article in articleList">
          <div v-if="$index < 7">
            <a href="javascript:;" @click="goToContent(article)"><span>{{article.title}}</span>
              <app-flag v-if="article.is_new"></app-flag>
            </a>
            <span class="news_index_date">{{article.create_time_formated}}</span>
          </div>
        </li>
      </ul>

    </div>
    <div class="more">
      <a href="javascript:;" v-link='moreLink()'><span>更多>></span></a>
    </div>
  </div>


</template>

<script>
  import Service from '../../../service/home'
  import Flag from '../../widgets/Flag.vue'

  export default{
    data () {
      return {
        showNews: true,
        showDownload: false,
        articleList: []
      }
    },
    components: {
      'app-flag': Flag
    },
    ready () {
      Service.getNewsAllList(this, (list) => {
        this.articleList = list
      })
    },
    methods: {
      showNewsList: function () {
        this.showNews = true
        this.showDownload = false
        Service.getNewsAllList(this, (list) => {
          this.articleList = list
        })
      },
      showDownloadList: function () {
        this.showNews = false
        this.showDownload = true
        Service.getGuideDownloadList(this, (list) => {
          this.articleList = list
        })
      },
      moreLink: function () {
        var link = ''
        if (this.showNews) {
          link = '/home/articles/20002'
        } else if (this.showDownload) {
          link = '/home/articles/10004'
        }
        return link
      },
      goToContent: function (article) {
        this.$route.router.go('/home/articles/' + article.type + '/' + article.id)
      }
    }
  }
</script>
