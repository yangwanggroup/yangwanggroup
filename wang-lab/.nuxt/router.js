import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a79b6324 = () => interopDefault(import('..\\pages\\achievements.vue' /* webpackChunkName: "pages/achievements" */))
const _43a64363 = () => interopDefault(import('..\\pages\\events.vue' /* webpackChunkName: "pages/events" */))
const _4bb5cbbb = () => interopDefault(import('..\\pages\\friends.vue' /* webpackChunkName: "pages/friends" */))
const _b9dd9918 = () => interopDefault(import('..\\pages\\join.vue' /* webpackChunkName: "pages/join" */))
const _4b75e93f = () => interopDefault(import('..\\pages\\members.vue' /* webpackChunkName: "pages/members" */))
const _0fc13d53 = () => interopDefault(import('..\\pages\\resume\\sunshuai.vue' /* webpackChunkName: "pages/resume/sunshuai" */))
const _169dffd7 = () => interopDefault(import('..\\pages\\resume\\zhangshuangfeng.vue' /* webpackChunkName: "pages/resume/zhangshuangfeng" */))
const _a1f22010 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a79b6324,
    name: "achievements"
  }, {
    path: "/events",
    component: _43a64363,
    name: "events"
  }, {
    path: "/friends",
    component: _4bb5cbbb,
    name: "friends"
  }, {
    path: "/join",
    component: _b9dd9918,
    name: "join"
  }, {
    path: "/members",
    component: _4b75e93f,
    name: "members"
  }, {
    path: "/resume/sunshuai",
    component: _0fc13d53,
    name: "resume-sunshuai"
  }, {
    path: "/resume/zhangshuangfeng",
    component: _169dffd7,
    name: "resume-zhangshuangfeng"
  }, {
    path: "/",
    component: _a1f22010,
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
