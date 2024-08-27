// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '@/views/NotFoundView.vue'
import Append from '@/views/Append.vue'
import Home from '@/views/Home.vue'
import Detail from '@/views/Detail.vue'

import nProgress from 'nprogress'
import EventService from '@/services/EventService'
import { useEventStore } from '@/stores/event'

export function createAppRouter(pageLimit: (number | null)[]) {
 const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/Append',
        name: 'Append',
        component: Append
      },
      {
        path: '/Detail',
        name: 'Detail',
        component: Detail
      },
      {
        path: '/404/:resource',
        name: '404-resource',
        component: NotFoundView,
        props: true
      },
      {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFoundView
      },
    ],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
      return { top: 0 }
      }
    }
  })
  router.beforeEach(() => {
    nProgress.start()
  })
  router.afterEach(() => {
    nProgress.done()
  })
  return router
}