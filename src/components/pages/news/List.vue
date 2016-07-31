<template>
  <div>
    <div><span>您现在的位置: 新闻公告 > </span><span class="title_span">{{title}}</span></div>
    <div class="divider"></div>
    <div>
      <div class="title_box">
        <div class="header">
          <span>新闻公告</span>
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
</style>
<script>
  import Service from '../../../service/news'

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
              type: message.type
            })
          }
        })
        Service.getNewsList(this, type, (list) => {
          this.newsList = list
          console.log(this.newsList.length)
        })
      }
    },
    data () {
      return {
        title: '',
        list: [],
        type: 0,
        newsList: []
      }
    },
    methods: {
      onTitleListClicked: function (index) {
        this.title = this.list[index]
        this.type = index + 1
        // network
        Service.getNewsList(this, this.type, (list) => {
          this.newsList = list
          console.log(this.newsList.length)
        })
      }
    }
  }
</script>
