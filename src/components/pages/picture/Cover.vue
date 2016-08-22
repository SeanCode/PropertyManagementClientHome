<template>
  <div>
    <div><span>您现在的位置: 物业风采 > </span><span class="title_span">{{title}}</span></div>
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
        <ul>
          <li v-for="cover in coverList" class="cover_li"><div class="cover_box"><img :src="photoUrl(cover.cover_url)"/></div></li>
        </ul>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
<style>

  .cover_li {
    float: left;
    padding: 20px;
  }

  .cover_box {
    width: 420px;
    height: 240px;
    overflow: hidden;
  }

  .cover_box img {
    max-width: 100%;
  }
</style>
<script>
  import Core from '../../../core/core'
  import Service from '../../../service/picture'

  export default{
    route: {
      data (transition) {
        var type
        var list
        Service.validate(transition.to.params, (_type, _list) => {
          type = _type
          list = _list
        })
        Service.getCoverList(this, type, (data) => {
          transition.next({
            title: list[type - 1],
            list: list,
            type: type,
            coverList: data.cover_list
          })
        })
      }
    },
    data () {
      return {
        title: '',
        list: [],
        type: 0,
        coverList: []
      }
    },
    methods: {
      onTitleListClicked: function (index) {
        var type = index + 1
        this.$route.router.go('/home/pictures/' + type)
      },
      photoUrl: function (url) {
        if (Core.Config.IS_DEBUG) {
          return 'http://localhost/static/res/' + url
        } else {
          return 'http://202.202.43.93/static/res/' + url
        }
      }
    }
  }
</script>
