<style>

  .cover_box {
    text-align: center;
    float: left;
    margin: 20px;
    cursor: pointer;
    border-bottom: dashed 2px #666;
  }

  .cover_box img {
    max-width: 100%;
  }

  .cover_box .cover_name {
    text-align: center;
    margin-bottom: 10px;
  }

  .cover_wrapper {
    width: 420px;
    height: 240px;
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
  }

  .cover_wrapper span{
    position: absolute;
  }

  .cover_msg {
    display: none;
    width: 100%;
  }

  .cover_msg_author {
    margin-top: 70px;
    text-align: center;
    font-size: 18px;
  }

  .cover_msg_time {
    margin-top: 130px;
    text-align: center;
    font-size: 18px;
  }

  .cover_msg_read {
    margin-top: 100px;
    text-align: center;
    font-size: 18px;
  }

  .cover_hover {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 240px;
    background-color: #fff;
    opacity: 0.5;
    display: none;
  }
</style>
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
        <div class="cover_box" v-on:mouseover="showCover($event)" v-on:mouseout="hiddenCover($event)"  v-for="cover in coverList">
          <div class="cover_wrapper">
            <div class="cover_hover"></div>
            <span class="cover_msg cover_msg_author">上传者:&nbsp;&nbsp;{{cover.admin ? cover.admin.name : 'admin'}}</span>
            <span class="cover_msg cover_msg_read">浏览次数:&nbsp;&nbsp;{{cover.read}}</span>
            <span class="cover_msg cover_msg_time"> {{cover.update_time_formatted}}</span>
            <img :src="photoUrl(cover.cover_url)"/>
          </div>
          <div class="cover_name"><span>{{cover.name}}</span></div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
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
      showCover: function (event) {
        var target = event.currentTarget
        window.$(target).find(window.$('.cover_hover')).css('display', 'block')
        window.$(target).find(window.$('.cover_msg')).css('display', 'block')
      },
      hiddenCover: function (event) {
        var target = event.currentTarget
        window.$(target).find(window.$('.cover_hover')).css('display', 'none')
        window.$(target).find(window.$('.cover_msg')).css('display', 'none')
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
