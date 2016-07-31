<template>
  <app-header></app-header>
  <div class="line"></div>
  <app-navigation></app-navigation>
  <app-content></app-content>
  <app-footer></app-footer>
</template>
<style>
  .line {
    width: 100%;
    height: 4px;
    background-color: #ff9a5f;
  }
</style>
<script>
  import Header from './components/layout/Header.vue'
  import Navigation from './components/layout/Navigation.vue'
  import Content from './components/layout/Content.vue'
  import Footer from './components/layout/Footer.vue'
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      'app-header': Header,
      'app-navigation': Navigation,
      'app-content': Content,
      'app-footer': Footer
    }
  }
</script>
