export default function(router) {
  router.map({
    '/': {
      component: require('./views/index/index.vue')
    },
    '/appbar': {
      component: require('./views/appbar/index.vue')
    },
    '/container': {
      component: require('./views/container/index.vue')
    },
    '*': {
      component: require('./views/404/index.vue')
    }
  })
}
