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
        <li class="window_nav window_nav_active"><span>最新消息</span></li>
        <li class="window_nav"><span>流程提示</span></li>
        <li class="window_nav"><span>政策法规</span></li>

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

      </ul>
    </div>
    <div class="more">
      <a href="javascript:;"><span>更多>></span></a>
    </div>
  </div>


</template>

<script>
  import Flag from './Flag.vue'

  export default{
    data () {
      return {}
    },
    components: {
      'app-flag': Flag
    }
  }
</script>
