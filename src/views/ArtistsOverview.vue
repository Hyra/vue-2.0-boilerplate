<template>
  <div class="artists-overview-view">
    <router-link to="/">&lt; Back home</router-link>
    <br /><br />
    <h1>Artists Overview</h1>
    <!-- <spinner :show="!user"></spinner> -->
    <div v-for="item in myArtists" :key="item.id" :item="item">
      <router-link :to="{ name: 'artists', params: { id: item.id }}">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'

// function fetchUser (store) {
//   return store.dispatch('FETCH_USER', {
//     id: store.state.route.params.id
//   })
// }

function fetchPosts (store) {
  return store.dispatch('FETCH_POSTS', {})
}

export default {
  metaInfo: {
    title: 'My Example App', // set a title
    titleTemplate: '%s - Yay!', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  },
  name: 'user-view',
  components: { Spinner },
  computed: {
    // user () {
    //   return this.$store.state.users[this.$route.params.id]
    // }
  },
  data() {
    return {
      myArtists: this.$store.getters.artists
    }
  },
  // preFetch: fetchPosts,
  beforeMount () {
    fetchPosts(this.$store)
  }
}
</script>

<style lang="stylus">
.artists-overview-view
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
