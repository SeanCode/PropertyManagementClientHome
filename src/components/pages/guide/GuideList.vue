<template>
  <div>
    <div><span>您现在的位置: 服务指南 > </span><span class="title_span">{{title}}</span></div>
    <div class="divider"></div>
    <div>
      <div class="title_box">
        <div class="header">
          <span>服务指南</span>
        </div>
        <ul>
          <li v-for="title in list" @click="onTitleListClicked($index)" v-bind:class="{ 'title_active': $index===(type-1) }">{{title}}</li>
        </ul>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>
<style>
  .divider {
    background-color: #bfe7df;
    height: 1px;
    width: 100%;
    margin: 4px 0;
  }

  .title_span {
    color: #ff9a5f;
  }

  .title_box {
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -webkit-box-shadow: 1px 1px 3px #666;
    -moz-box-shadow: 1px 1px 3px #666;
    box-shadow: 1px 1px 3px #666;
    display: inline-block;
    margin: 16px 0;
    width: 160px;
  }

  .title_box .header {
    width: 100%;
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
    text-align: center;
    background-color: #ff9a5f;
  }

  .title_box .header > span {
    color: #fff;
  }

  .title_box > ul > li {
    text-align: center;
    margin: 8px 0;
  }

  .title_box > ul > li:hover {
    color: #ff9a5f;
    cursor: pointer;
  }

  .title_active {
    color: #ff9a5f;
  }
</style>
<script>
  import Service from '../../../service/guide'

  export default{
    route: {
      data (transition) {
        var type
        Service.getParams(transition.to.query, (err, message) => {
          if (err) {
            console.log(err)
          } else {
            type = message.type
            transition.next({
              title: message.title,
              list: message.list,
              type: type
            })
          }
        })
        Service.getGuideList(this, type, (list) => {
          this.guideList = list
          console.log(this.guideList.length)
        })
      }
    },
    data () {
      return {
        title: '',
        list: [],
        type: 0,
        guideList: []
      }
    },
    ready () {
    },
    methods: {
      onTitleListClicked: function (index) {
        this.title = this.list[index]
        this.type = index + 1
        // network
        Service.getGuideList(this, this.type, (list) => {
          this.guideList = list
          console.log(this.guideList.length)
        })
      }
    }
  }

</script>
