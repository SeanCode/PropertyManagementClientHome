<template>
  <div>
    <div><span>您现在的位置: 物业风采 > </span><span><a v-link='indicatorLink()' class='title_first'>{{title}}</a></span><span
      class="title_span">> {{cover.name}}</span></div>
    <div class="divider"></div>
    <div>
      <div class="title_box">
        <div class="header">
          <span>物业风采</span>
        </div>
        <ul>
          <li v-for="title in list" @click="onTitleListClicked($index)"
              v-bind:class="{ 'title_active': $index===(type-1) }">{{title}}
          </li>
        </ul>
      </div>
      <div class="empty_title_box"></div>
      <div class="news_list_container">
        <div class="photo_container">
          <div class="photo_cover_name"><span>{{cover.name}}({{count}})</span></div>
          <div class="photo_box" v-for="photo in photoList">
            <div class="photo_wrapper">
              <img :src="photoUrl(photo.url)"/>
            </div>
          </div>
          <div class="empty_photo_box photo_box" v-show="photoList.length%3>0&&photoList.length%3<2"></div>
          <div class="empty_photo_box photo_box" v-show="photoList.length%3>0&&photoList.length%3<3"></div>
          <div class="clear"></div>
        </div>
        <div class="pagination photo_pagination">
          <a v-bind:class="{ 'pagination_link_disabled': page <= 1, 'pagination_link': page > 1 }" @click="clickToPrevious()">上一页</a>
          <span>{{page}}/{{pageAll}}</span>
          <a v-bind:class="{ 'pagination_link_disabled': page >= pageAll, 'pagination_link': page < pageAll }"@click='clickToNext()'>下一页</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .photo_box {
    float: left;
    padding: 10px;
    border-bottom: dashed 2px #666;
  }

  .photo_box img {
    max-width: 290px;
  }

  .photo_wrapper {
    width: 280px;
    height: 200px;
    overflow: hidden;
    margin: 10px 0;
  }

  .empty_photo_box {
    width: 300px;
    height: 242px;
    overflow: hidden;
  }

  .photo_cover_name {
    font-size: 22px;
    margin-left: 10px;
  }
</style>
<script>
  import Core from '../../../core/core'
  import Service from '../../../service/picture'

  export default{
    route: {
      data (transition) {
        var page = transition.to.query.page
        if (page === undefined || page < 1) {
          page = 1
        }
        var type = transition.to.params.type
        var id = transition.to.params.cover_id
        var list
        Service.validate(type, (_type, _list) => {
          type = _type
          list = _list
        })
        Service.getPhotoList(this, type, id, page, (data) => {
          transition.next({
            title: list[type - 1],
            list: list,
            type: type,
            cover: data.cover,
            photoList: data.photo_list,
            page: parseInt(page),
            count: data.count,
            pageAll: Math.ceil(data.count / 9)
          })
        })
      }
    },
    data () {
      return {
        title: '',
        list: [],
        type: 0,
        cover: {},
        photoList: [],
        page: 0,
        count: 0,
        pageAll: 1
      }
    },
    components: {},
    ready () {
      if (parseInt(this.pageAll) === 0) {
        this.pageAll = 1
      }
    },
    methods: {
      onTitleListClicked: function (index) {
        var type = index + 1
        this.$route.router.go('/home/pictures/' + type + '?page=1')
      },
      photoUrl: function (url) {
        if (Core.Config.IS_DEBUG) {
          return 'http://localhost/static/res/' + url
        } else {
          return 'http://202.202.43.93/static/res/' + url
        }
      },
      indicatorLink: function () {
        return '/home/pictures/' + this.type + '?page=1'
      },
      clickToPrevious: function () {
        if (this.page <= 1) {
          return
        }
        this.$route.router.go('/home/pictures/' + this.type + '/' + this.cover.id + '?page=' + (this.page - 1))
      },
      clickToNext: function () {
        if (this.page >= this.pageAll) {
          return
        }
        this.$route.router.go('/home/pictures/' + this.type + '/' + this.cover.id + '?page=' + (this.page + 1))
      }
    }
  }
</script>
