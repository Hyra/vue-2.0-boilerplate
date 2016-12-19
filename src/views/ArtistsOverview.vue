<template>
  <div class="artists-overview-view">
    <h1>Artists Overview</h1>
    <!-- <spinner :show="!user"></spinner> -->
    <p>
      <div v-for="item in myArtists" :key="item.id" :item="item">
        <router-link :to="{ name: 'artist', params: { id: item.id }}">{{ item.name }}</router-link>
      </div>
    </p>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'

function fetchPosts (store) {
  return store.dispatch('FETCH_POSTS', {})
}

export default {
  metaInfo: {
    title: 'Artists overview', // set a title
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
