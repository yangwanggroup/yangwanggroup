import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4bea2e66 = () => interopDefault(import('..\\pages\\achievements.vue' /* webpackChunkName: "pages/achievements" */))
const _05c45dfc = () => interopDefault(import('..\\pages\\events.vue' /* webpackChunkName: "pages/events" */))
const _65fd9cd3 = () => interopDefault(import('..\\pages\\join.vue' /* webpackChunkName: "pages/join" */))
const _7e1fe100 = () => interopDefault(import('..\\pages\\members.vue' /* webpackChunkName: "pages/members" */))
const _49a7b279 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/achievements",
    component: _4bea2e66,
    name: "achievements"
  }, {
    path: "/events",
    component: _05c45dfc,
    name: "events"
  }, {
    path: "/join",
    component: _65fd9cd3,
    name: "join"
  }, {
    path: "/members",
    component: _7e1fe100,
    name: "members"
  }, {
    path: "/",
    component: _49a7b279,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
