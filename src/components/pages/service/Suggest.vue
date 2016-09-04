<template>
  <div>
    <div><span>您现在的位置: 物业服务 > </span><span class="title_span">意见建议</span></div>
    <div class="divider"></div>
    <div>
      <div class="title_box">
        <div class="header">
          <span>物业服务</span>
        </div>
        <ul>
          <li v-link="{path: '/home/service/sdq'}">水电气查询</li>
          <li v-link="{path: '/home/service/tax'}">物管费查询</li>
          <li><a target="_blank" href="http://202.202.43.93/dashboard">数据录入</a></li>
          <li v-link="{path: '/home/service/stat'}">统计分析</li>
          <li class="title_active" v-link="{path: '/home/service/suggest'}">意见建议</li>
        </ul>
      </div>
      <div class="empty_title_box"></div>
      <div class="news_list_container">

      </div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  export default{
    route: {
      data (transition) {
      }
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
