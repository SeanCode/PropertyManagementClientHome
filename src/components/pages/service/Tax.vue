<template>
  <div>
    <div><span>您现在的位置: 物业服务 > </span><span class="title_span">物管费查询</span></div>
    <div class="divider"></div>
    <div>
      <div class="title_box">
        <div class="header">
          <span>物业服务</span>
        </div>
        <ul>
          <li v-link="{path: '/home/service/sdq'}">水电气查询</li>
          <li class="title_active" v-link="{path: '/home/service/tax'}">物管费查询</li>
          <li><a target="_blank" href="http://202.202.43.93/dashboard">数据录入</a></li>
          <li v-link="{path: '/home/service/stat'}">统计分析</li>
          <li v-link="{path: '/home/service/suggest'}">意见建议</li>
        </ul>
      </div>
      <div class="empty_title_box"></div>
      <div class="news_list_container query_container">
        <div class="query_box">
          <div class="query_account_box">
            <input class="query_account" type=number placeholder="请输入一卡通账号"/>
            <a href="javascript:;" class="query_account_btn" @click="query()">查询</a>
          </div>
          <div class="time_box">
          </div>
        </div>
        <div class="result_box">

        </div>

        <div class="footer_box">
          <div class="footer_btn footer_btn_left">打印</div>
          <div class="footer_btn footer_btn_right" @click="report()">报错</div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  import Core from '../../../core/core'

  export default{
    data () {
      return {
      }
    },
    methods: {
      report: function () {
        Core.Toast.info(this, '已上报, 也可拨打下面热线, 联系管理员')
      },
      query: function () {
        Core.Toast.info(this, '暂无数据')
      }
    }
  }
</script>
