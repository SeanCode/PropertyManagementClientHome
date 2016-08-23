<style>
  .service_container {
    float: left;
    width: 496px;
    height: 258px;
    margin-top: 20px;
    margin-left: 24px;
  }

  .service_content {
    position: relative;
  }

  .control {
    position: absolute;
    cursor: pointer;
    z-index: 100;
  }

  .control > i {
    font-size: 40px;
    color: #d9d9d9;
  }

  .control > i:hover {
    color: #fa9546;
  }

  .prev {
    left: 4px;
    top: 60px;
  }

  .next {
    right: 4px;
    top: 60px;
  }

  .service_item {
    display: inline-block;
    width: 86px;
    height: 108px;
    margin-left: 62px;
    margin-top: 58px;
    text-align: center;
    cursor: pointer;
  }

  .service_item p {
    font-size: 16px;
    color: #d0d0d0;
    margin-top: 20px;
  }

  .service_icon {
    width: 64px;
    height: 64px;
    border-radius: 64px;
    line-height: 64px;
    margin: 0 auto;
    background-color: #d9d9d9;
  }

  .service_icon > i {
    font-size: 40px;
    color: #fff;
  }

  .service_item:hover > .service_icon {
    background-color: #fa9546;
  }

  .service_item:hover > p {
    color: #fa9546;
  }

  .control_active {
    color: #fa9546 !important;
  }

</style>
<template>

  <div class="service_container">
    <div class="window_header">
      <ul>
        <li class="window_nav window_nav_active"><span>服务窗口</span></li>
      </ul>
    </div>
    <div class="service_content">
      <div class="prev control" v-on:click="turnLeft"><i class="iconfont">&#xe604</i></div>
      <div class="next control" v-on:click="turnRight"><i class="iconfont">&#xe605</i></div>

      <div class="service_item" data-index="1" @click='query()'>
        <div class="service_icon">
          <i class="iconfont">&#xe602</i>
        </div>
        <p>水电气费</p>
      </div>

      <div class="service_item" data-index="2" @click='repair()'>
        <div class="service_icon">
          <i class="iconfont">&#xe600</i>
        </div>
        <p>网上报修</p>
      </div>

      <div class="service_item service_active" data-index="3" @click='logList()'>
        <div class="service_icon">
          <i class="iconfont">&#xe601</i>
        </div>
        <p>安检日志</p>
      </div>


    </div>
  </div>


</template>

<script>
  var index = 3
  var $ = window.$

  export default {
    data () {
      return {
        controller_1: true
      }
    },
    components: {},
    methods: {
      turnLeft: function () {
        if (index <= 3 && index > 1) {
          index -= 1
          $('.service_item').removeClass('service_active')
          $('.service_content').find('.service_item[data-index = ' + index + ']').addClass('service_active')
          if (index === 1) {
            $('.prev').find('i').removeClass('control_active')
          } else {
            $('.control').find('i').addClass('control_active')
          }
        }
      },
      turnRight: function () {
        if (index < 3 && index >= 1) {
          index += 1
          $('.service_item').removeClass('service_active')
          $('.service_content').find('.service_item[data-index = ' + index + ']').addClass('service_active')
          if (index === 3) {
            $('.next').find('i').removeClass('control_active')
          } else {
            $('.control').find('i').addClass('control_active')
          }
        }
      },
      query: function () {
        this.$route.router.go('/home/service?type=1')
      },
      logList: function () {
        this.$route.router.go('/home/articles/30001')
      },
      repair: function () {
        this.$route.router.go('/home/index')
      }
    }

  }
</script>
