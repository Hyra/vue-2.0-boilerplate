import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItems, fetchIdsByType, fetchUser, searchByArtistName, getArtistById } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    artists: {},
    currentArtist: {}
  },

  actions: {
    FETCH_POSTS: ({ commit, state }, {}) => {
      // only fetch posts that we don't already have.
      // ids = ids.filter(id => !state.posts[id])
      // if (ids.length) {
        return searchByArtistName().then(artists => commit('SET_POSTS', { artists }));
      // } else {
        // return Promise.resolve()
      // }
    },
    FETCH_ARTIST: ({ commit, state}, {id}) => {
      return getArtistById(id).then(artist => commit('SET_ARTIST', { artist }));
    }
  },

  mutations: {

    SET_POSTS: (state, { artists }) => {
      console.log(artists);
      artists.artists.items.forEach(post => {
        if (post) {
          // console.log(post);
          Vue.set(state.artists, post.id, post)
        }
      })
    },

    SET_ARTIST: (state, { artist }) => {
      Vue.set(state.currentArtist, artist.id, artist);
    }

  },

  getters: {
    artists (state, getters) {
      return state.artists;
    },
    currentArtist(state, getters) {
      return state.currentArtist;
    }
  }
})

export default store
