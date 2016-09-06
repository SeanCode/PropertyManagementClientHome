<style>

  .footer_pagination {
    float: right;
  }

  .footer_pagination span {
    margin: 0 12px;
  }

  .footer_pagination a {
    color: #777;
    text-decoration: none;
  }

  .suggestion_list_container {
    padding-bottom: 0;
  }

  .suggestion_list_container ul {
    padding: 0 20px 20px 20px;
    min-height: 300px;
  }

  .suggestion_list_container ul li {
    border-bottom: 2px dashed #848484;
  }

  .footer_suggestion {
    padding: 10px 60px 10px 60px;
  }

  .suggestion_content_box {
    float: left;
    width: 50%;
    padding: 20px 20px 20px 0;
  }

  .reply_box {
    float: left;
    padding: 20px 0 20px 20px;
    width: 50%;
  }

  .suggestion_title {
    padding-top: 0;
    color: #444;
    text-align: center;
  }

  .suggestion_box {
    min-height: 300px;
    border-radius: 3px;
    background: #ffffff;
    /*border-top: 3px solid #d2d6de;*/
    margin: 0 40px 20px 40px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  }
</style>
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
      <div class="news_list_container suggestion_list_container">
          <ul>
            <li>
              <div class="suggestion_title suggestion_content_box ">
                <h3>意见建议</h3>
              </div>
              <div class="suggestion_title reply_box ">
                <h3>回复</h3>
              </div>
              <div class="clear"></div>
            </li>
            <li v-for="suggest in suggestList">
              <div class="suggestion_content_box">
                {{suggest.content}}
              </div>
              <div class="reply_box">
                {{suggest.status != 0 ? suggest.reply : '暂未回复'}}
              </div>
              <div class="clear"></div>
            </li>
          </ul>
        <div class="footer_box footer_suggestion">
            <div class="footer_btn footer_btn_left">添加</div>
          <div class="footer_pagination">
            <a v-bind:class="{ 'pagination_link_disabled': page === 1, 'pagination_link': page > 1 }" @click="clickToPrevious()">上一页</a>
            <span>{{page}}/{{pageAll}}</span>
            <a v-bind:class="{ 'pagination_link_disabled': page >= pageAll, 'pagination_link': page < pageAll }"@click='clickToNext()'>下一页</a>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
  import Service from '../../../service/service'

  export default {
    data () {
      return {
        pageAll: 0,
        page: 0,
        suggestList: []
      }
    },
    ready () {
      Service.getSuggestList(this, 1, (data) => {
        this.page = 1
        this.suggestList = data.suggestion_list
        this.pageAll = Math.ceil(data.count / 3)
      })
    },
    methods: {
      clickToPrevious: function () {
        if (this.page <= 1) {
          return
        }
        Service.getSuggestList(this, parseInt(this.page) - 1, (data) => {
          this.suggestList = data.suggestion_list
          this.pageAll = Math.ceil(data.count / 3)
          this.page -= 1
        })
      },
      clickToNext: function () {
        if (this.page >= this.pageAll) {
          return
        }
        Service.getSuggestList(this, parseInt(this.page) + 1, (data) => {
          this.suggestList = data.suggestion_list
          this.pageAll = Math.ceil(data.count / 3)
          this.page += 1
        })
      }
    }
  }
</script>
