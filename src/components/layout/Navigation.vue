<style>
  ul li {
    list-style: none;
  }

  .page-nav {
    height: 41px;
    border-bottom: 1px solid #FFFFFF;
    position: relative;
    z-index: 100;
  }

  .page-navs {
    height: 100%;
  }

  .page-navs a {
    font-size: 14px;
    color: white;
    line-height: 41px;
  }

  .page-navs li {
    position: relative;
    display: block;
    float: left;
    width: 172px;
    height: 100%;
    text-align: center;
  }

  .page-navs li:hover ul {
    display: block;
  }

  .page-navs li ul {
    width: 100%;
  }

  .page-navs li ul li{
    width: 100%;
    cursor: pointer;
  }

  .page-navs-inner {
    -webkit-animation: slideDown ease-out 0.2s;
    -moz-animation: slideDown ease-out 0.2s;
    animation: slideDown ease-out 0.2s;
    position: absolute;
    z-index: 199;
    padding: 0;
    top: 0;
    left: 0;
    opacity: .8;
    display: none;
  }

  .page-navs-inner li {
    height: 36px;
  }

  .page-navs-inner li a {
    font-size: 14px;
    line-height: 36px;
  }

  .page-navs-inner li:first-child {
    height: 39px;
    border-top: none !important;
    border-bottom: 2px solid #fade73;
  }

  .page-navs-inner li:first-child a {
    font-size: 14px;
    line-height: 41px;
  }

  .page-nav a {
    color: #fff !important;
  }

  .page-nav a:hover {
    color: #ed7101 !important;
  }

  .headbox,
  .page-nav,
  .page-footer {
    background: #ff9a5f;
  }

  .page-navs-inner,
  .links .select ul {
    background: #ff7b0c;
  }

  .page-navs-inner li,
  .links .select ul li {
    border-top: 2px solid #fa8b2d;
  }

  .page-navs-inner li:hover,
  .links .select ul li:hover {
    background: #dc6b0b;
  }

  .page-navs-inner li.active,
  .links .select ul li.active {
    background: #ff7b0c;
  }

  .page-navs li:hover,
  .links .select ul li:hover {
    background: #e46f0d;
  }

  .nav-active {
    cursor: pointer;
  }
</style>

<template>
  <nav class="page-nav">
    <ul class="wrap page-navs">
      <li class="nav-active"><a href="/index">首页</a>
      </li>
      <li><a>服务指南</a>
        <ul class="page-navs-inner">
          <li class="title"><a>服务指南</a>
          </li>
          <li class="btwhite"><a>政策法规</a>
          </li>
          <li><a>工作简报</a>
          </li>
          <li><a>流程指南</a>
          </li>
          <li><a>相关下载</a>
          </li>
          <li><a>网上保修</a>
          </li>
        </ul>
      </li>
      <li><a>机构设置</a>
        <ul class="page-navs-inner">
          <li class="title"><a>机构设置</a>
          </li>
          <li class="mtwhite"><a>中心简介</a>
          </li>
          <li><a>综合管理部</a>
          </li>
          <li><a>工程维修部</a>
          </li>
          <li><a>物业管理部</a>
          </li>
          <li><a>能源保障部</a>
          </li>
          <li><a>教学服务部</a>
          </li>
        </ul>
      </li>
      <li><a>新闻公告</a>
        <ul class="page-navs-inner">
          <li class="title"><a>新闻公告</a>
          </li>
          <li class="mtwhite"><a>新闻热点</a>
          </li>
          <li><a>公示公告</a>
          </li>
        </ul>
      </li>
      <li>
        <a>物业服务</a>
        <ul class="page-navs-inner">
          <li class="title"><a>物业服务</a>
          </li>
          <li class="mtwhite"><a>水电气查询</a>
          </li>
          <li><a>物业费查询</a>
          </li>
        </ul>
      </li>
      <li>
        <a>物业风采</a>
        <ul class="page-navs-inner">
          <li class="title"><a>物业风采</a>
          </li>
          <li class="mtwhite"><a>领导关怀</a>
          </li>
          <li><a>荣誉奖励</a>
          </li>
          <li><a>会议纪实</a>
          </li>
          <li><a>物业动态</a>
          </li>
          <li><a>校园绿化</a>
          </li>
        </ul>
      </li>
      <li>
        <a>安检日志</a>
        <ul class="page-navs-inner">
          <li class="title"><a>安检日志</a>
          </li>
          <li class="mtwhite"><a>特种设备</a>
          </li>
          <li><a>消防安全</a>
          </li>
          <li><a>教学巡查</a>
          </li>
          <li><a>公寓巡查</a>
          </li>
          <li><a>物业巡查</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>

</template>
<script>
  export default{
    data () {
      return {}
    },
    methods: {}
  }
</script>
