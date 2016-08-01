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
        <li class="news_list" v-for="article in articleList">
          <div v-if="$index < 5">
            <a href="javascript:;"><span>{{article.title}}</span>
              <app-flag v-if="article.is_new"></app-flag>
            </a>
            <span class="news_date">{{new Date(article.create_time * 1000).toLocaleDateString()}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="more">
      <a href="javascript:;"><span>更多>></span></a>
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
      Service.getLatestArticles(this, (list) => {
        this.articleList = list
      })
    },
    methods: {
      showLatestList: function () {
        this.showLatest = true
        this.showPrompt = false
        this.showRules = false
        Service.getLatestArticles(this, (list) => {
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
      }
    }
  }
</script>
