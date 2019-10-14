export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: {
      title: 'Home',
      icon: 'fas fa-home fa-fw',
      drawInMenu: true
    }
  },

  {
    path: '/todos',
    name: 'todos',
    component: () => import(/* webpackChunkName: "todos" */ '@/views/Todos.vue'),
    meta: {
      title: 'Todos',
      icon: 'fas fa-table fa-fw',
      drawInMenu: true
    }
  },

  {
    path: '*',
    name: 'error404',
    component: () => import(/* webpackChunkName: "error404" */ '@/views/Error404.vue'),
    meta: {
      drawInMenu: false
    }
  }
]
