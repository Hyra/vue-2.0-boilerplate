import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItems, fetchIdsByType, fetchUser, searchByArtistName } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    artists: {}
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

  },

  getters: {
    artists (state, getters) {
      return state.artists;
    }
  }
})

export default store
