<template>
  <div class="user-view">
    <!-- <spinner :show="!user"></spinner> -->
    Four oh four
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'

// function fetchUser (store) {
//   return store.dispatch('FETCH_USER', {
//     id: store.state.route.params.id
//   })
// }

export default {
  name: 'user-view',
  components: { Spinner },
  computed: {
    // user () {
    //   return this.$store.state.users[this.$route.params.id]
    // }
  },
  // preFetch: fetchUser,
  beforeMount () {
    // fetchUser(this.$store)
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
