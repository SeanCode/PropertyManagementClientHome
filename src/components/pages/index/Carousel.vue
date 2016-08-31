<style>
  #carousel-container {
    float: left;
    width: 684px;
    height: 360px;
  }

  .item > img {
    width: 684px;
    height: 360px !important;
  }

  .carousel-indicators {
    position: absolute;
    bottom: 0;
  }

  .carousel-indicators .active {
    background-color: #ed7101;
  }

</style>

<template>
  <div id="carousel-container" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-container" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-container" data-slide-to="1"></li>
      <li data-target="#carousel-container" data-slide-to="2"></li>
      <li data-target="#carousel-container" data-slide-to="3"></li>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item" v-bind:class="{ 'active': $index===0 }" v-for="banner in bannerList">
        <img :src="bannerUrl(banner.data)">
      </div>
    </div>
  </div>
</template>
<script>
  import Service from '../../../service/home'
  import Core from '../../../core/core'

  export default {
    data () {
      return {
        bannerList: []
      }
    },
    ready () {
      Service.getBannerList(this, (bannerList) => {
        if (bannerList.length > 0) {
          this.bannerList = bannerList
        } else {
          this.bannerList = Core.Config.BANNER_LIST
        }
        setTimeout(function () {
          window.$('.carousel').carousel('cycle')
        }, 800)
      })
    },
    methods: {
      bannerUrl: function (url) {
        if (!url.startsWith('img')) {
          return url
        }
        if (Core.Config.IS_DEBUG) {
          return 'http://localhost/static/res/' + url
        } else {
          return 'http://202.202.43.93/static/res/' + url
        }
      }
    }
  }

</script>
