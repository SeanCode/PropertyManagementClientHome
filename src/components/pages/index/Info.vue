<style>
  .info_container {
    float: left;
    width: 650px;
    height: 258px;
    margin-top: 8px;
  }

  .info_content {
    height: 244px;
    max-height: 166px;
    overflow: hidden;
  }

  .info_index_title {
    text-overflow: ellipsis;
    display: inline-block;
    white-space: nowrap;
    width: auto;
    max-width: 530px;
    overflow: hidden;
    margin-bottom: -4px;
  }

  .info_index_title_new {
    max-width: 510px;
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
            <a href="javascript:;" @click="goToContent(article)"><span class="info_index_title" v-bind:class="{'info_index_title_new': article.is_new}">{{article.title}}</span>
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
          link = '/home/articles/latest'
        } else if (this.showPrompt) {
          link = '/home/articles/10003'
        } else if (this.showRules) {
          link = '/home/articles/10001'
        }
        return link
      },
      goToContent: function (article) {
        this.$route.router.go('/home/articles/' + article.type + '/' + article.id)
      }
    }
  }
</script>
