<template>
  <div>
    <div><span>您现在的位置: 新闻公告 > </span><span class="title_span">{{title}}</span></div>
    <div class="divider"></div>
    <div>
      <div class="title_box">
        <div class="header">
          <span>新闻公告</span>
        </div>
        <ul>
          <li v-for="title in list" @click="onTitleListClicked($index)" v-bind:class="{ 'title_active': $index===(type-1) }">{{title}}</li>
        </ul>
      </div>
      <div class="news_list_container">
        <li class="news_list" v-for="article in newsList">
          <div>
            <a href="javascript:;"><span>{{article.title}}</span>
              <app-flag v-if="article.is_new"></app-flag>
            </a>
            <span class="news_date">{{new Date(article.create_time * 1000).toLocaleDateString()}}</span>
            <span class="news_author">发布者: {{article.admin ? article.admin.name : ''}} </span>
          </div>
        </li>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  import Service from '../../../service/news'

  export default{
    route: {
      data (transition) {
        var type
        var list
        var title
        var newsList
        Service.getParams(transition.to.query, (err, message) => {
          if (err) {
            console.log(err)
          } else {
            type = message.type
            list = message.list
            title = message.title
          }
          console.log('type: ' + type)
          Service.getNewsList(this, type, (nList) => {
            newsList = nList
            transition.next({
              title: title,
              list: list,
              type: type,
              newsList: newsList
            })
          })
        })
      }
    },
    data () {
      return {
        title: '',
        list: [],
        type: 0,
        newsList: []
      }
    },
    methods: {
      onTitleListClicked: function (index) {
        this.title = this.list[index]
        this.type = index + 1
        // network
        Service.getNewsList(this, this.type, (list) => {
          this.newsList = list
        })
      }
    }
  }
</script>
