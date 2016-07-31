<style>
  .info_container {
    float: left;
    width: 684px;
    height: 258px;
    margin-top: 20px;
  }

  .info_content {
    height: 166px;
    overflow: hidden;
  }
</style>
<template>

  <div class="info_container">
    <div class="window_header">
      <ul>
        <li class="window_nav" v-bind:class="{ 'window_nav_active': showLatest }" @click="showLatestList()"><span>最新消息</span></li>
        <li class="window_nav" v-bind:class="{ 'window_nav_active': showPrompt }" @click="showPromptList()"><span>流程指南</span></li>
        <li class="window_nav" v-bind:class="{ 'window_nav_active': showRules }" @click="showRuleList()"><span>政策法规</span></li>
      </ul>
    </div>
    <div class="info_content">
      <ul>
        <li class="news_list"><a href="javascript:;"><span>这是最新消息最新消息最新消息.这是最新消息最新最新消息.</span>
          <app-flag></app-flag>
        </a><span class="news_date">2015-11-11</span></li>
        <li class="news_list"><a href="javascript:;"><span>这是最新消息最新最新消息</span>
          <app-flag></app-flag>
        </a><span class="news_date">2015-11-11</span></li>
        <li class="news_list"><a href="javascript:;"><span>这是这是最新消息最新消息最新消息</span>
          <app-flag></app-flag>
        </a><span class="news_date">2015-11-11</span></li>
        <li class="news_list"><a href="javascript:;"><span>这是最新消息最新消息最新消息</span>
          <app-flag></app-flag>
        </a><span class="news_date">2015-11-11</span></li>
        <li class="news_list"><a href="javascript:;"><span>这是最新消息最新消息最新消息</span>
          <app-flag></app-flag>
        </a><span class="news_date">2015-11-11</span></li>
      </ul>
    </div>
    <div class="more">
      <a href="javascript:;"><span>更多>></span></a>
    </div>
  </div>
</template>

<script>
  import Flag from '../../widgets/Flag.vue'

  export default{
    data () {
      return {
        showLatest: true,
        showPrompt: false,
        showRules: false
      }
    },
    components: {
      'app-flag': Flag
    },
    methods: {
      showLatestList: function () {
        this.showLatest = true
        this.showPrompt = false
        this.showRules = false
        console.log('showLatestList')
      },
      showPromptList: function () {
        this.showLatest = false
        this.showPrompt = true
        this.showRules = false
        console.log('showPromptList')
      },
      showRuleList: function () {
        this.showLatest = false
        this.showPrompt = false
        this.showRules = true
        console.log('showRuleList')
      }
    }
  }
</script>
