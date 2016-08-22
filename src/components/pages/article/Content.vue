<style>
  .title_first {
    color: #666666;
  }

  .title_first:hover {
    color: #ff9a5f;
  }

  .news_title_container {
    width: 100%;
    border-bottom: 2px dashed #aaa;
  }

  .news_title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }

  .news_title_extra {
    margin-top: 12px;
    text-align: right;
    margin-bottom: 8px;
  }

  .news_title_extra span {
    padding: 0 8px;
  }

  .news_content {
    margin: 12px 0;
  }

  .news_bottom {

  }

  .news_bottom_left_disabled {
    overflow: hidden;
    margin-top: 12px;
    margin-bottom: 8px;
  }

  .news_bottom_left_disabled a {
    color: #666;
  }

  .news_bottom_left {
    overflow: hidden;
    margin-top: 12px;
    margin-bottom: 8px;
  }

  .news_bottom_left a {
    color: #333;
    cursor: pointer;
  }

  .news_bottom_left a:hover {
    color: #ff9a5f;
  }

  .news_bottom_right {
    overflow: hidden;
  }

  .news_bottom_right a {
    color: #333;
    cursor: pointer;
  }

  .news_bottom_right a:hover {
    color: #ff9a5f;
  }

  .news_bottom_right_disabled {
    overflow: hidden;
  }

  .news_bottom_right_disabled a {
    color: #666
  }

  .news_img {

  }

  .news_img ul li {
    border-bottom: none;
    margin: 8px 0;
    max-width: 996px;
  }

  .news_img img {
    max-width: 500px;
  }

  .news_attachment {

  }

  .news_attachment ul {
    padding-left: 20px;
  }

  .news_attachment ul li {
    list-style: disc;
    margin: 6px 0;
    border-bottom: none
  }

  .news_attachment ul li a {
    color: #333;
  }

  .news_attachment ul li a:hover {
    color: #ff9a5f;
    cursor: pointer;
  }

</style>
<template>
  <div>
    <div><span>您现在的位置: 新闻公告 > </span><span><a v-link='indicatorLink()' class='title_first'>{{title}}</a></span><span
      class="title_span">> {{article.title}}</span></div>
    <div class="divider"></div>
    <div>
      <div class="title_box">
        <div class="header">
          <span>新闻公告</span>
        </div>
        <ul>
          <li v-for="title in list" @click="onTitleListClicked($index)"
              v-bind:class="{ 'title_active': $index===(category-1) }">{{title}}
          </li>
        </ul>
      </div>
      <div class="empty_title_box"></div>
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
<script>
  import Core from '../../../core/core'
  import Service from '../../../service/article'

  export default{
    route: {
      data (transition) {
        var type = transition.to.params.type
        var id = transition.to.params.id
        var category
        var list
        Service.validate(type, (cat, titles) => {
          category = cat
          list = titles
        })
        Service.getArticleContent(this, type, id, (data) => {
          transition.next({
            title: list[category - 1],
            list: list,
            category: category,
            type: type,
            article: data.article_content,
            articlePre: data.article_previous,
            articleNext: data.article_next
          })
        })
      }
    },
    data () {
      return {
        title: '',
        list: [],
        article: {},
        category: -1,
        type: -1,
        articlePre: {},
        articleNext: {}
      }
    },
    components: {},
    ready () {
    },
    methods: {
      onTitleListClicked: function (index) {
        var type = Math.floor(this.type / 10) * 10 + (index + 1)
        this.$route.router.go('/home/articles/' + type)
      },
      indicatorLink: function () {
        return '/home/articles/' + this.type
      },
      onNewsAnother: function (articleAnother) {
        if (arguments !== undefined && articleAnother !== null) {
          this.$route.router.go('/home/articles/' + articleAnother.type + '/' + articleAnother.id)
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
