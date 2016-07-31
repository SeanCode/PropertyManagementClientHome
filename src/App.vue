<style>
  body, table, tr, th, td, form, input, ul, li, a, h2, p {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 1204px;
    padding: 0;
    position: relative;
  }
</style>
<template>
  <div class="container">
    <router-view></router-view>
    <vs-toast></vs-toast>
  </div>
</template>
<script>
  import Toast from './components/widgets/toast.vue'

  export default {
    data () {
      return {}
    },
    components: {
      'vs-toast': Toast
    }
  }
</script>
