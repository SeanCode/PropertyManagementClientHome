<template>
  <span class="truncate truncate-gritcode" v-bind:style="{width: truncateWidth}"><slot></slot></span>
</template>
<style>
  .truncate-gritcode {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
  }
</style>
<script>
  export default{
    computed: {
      truncateWidth () {
        return (isNaN(this.width)) ? this.width : `${this.width}px`
      }
    },
    props: {
      width: {
        default: '20em'
      }
    }
  }
</script>
