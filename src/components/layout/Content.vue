<template>
  <div class="container content_box">
    <carousel></carousel>
    <news></news>
    <info></info>
    <service></service>
    <us></us>
  </div>

</template>
<style>
  .content_box {
    margin-top: 16px;
  }

</style>
<script>
  import Carousel from '../pages/Carousel.vue'
  import News from '../pages/News.vue'
  import Info from '../pages/Info.vue'
  import Service from '../pages/Service.vue'
  import Us from '../pages/Us.vue'

  export default{
    data () {
      return {}
    },
    components: {
      'carousel': Carousel,
      'news': News,
      'info': Info,
      'service': Service,
      'us': Us
    }
  }
</script>
