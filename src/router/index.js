import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/Home.vue'
import Item from '../views/Item.vue'
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
      children: [{
          path: '/item/:id(\\d+)',
          component: Item
        }]
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
