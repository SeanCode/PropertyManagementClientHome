<style>
  body, table, tr, th, td, form, input, ul, li, div, a, h2, p {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 1200px;
    padding: 0;
    position: relative;
  }

  .line {
    width: 100%;
    height: 4px;
    background-color: #ff9a5f;
  }
</style>
<template>
  <div>
    <app-header></app-header>
    <div class="line"></div>
    <app-navigation></app-navigation>
    <app-content></app-content>
    <app-footer></app-footer>
    <vs-toast></vs-toast>
  </div>
</template>
<script>
  import Toast from './components/widgets/toast.vue'
  import Header from './components/layout/Header.vue'
  import Navigation from './components/layout/Navigation.vue'
  import Content from './components/layout/Content.vue'
  import Footer from './components/layout/Footer.vue'

  export default {
    data () {
      return {}
    },
    components: {
      'app-header': Header,
      'app-navigation': Navigation,
      'app-content': Content,
      'app-footer': Footer,
      'vs-toast': Toast
    }
  }
</script>
