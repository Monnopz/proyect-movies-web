import { createRouter, createWebHistory } from 'vue-router'

import homeRouter from '../modules/main/router'

const routes = [
  {
    path: '/',
    ...homeRouter
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    if(to.name === 'details-view') {
      return { top: 0 }
    }
    else if(to.name === 'home-view') {
      return { top: savedPosition?.top | 0 }
    }
  },
})

export default router
