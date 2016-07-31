<template>
  <div>
    <div><span>您现在的位置: 机构设置 > </span><span class="title_span">{{title}}</span></div>
    <div class="divider"></div>
    <div class="list_content">
      <div class="title_box">
        <div class="header">
          <span>机构设置</span>
        </div>
        <ul>
          <li v-for="title in list" @click="onTitleListClicked($index)"
              v-bind:class="{ 'title_active': $index===(type-1) }">{{title}}
          </li>
        </ul>
      </div>
      <div class="title_content">
        {{{orgSetting.content}}}
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  import Service from '../../../service/institution'

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
        Service.getInstitutionList(this, type, (list) => {
          this.institutionList = list
          this.onTitleListClicked(this.type - 1)
        })
      }
    },
    data () {
      return {
        title: '',
        list: [],
        type: 0,
        institutionList: [],
        orgSetting: ''
      }
    },
    methods: {
      onTitleListClicked: function (index) {
        this.title = this.list[index]
        this.type = index + 1
        for (var i = 0; i < this.institutionList.length; i++) {
          if (this.institutionList.hasOwnProperty(i)) {
            if (this.type === this.institutionList[i].id) {
              this.orgSetting = this.institutionList[i]
              if (this.orgSetting) {
                this.orgSetting.content = this.orgSetting.content.replace(new RegExp('\\r\\n', 'gm'), '<br>')
              }
              break
            }
          }
        }
      }
    }
  }
</script>
