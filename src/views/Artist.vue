<template>
  <div class="artist-view" v-if="artist">

    <h1>{{ artist.name }}</h1>

    <br /><br />

    <div id="artist-image">
      <img :src="artist.images[0].url" width="120" />
    </div>

    <h3>Genres</h3>
    <ul>
      <li v-for="genre in artist.genres">
        {{ genre }}
      </li>
    </ul>

  </div>
</template>

<script>

function fetchArtist (store) {
  return store.dispatch('FETCH_ARTIST', {
    id: store.state.route.params.id
  })
}

export default {
  name: 'artist-view',
  computed: {
    artist() {
      return this.$store.state.currentArtist[this.$route.params.id]
    } 
  },
  // preFetch: fetchArtist,
  beforeMount() {
    fetchArtist(this.$store)
  }
}
</script>

<style lang="sass" scoped>
.artist-view {
  background-color: #fff;
  padding: 1.8em 2em 1em;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  }
  h1 {
    display: inline;
    font-size: 1.5em;
    margin: 0;
    margin-right: .5em;
  }
  .host, .meta, .meta a {
    color: #999;
  }
  .meta a {
    text-decoration: underline;
  }
</style>
