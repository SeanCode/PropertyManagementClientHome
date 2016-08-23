<style>
  .us_container {
    float: left;
    height: 286px;
    width: 100%;
    margin-top: 20px;
  }

  .us_container:after {
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
    content: '';
  }

  .us_content {
    position: absolute;
    width: 100%;
    height: 180px;
    margin-top: 32px;
    overflow: hidden;
  }

  .us_content > .control:hover > i {
    color: #fa9546 !important;
  }

  .style_item {
    position: relative;
    float: left;
    width: 256px;
    height: 170px;
    margin-right: 20px;
    text-align: center;
    cursor: pointer;
  }

  .style_item h2 {
    margin-top: 70px;
    font-size: 30px;
  }

  .style_item p {
    margin-top: 32px;
    font-size: 18px;
  }

  .style_item img {
    position: absolute;
    left: 0;
    top: 0;
    width: 256px;
    height: 170px;
    z-index: -10;
  }

  .item_cover {
    position: absolute;
    left: 0;
    top: 0;
    width: 256px;
    height: 170px;
    background-color: #fff;
    opacity: 0.5;
    z-index: -1;
  }

  .style_box {
    position: absolute;
    width: 2000px;
  }

  .show_control {
    display: none;
  }

  .us_flag {
    top: 10px;
  }

</style>
<template>
  <div class="us_container">
    <div class="window_header">
      <ul>
        <li class="window_nav window_nav_active"><span>物业风采<app-flag title="HOT" class="us_flag"></app-flag></span></li>
      </ul>
    </div>
    <div class="us_content">
      <div class="prev control" v-on:mouseover="translateLeft" v-on:mouseout="stopAnimate"><i class="iconfont">
        &#xe604;</i></div>
      <div class="next control" v-on:mouseover="translateRight" v-on:mouseout="stopAnimate"><i class="iconfont">
        &#xe605;</i></div>
      <div v-bind:style="{ width: refreshWidth + 'px' }" class="style_box">
        <div class="style_item" @click="clickToPhotoList(cover)" v-on:mouseover="showCover($event)" v-on:mouseout="hiddenCover($event)" v-for="cover in coverList">
          <img :src="imgUrl(cover.cover_url)" alt="us_3">
          <div class="show_control">
            <div class="item_cover"></div>
            <h2><truncate :width="240">{{cover.name}}</truncate></h2>
            <p>更新于 <span> {{cover.update_time_formatted}}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Core from '../../../core/core'
  import Flag from '../../widgets/Flag.vue'
  import Service from '../../../service/picture'
  import Truncate from '../../widgets/Truncate.vue'

  //  从后台获取到物业风采条目数

  export default{
    components: {
      'app-flag': Flag,
      'truncate': Truncate
    },
    data () {
      return {
        refreshWidth: 0,
        coverList: []
      }
    },
    ready () {
      this.getPhotoLatest()
    },
    methods: {
      translateLeft: function () {
        var cur = parseInt(window.$('.style_box').css('left'))
//        var width = parseInt($('.style_box').css('width'))
        if (Math.abs(cur) !== 0) {
          window.$('.style_box').animate({'left': '0px'}, 1000)
        }
      },
      translateRight: function () {
        var cur = parseInt(window.$('.style_box').css('left'))
        var width = parseInt(window.$('.style_box').css('width'))
        if (Math.abs(cur) <= width - 1200) {
          window.$('.style_box').animate({'left': -(width - 1200) + 'px'}, 1000)
        }
      },
      stopAnimate: function () {
        window.$('.style_box').stop()
      },
      showCover: function (event) {
        var target = event.currentTarget
        window.$(target).find(window.$('.show_control')).css('display', 'block')
      },
      hiddenCover: function (event) {
        var target = event.currentTarget
        window.$(target).find(window.$('.show_control')).css('display', 'none')
      },
      getPhotoLatest: function () {
        Service.getCoverLatest(this, (data) => {
          this.coverList = data.cover_list
          this.refreshWidth = data.cover_list.length * 280
        })
      },
      imgUrl: function (url) {
        if (Core.Config.IS_DEBUG) {
          return 'http://localhost/static/res/' + url
        } else {
          return 'http://202.202.43.93/static/res/' + url
        }
      },
      dateString: function (time) {
        var date = new Date(time * 1000)
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay()
      },
      clickToPhotoList: function (cover) {
        this.$route.router.go('/home/pictures/' + cover.type + '/' + cover.id)
      }
    }
  }
</script>
