<template>
  <div>
    <div><span>您现在的位置: 首页 > </span><span class="title_span">最新消息</span></div>
    <div class="divider"></div>
    <div class="list_content">
      <div class="title_box">
        <div class="header">
          <span>最新消息</span>
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
          <a v-bind:class="{ 'pagination_link_disabled': page === 1, 'pagination_link': page > 1 }"
             @click="clickToPrevious()">上一页</a>
          <span>{{page}}/{{pageAll}}</span>
          <a v-bind:class="{ 'pagination_link_disabled': page >= pageAll, 'pagination_link': page < pageAll }"
             @click='clickToNext()'>下一页</a>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  import Service from '../../../service/article'
  import Flag from '../../widgets/Flag.vue'

  export default {
    components: {
      'app-flag': Flag
    },
    data () {
      return {
        list: [],
        articleList: [],
        page: 0,
        pageAll: 0
      }
    },
    ready () {
      getArticleListByPage(this, 1)
    },
    methods: {
      clickToPrevious: function () {
        if (this.page <= 1) {
          return
        }
        getArticleListByPage(this, this.page - 1)
      },
      clickToNext: function () {
        if (this.page >= this.pageAll) {
          return
        }
        getArticleListByPage(this, this.page + 1)
      },
      onNewsItemClicked: function (article) {
        this.$route.router.go('/home/articles/latest/' + article.type + '/' + article.id)
      }
    }
  }

  function getArticleListByPage (context, page) {
    Service.getArticleLatest(page, (data) => {
      context.articleList = data.article_list
      context.page = page
      context.pageAll = Math.ceil(data.count / 10)
    })
  }
</script>
