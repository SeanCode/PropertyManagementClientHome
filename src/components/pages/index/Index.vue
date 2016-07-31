<template>
  <carousel></carousel>
  <news></news>
  <info></info>
  <service></service>
  <us></us>
</template>
<style>
</style>
<script>
  import Carousel from '../../pages/index/Carousel.vue'
  import News from '../../pages/index/News.vue'
  import Info from '../../pages/index/Info.vue'
  import Service from '../../pages/index/Service.vue'
  import Us from '../../pages/index/Us.vue'
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
