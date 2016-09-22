<template>
  <router-view></router-view>
</template>
<style lang="sass">
  @import "style.scss"
</style>
<script>
  export default {
    el: function () {
      return document.querySelector('body');
    },
    replace: false
  }
</script>
