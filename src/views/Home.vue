<template>
  <div class="user-view">
    <h1>Homepage</h1>
    <p>Vue 2.0 Boilerplate app with SSR</p>
  </div>
</template>

<script>
export default {
  name: 'home-view',
}
</script>

<style lang="stylus">
.home-view
  background-color #fff
  box-sizing border-box
  padding 2em 3em
  h1
    margin 0
    font-size 1.5em
  .meta
    list-style-type none
    padding 0
  .label
    display inline-block
    min-width 4em
  .about
    margin 1em 0
  .links a
    text-decoration underline
</style>
