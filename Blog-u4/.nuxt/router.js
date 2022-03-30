import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ffc9be72 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _4ca9c44b = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _4cbe4415 = () => interopDefault(import('../pages/admin/newPost.vue' /* webpackChunkName: "pages/admin/newPost" */))
const _1521c1b6 = () => interopDefault(import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _51e89ed4 = () => interopDefault(import('../pages/posts/_id/editPost.vue' /* webpackChunkName: "pages/posts/_id/editPost" */))
const _513d6d72 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _ffc9be72,
    name: "admin"
  }, {
    path: "/posts",
    component: _4ca9c44b,
    name: "posts"
  }, {
    path: "/admin/newPost",
    component: _4cbe4415,
    name: "admin-newPost"
  }, {
    path: "/posts/:id",
    component: _1521c1b6,
    name: "posts-id"
  }, {
    path: "/posts/:id/editPost",
    component: _51e89ed4,
    name: "posts-id-editPost"
  }, {
    path: "/",
    component: _513d6d72,
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
