<template>
  <div>
    <div><span>您现在的位置: 物业服务 > </span><span class="title_span">{{title}}</span></div>
    <div class="divider"></div>
    <div>
      <div class="title_box">
        <div class="header">
          <span>物业服务</span>
        </div>
        <ul>
          <li v-for="title in list" @click="onTitleListClicked($index)" v-bind:class="{ 'title_active': $index===(type-1) }">{{title}}</li>
        </ul>
      </div>
      <div class="empty_title_box"></div>
      <div class="news_list_container">

      </div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  import Service from '../../../service/service'

  export default{
    route: {
      data (transition) {
        Service.getParams(transition.to.query, (err, message) => {
          if (err) {
            console.log(err)
          } else {
            transition.next({
              title: message.title,
              list: message.list,
              type: message.type
            })
          }
        })
      }
    },
    data () {
      return {
        title: '',
        list: [],
        type: 0
      }
    },
    methods: {
      onTitleListClicked: function (index) {
        this.title = this.list[index]
        this.type = index + 1
      }
    }
  }
</script>
