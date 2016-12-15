<template>
  <div class="artist-view">
    <h1>Artist</h1>
  </div>
</template>

<script>
export default {
  name: 'artist-view',
}
</script>

<style lang="stylus">
.artist-view
  background-color #fff
  padding 1.8em 2em 1em
  box-shadow 0 1px 2px rgba(0,0,0,.1)
  h1
    display inline
    font-size 1.5em
    margin 0
    margin-right .5em
  .host, .meta, .meta a
    color #999
  .meta a
    text-decoration underline
</style>
