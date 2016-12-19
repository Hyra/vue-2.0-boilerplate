import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

import Home from '../views/Home.vue'
import ArtistsOverview from '../views/ArtistsOverview.vue'
import Artist from '../views/Artist.vue'
import Fourohfour from '../views/Fourohfour.vue'

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [{
      path: '/',
      component: Home,
      beforeEnter (route, redirect, next) {
        // console.log('index route hook beforeEnter', route)
        next()
      },
    },
    {
      path: '/artists',
      component: ArtistsOverview,
    },
    {
      name: 'artist',
      path: '/artist/:id',
      component: Artist
    },
    {
      path: '*',
      component: Fourohfour
    }]
  })

router.beforeEach((route, redirect, next) => {
    // console.log('global hook beforeEach', route)
    next()
})

router.afterEach((route, redirect) => {
    // console.log('global hook afterEach', route)
})

export default router
