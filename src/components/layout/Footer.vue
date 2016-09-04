<style>
  .footerContainer {
    width: 100%;
    height: 136px;
    text-align: center;
    background-color: #eee;
    overflow: hidden;
  }

  .footerContainer p, ul > li {
    color: #848484;
  }

  .footerContainer > span {
    color: #848484;
  }

  .footerContainer p {
    margin: 16px 0 16px 0;
  }

  .footerContainer ul {
    margin-bottom: 36px;
  }

  .footerContainer ul li {
    display: inline-block;
    padding-right: 10px;
    margin-left: 6px;
    border-right: 1px solid #848484;
    cursor: pointer;
  }

  .footerContainer ul li:hover {
    color: #ff9a5f;
  }

  .footerContainer ul li a {
    color: #848484;
  }

  .footerContainer ul li a:hover {
    color: #ff9a5f;
  }

  #noneBorder {
    border-right: none;
  }

  .footerContainer > span:nth-of-type(2) {
    margin-left: 18px;
  }
</style>
<template>
  <div class="footerContainer">
    <p>三XIN服务热线: 62461241</p>
    <ul>
      <li><a href="http://202.202.32.35">重庆邮电大学</a></li>
      <li id="noneBorder"><a href="http://202.202.43.93/dashboard/index">后台管理系统</a></li>
    </ul>
    <span>Copyright @ {{year}} WYGLZX All Rights Reserved</span>
    <span>重庆邮电大学物业管理中心版权所有</span>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        year: 2016
      }
    },
    components: {}
  }
</script>
