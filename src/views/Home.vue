<template>
  <div class="user-view">
    <h1>Homepage</h1>
    <!-- <spinner :show="!user"></spinner> -->
    <h5>List of posts</h5>
    <router-link to="/item/13150144">Item</router-link>
    xx
    <div v-for="item in myArtists" :key="item.id" :item="item">{{ item.name }}<br /></div>
      <router-view></router-view>
    zz
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
.user-view
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