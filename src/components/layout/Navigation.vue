<style>
  ul li {
    list-style: none;
  }

  nav {
    height: 48px;
  }

  .nav {
    float: left;
    position: relative;
    width: 14.28%;
    height: 48px;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
  }

  .nav:nth-of-type(1) {
    background-color: #ff9a5f;
  }

  .nav:nth-of-type(1) > span {
    color: #fff;
  }

  .nav span {
    font-size: 16px;
  }

  .nav-active {
    background-color: #ff9a5f;
  }

  .nav-active > span {
    color: #fff;
  }

  .nav > ul {
    position: absolute;
    top: 48px;
    left: 0;
    z-index: 100;
    width: 100%;
  }

  .nav-list {
    margin-bottom: 2px;
    /*background-color: #fff;*/
    /*opacity: 0.7;*/
    background: rgba(255, 255, 255, 0.7);
    filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#fff, endcolorstr=#fff);

  }

  .nav-list:hover {
    background: rgba(255, 154, 95, 0.7);
    filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#ff9a5f, endcolorstr=#ff9a5f);
  }

  .nav-list:hover > span {
    color: #fff;
  }
</style>

<template>
  <nav>
    <ul @click="navController">
      <li class="nav"><span>首页</span></li>
      <li class="nav"><span>服务指南</span></li>
      <li class="nav"><span>机构设置</span></li>
      <li class="nav nav-active">
        <span>新闻公告</span>
        <ul v-if="show" transition="nav-transition">
          <li class="nav-list"><span>新闻热点</span></li>
          <li class="nav-list"><span>公示公告</span></li>
          <li class="nav-list"><span>可添加</span></li>
        </ul>
      </li>
      <li class="nav"><span>物业服务</span></li>
      <li class="nav"><span>物业风采</span></li>
      <li class="nav"><span>安检日记</span></li>
    </ul>
  </nav>

</template>
<script>
  export default{
    data () {
      return {
        show: true
      }
    },
    methods: {
      navController: function (event) {
        event = event || window.event
        var target = event.target || event.srcElement
        if (target.nodeName.toLowerCase() === 'li') {
        }
      }
    }
  }
</script>
