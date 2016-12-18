// this is aliased in webpack config based on server/client build
import api from 'create-api'
import axios from 'axios';

// warm the front page cache every 15 min
if (api.cachedIds) {
  warmCache()
}

function warmCache () {
  fetchItems((api.cachedIds.top || []).slice(0, 30))
  setTimeout(warmCache, 1000 * 60 * 15)
}

function fetch (child) {
  const cache = api.cachedItems
  if (cache && cache.has(child)) {
    return Promise.resolve(cache.get(child))
  } else {
    return new Promise((resolve, reject) => {
      api.child(child).once('value', snapshot => {
        const val = snapshot.val()
        // mark the timestamp when this item is cached
        if (val) val.__lastUpdated = Date.now()
        cache && cache.set(child, val)
        resolve(val)
      }, reject)
    })
  }
}

export const searchByArtistName = () => {
  // commit('requestSearchResults')
  return new Promise((resolve, reject) => {
    axios.get('https://api.spotify.com/v1/search?q=' + 'rage' + '&type=artist&limit=50')
    .then(function (response) {
      // return response; //console.log(response);
      resolve(response.data);
    })
    .catch(function (error) {
      // console.log(error);
    });
  });
}

export const getArtistById = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.spotify.com/v1/artists/${id}`)
    .then(function (response) {
      // return response; //console.log(response);
      resolve(response.data);
    })
    .catch(function (error) {
      // console.log(error);
    });
  })
}

export function fetchIdsByType (type) {
  return api.cachedIds && api.cachedIds[type]
    ? Promise.resolve(api.cachedIds[type])
    : fetch(`${type}stories`)
}

export function fetchItem (id) {
  return fetch(`item/${id}`)
}

export function fetchItems (ids) {
  return Promise.all(ids.map(id => fetchItem(id)))
}

export function fetchPosts (ids) {
  return Promise.all(ids.map(id => fetchItem(id)))
}

export function fetchUser (id) {
  return fetch(`user/${id}`)
}

export function watchList (type, cb) {
  let first = true
  const ref = api.child(`${type}stories`)
  const handler = snapshot => {
    if (first) {
      first = false
    } else {
      cb(snapshot.val())
    }
  }
  ref.on('value', handler)
  return () => {
    ref.off('value', handler)
  }
}
