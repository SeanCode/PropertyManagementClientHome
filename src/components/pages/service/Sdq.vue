<style>
  .query_container {
    padding-bottom: 0;
  }

  .query_box {
    width: 100%;
    padding: 0 60px;
  }

  .query_account_box {
    display: inline-block;
    width: 240px;
    background-color: #F1F1F1;
    padding: 4px 6px;
  }

  .query_account {
    border:none;padding: 2px;
  }

  .query_account_btn {
    padding: 0 20px;
    background-color: #F1F1F1;
    color: #666;
    text-decoration: none;
  }

  .time_box {
    float: right;
    display: inline-block;
    margin-right: 64px;
  }

  .btn_box {
    width: 100%;
  }

  .btn_box ul {
    list-style: none;
    padding: 20px;
  }

  .btn_box ul li {
    cursor: pointer;
    background-color: #ff9a5f;
    color: #fff;
    padding: 8px 36px;
    margin: 0 40px;
    display: inline-flex;
    flex: 1;
    border-bottom: none;
  }

  .btn_box ul li:hover {
    background-color: #e46f0d;
  }

  .result_box {
    min-height: 160px;
    height: auto;
  }

  .footer_box {
    width: 100%;
    padding: 10px 120px 10px 60px;
  }

  .footer_btn {
    color: #fff;
    width: 80px;
    padding: 5px 20px;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    background-color: #ff9a5f;
  }

  .footer_btn_left {
    float: left;
  }

  .footer_btn_right {
    float: right;
  }

  .footer_btn:hover {
    background-color: #e46f0d;
  }
</style>
<template>
  <div>
    <div><span>您现在的位置: 物业服务 > </span><span class="title_span">水电气查询</span></div>
    <div class="divider"></div>
    <div>
      <div class="title_box">
        <div class="header">
          <span>物业服务</span>
        </div>
        <ul>
          <li class="title_active" v-link="{path: '/home/service/sdq'}">水电气查询</li>
          <li v-link="{path: '/home/service/tax'}">物管费查询</li>
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
            <a href="javascript:;" class="query_account_btn">查询</a>
          </div>
          <div class="time_box">
            <date-picker en format="yyyy-MM-dd" :start-time.sync="startTime" :end-time.sync="endTime" range max-range="366"></date-picker>
          </div>
        </div>
        <div class="btn_box">
          <ul>
            <li>水费查询</li>
            <li>电费查询</li>
            <li>气费查询</li>
            <li>综合打印</li>
          </ul>
        </div>
        <div class="result_box">

        </div>

        <div class="footer_box">
          <div class="footer_btn footer_btn_left">打印</div>
          <div class="footer_btn footer_btn_right">报错</div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import DatePicker from '../../widgets/DatePicker.vue'

  export default{
    components: {
      'date-picker': DatePicker
    },
    data () {
      return {
        startTime: new Date().getTime(),
        endTime: new Date().getTime()
      }
    },
    methods: {}
  }
</script>
