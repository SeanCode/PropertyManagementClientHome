<style>

  .list_content {
    display: inline-block;
  }

  .divider {
    background-color: #bfe7df;
    height: 1px;
    width: 100%;
    margin: 4px 0;
  }

  .title_span {
    color: #ff9a5f;
  }

  .clear {
    clear: both;
  }

  .title_box {
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -webkit-box-shadow: 1px 1px 3px #666;
    -moz-box-shadow: 1px 1px 3px #666;
    box-shadow: 1px 1px 3px #666;
    margin: 16px 0;
    width: 160px;
    position: fixed;
    background-color: #fff;
    z-index: 100;
  }

  .title_box .header {
    width: 100%;
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
    text-align: center;
    background-color: #ff9a5f;
    z-index: 100;
  }

  .title_box .header > span {
    color: #fff;
  }

  .title_box a {
    color: #848484;
  }

  .title_box a:hover {
    color: #ff9a5f;
    text-decoration: none;
  }

  .title_box > ul > li {
    text-align: center;
    margin: 8px 0;
    z-index: 100;
  }

  .title_box > ul > li:hover {
    color: #ff9a5f;
    cursor: pointer;
  }

  .title_active {
    color: #ff9a5f;
  }

  .news_date {
    float: right;
    width: 80px;
  }

  .news_author {
    float: right;
    margin-right: 12px;
  }

  .news_list_container {
    display: inline;
    padding: 24px;
    float: left;
    width: 960px;
    min-height: 300px;
    margin-left: 160px;
  }

  .news_list_container li {
    border-bottom: 2px dashed #848484;
  }

  .news_list_container .news_list {
    padding-top: 12px;
    padding-bottom: 6px;
    margin-left: 18px;
    color: #666666;
    font-size: 15px;
    list-style: disc;
  }

  .news_list_container .news_list a:hover {
    color: #ff9a5f;
  }

  .news_list_container .news_list a {
    position: relative;
    color: #666666;
  }

  .pagination {
    float: right;
    margin-top: 20px;
  }

  .pagination a {
    text-decoration: none;
  }

  .pagination span {
    margin: 0 12px;
  }

  .pagination_link {
    color: #666;
    cursor: pointer;
  }

  .pagination_link:hover {
    color: #ff9a5f;
  }

  .pagination_link_disabled {
    color: #777;
  }

</style>
<template>
  <div>
    <div><span>您现在的位置: {{headline}} > </span><span class="title_span">{{title}}</span></div>
    <div class="divider"></div>
    <div class="list_content">
      <div class="title_box">
        <div class="header">
          <span>{{headline}}</span>
        </div>
        <ul>
          <li v-for="title in list" @click="onTitleListClicked($index)"
              v-bind:class="{ 'title_active': $index===(category-1) }">{{title}}
          </li>
        </ul>
      </div>
      <div class="news_list_container">
        <ul>
          <li class="news_list" v-for="article in articleList">
            <div>
              <a href="javascript:;" @click='onNewsItemClicked(article)'><span>{{article.title}}</span>
                <app-flag v-if="article.is_new"></app-flag>
              </a>
              <span class="news_date">{{article.create_time_formated}}</span>
              <span class="news_author">发布者: {{article.admin ? article.admin.name : ''}} </span>
            </div>
          </li>
        </ul>
        <div class="pagination">
          <a v-bind:class="{ 'pagination_link_disabled': page === 1, 'pagination_link': page > 1 }" @click="clickToPrevious()">上一页</a>
          <span>{{page}}/{{pageAll}}</span>
          <a v-bind:class="{ 'pagination_link_disabled': page >= pageAll, 'pagination_link': page < pageAll }"@click='clickToNext()'>下一页</a>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
  import Service from '../../../service/article'
  import Flag from '../../widgets/Flag.vue'

  export default{
    route: {
      data (transition) {
        var type = transition.to.params.type
        var page = transition.to.query.page
        if (page === undefined || page < 1) {
          page = 1
        }
        Service.validate(type, (cat, titles, head) => {
          transition.next({
            type: type,
            category: cat,
            list: titles,
            page: page,
            title: titles[cat - 1],
            headline: head
          })
        })
      }
    },
    data () {
      return {
        title: '',
        list: [],
        type: 0,
        category: 1,
        articleList: [],
        pageAll: 0,
        page: 0,
        headline: '新闻公告'
      }
    },
    components: {
      'app-flag': Flag
    },
    ready () {
      this.title = this.list[this.category - 1]
      Service.getArticleList(this, this.type, this.page, (data) => {
        this.articleList = data.article_list
        this.pageAll = Math.ceil(data.count / 10)
      })
    },
    watch: {
      type: function (type) {
        this.type = type
        Service.validate(type, (cat, titles) => {
          this.category = cat
          this.list = titles
          this.title = this.list[this.category - 1]
        })
        Service.getArticleList(this, this.type, 1, (data) => {
          this.articleList = data.article_list
          this.pageAll = Math.ceil(data.count / 10)
          this.page = 1
        })
      }
    },
    methods: {
      onTitleListClicked: function (index) {
        var type = Math.floor(this.type / 10) * 10 + (index + 1)
        if (parseInt(type) === 10005) {
          window.open('http://hqwx.cqupt.edu.cn/C24H/ViewRepair')
        } else {
          this.$route.router.go('/home/articles/' + type)
        }
      },
      onNewsItemClicked: function (article) {
        this.$route.router.go('/home/articles/' + article.type + '/' + article.id)
      },
      clickToPrevious: function () {
        if (this.page <= 1) {
          return
        }
        Service.getArticleList(this, this.type, parseInt(this.page) - 1, (data) => {
          this.articleList = data.article_list
          this.page -= 1
        })
      },
      clickToNext: function () {
        if (this.page >= this.pageAll) {
          return
        }
        Service.getArticleList(this, this.type, parseInt(this.page) + 1, (data) => {
          this.articleList = data.article_list
          this.page += 1
        })
      }
    }
  }
</script>
