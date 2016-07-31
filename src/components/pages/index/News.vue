<style>
  .window_container {
    float: left;
    width: 496px;
    height: 360px;
    margin-left: 24px;
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

  .news_content {
    overflow: hidden;
    margin-top: 10px;
    height: 244px;
  }

  .news_list {
    margin-top: 12px;
    margin-left: 18px;
    color: #666666;
    font-size: 15px;
    list-style: disc;
  }

  .news_list a:hover {
    color: #ff9a5f;
  }

  .news_list a {
    position: relative;
    color: #666666;
  }

  .news_date {
    float: right;
  }

  .more {
    margin-top: 16px;
  }

  .more a {
    float: right;
  }

  .more a span {
    font-size: 16px;
    color: #666666;
  }

</style>
<template>

  <div class="window_container">
    <div class="window_header">
      <ul>
        <li class="window_nav" v-bind:class="{ 'window_nav_active': showNews }" @click="showNewsList()"><span>新闻公告</span></li>
        <li class="window_nav" v-bind:class="{ 'window_nav_active': showDownload }" @click="showDownloadList()"><span>相关下载</span></li>
      </ul>
    </div>
    <div class="news_content">
      <ul>
        <li class="news_list"><a href="javascript:;"><span>这是新闻公告新闻公告新闻公告</span>
          <app-flag></app-flag>
        </a><span class="news_date">2015-11-11</span></li>
        <li class="news_list"><a href="javascript:;"><span>这是新闻公告新闻公告新闻</span>
          <app-flag></app-flag>
        </a><span class="news_date">2015-11-11</span></li>
        <li class="news_list"><a href="javascript:;"><span>这是新闻公告新闻公告</span>
          <app-flag></app-flag>
        </a><span class="news_date">2015-11-11</span></li>
        <li class="news_list"><a href="javascript:;"><span>这是新闻公告新闻</span>
          <app-flag></app-flag>
        </a><span class="news_date">2015-11-11</span></li>
        <li class="news_list"><a href="javascript:;"><span>这是新闻公告新闻公告</span>
          <app-flag></app-flag>
        </a><span class="news_date">2015-11-11</span></li>
        <li class="news_list"><a href="javascript:;"><span>这是新闻公告新闻公告新闻</span>
          <app-flag></app-flag>
        </a><span class="news_date">2015-11-11</span></li>
        <li class="news_list"><a href="javascript:;"><span>这是新闻公告新闻公告新闻</span>
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
        showNews: true,
        showDownload: false
      }
    },
    components: {
      'app-flag': Flag
    },
    methods: {
      showNewsList: function () {
        this.showNews = true
        this.showDownload = false
        console.log('show news list')
      },
      showDownloadList: function () {
        this.showNews = false
        this.showDownload = true
        console.log('show download list')
      }
    }
  }
</script>
