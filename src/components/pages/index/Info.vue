<style>
  .info_container {
    float: left;
    width: 684px;
    height: 258px;
    margin-top: 20px;
  }

  .info_content {
    height: auto;
    max-height: 166px;
    overflow: hidden;
  }
</style>
<template>

  <div class="info_container">
    <div class="window_header">
      <ul>
        <li class="window_nav" v-bind:class="{ 'window_nav_active': showLatest }" @click="showLatestList()">
          <span>最新消息</span></li>
        <li class="window_nav" v-bind:class="{ 'window_nav_active': showPrompt }" @click="showPromptList()">
          <span>流程指南</span></li>
        <li class="window_nav" v-bind:class="{ 'window_nav_active': showRules }" @click="showRuleList()">
          <span>政策法规</span></li>
      </ul>
    </div>
    <div class="info_content">
      <ul>
        <li class="news_index_list" v-for="article in articleList">
          <div v-if="$index < 5">
            <a href="javascript:;" @click="goToContent(article)"><span>{{article.title}}</span>
              <app-flag v-if="article.is_new"></app-flag>
            </a>
            <span class="news_date">{{article.create_time_formated}}</span>
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
        showLatest: true,
        showPrompt: false,
        showRules: false,
        articleList: []
      }
    },
    components: {
      'app-flag': Flag
    },
    ready () {
      Service.getLatestList(this, (list) => {
        this.articleList = list
      })
    },
    methods: {
      showLatestList: function () {
        this.showLatest = true
        this.showPrompt = false
        this.showRules = false
        Service.getLatestList(this, (list) => {
          this.articleList = list
        })
      },
      showPromptList: function () {
        this.showLatest = false
        this.showPrompt = true
        this.showRules = false
        Service.getGuideProcessList(this, (list) => {
          this.articleList = list
        })
      },
      showRuleList: function () {
        this.showLatest = false
        this.showPrompt = false
        this.showRules = true
        Service.getGuideRuleList(this, (list) => {
          this.articleList = list
        })
      },
      moreLink: function () {
        var link = ''
        if (this.showLatest) {
          link = '/home/articles/20001'
        } else if (this.showPrompt) {
          link = '/home/articles/10003'
        } else if (this.showRules) {
          link = '/home/articles/10001'
        }
        return link
      },
      goToContent: function (article) {
        var kind = article.type / 10000
        var type = article.type % 10000
        var contentType = article.type
        var id = article.id
        var link
        switch (parseInt(kind)) {
          case 1:
            link = '/home/guide/content?type=' + type + '&content_type=' + contentType + '&id=' + id
            break
          case 2:
            link = '/home/news/content?type=' + type + '&content_type=' + contentType + '&id=' + id
            break
          case 3:
            link = '/home/log/content?type=' + type + '&content_type=' + contentType + '&id=' + id
            break
          default:
            break
        }
        if (link) {
          this.$route.router.replace(link)
        }
      }
    }
  }
</script>
