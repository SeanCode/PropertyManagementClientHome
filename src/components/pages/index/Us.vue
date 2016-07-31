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

</style>
<template>
  <div class="us_container">
    <div class="window_header">
      <ul>
        <li class="window_nav window_nav_active"><span>物业风采</span></li>
      </ul>
    </div>
    <div class="us_content">
      <div class="prev control" v-on:mouseover="translateLeft" v-on:mouseout="stopAnimate"><i class="iconfont">
        &#xe604;</i></div>
      <div class="next control" v-on:mouseover="translateRight" v-on:mouseout="stopAnimate"><i class="iconfont">
        &#xe605;</i></div>
      <div v-bind:style="{ width: refreshWidth + 'px' }" class="style_box">
        <div class="style_item" v-on:mouseover="showCover" v-on:mouseout="hiddenCover($event)">
          <img src="../../../assets/us_1.png" alt="us_3">
          <div class="show_control">
            <div class="item_cover"></div>
            <h2>物业写真</h2>
            <p>更新于<span>2015-11-11</span></p>
          </div>
        </div>
        <div class="style_item" v-on:mouseover="showCover" v-on:mouseout="hiddenCover($event)">
          <img src="../../../assets/us_5.png" alt="us_5">
          <div class="show_control">
            <div class="item_cover"></div>
            <h2>物业写真</h2>
            <p>更新于<span>2015-11-11</span></p>
          </div>
        </div>
        <div class="style_item" v-on:mouseover="showCover" v-on:mouseout="hiddenCover($event)">
          <img src="../../../assets/us_2.png" alt="us_2">
          <div class="show_control">
            <div class="item_cover"></div>
            <h2>物业写真</h2>
            <p>更新于<span>2015-11-11</span></p>
          </div>
        </div>
        <div class="style_item" v-on:mouseover="showCover" v-on:mouseout="hiddenCover($event)">
          <img src="../../../assets/us_3.png" alt="us_3">
          <div class="show_control">
            <div class="item_cover"></div>
            <h2>物业写真</h2>
            <p>更新于<span>2015-11-11</span></p>
          </div>
        </div>
        <div class="style_item" v-on:mouseover="showCover" v-on:mouseout="hiddenCover($event)">
          <img src="../../../assets/us_4.png" alt="us_4">
          <div class="show_control">
            <div class="item_cover"></div>
            <h2>物业写真</h2>
            <p>更新于<span>2015-11-11</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Flag from '../../widgets/Flag.vue'

  //  从后台获取到物业风采条目数
  var items = 5
  var refreshWidth = items * 280

  export default{
    components: {
      'app-flag': Flag
    },
    data () {
      return {
        refreshWidth: refreshWidth
      }
    },
    ready () {
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
      }
    }
  }
</script>
