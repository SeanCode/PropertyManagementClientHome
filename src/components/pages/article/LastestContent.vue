<template>
  <div>
    <div><span>您现在的位置: 首页 > </span><span><a v-link='indicatorLink()' class='title_first'>最新消息</a></span><span
      class="title_span">> {{article.title}}</span></div>
    <div class="divider"></div>
    <div>
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
        <div class="news_title_container">
          <div class="news_title">{{article.title}}</div>
          <div class="news_title_extra">发布者: {{article.admin ? article.admin.name : 'admin'}} <span>{{article.create_time_formated}} </span>浏览次数:
            {{article.read}}
          </div>
        </div>
        <div class="news_content">{{{article.content}}}</div>
        <div class="news_img">
          <ul>
            <li v-for="img in article.img_list"><img :src="imgUrl(img)"></li>
          </ul>
        </div>
        <div class="news_attachment" v-if="article.attachment_list !== undefined && article.attachment_list.length > 0">
          <span>附件列表:</span>
          <ul>
            <li v-for="url in article.attachment_list"><a href="/static/res/{{url.url}}" target="_blank">{{url.name}}</a></li>
          </ul>
        </div>
        <ul>
          <li></li>
        </ul>
        <div class="news_bottom">
          <div v-bind:class="{ 'news_bottom_left_disabled': !articlePre , 'news_bottom_left': articlePre }">上一主题: <a
            @click="onNewsAnother(articlePre)">{{articlePre ? articlePre.title :
            '没有了'}}</a></div>
          <div v-bind:class="{ 'news_bottom_right_disabled': !articleNext, 'news_bottom_right': articleNext}">下一主题: <a
            @click="onNewsAnother(articleNext)">{{articleNext ? articleNext.title
            : '没有了'}}</a></div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  import Core from '../../../core/core'
  import Service from '../../../service/article'

  export default {
    route: {
      data (transition) {
        var id = transition.to.params.id
        Service.getArticleContent(this, 0, id, (data) => {
          transition.next({
            article: data.article_content,
            articlePre: data.article_previous,
            articleNext: data.article_next
          })
        })
      }
    },
    data () {
      return {
        article: {},
        articlePre: {},
        articleNext: {}
      }
    },
    methods: {
      onNewsAnother: function (articleAnother) {
        if (arguments !== undefined && articleAnother !== null) {
          this.$route.router.go('/home/articles/latest/' + articleAnother.type + '/' + articleAnother.id)
        }
      },
      imgUrl: function (url) {
        if (Core.Config.IS_DEBUG) {
          return 'http://localhost/static/res/' + url
        } else {
          return 'http://202.202.43.93/static/res/' + url
        }
      }
    }
  }
</script>
