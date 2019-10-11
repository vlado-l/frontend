export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    drawInMenu: true,
    meta: {
      title: 'Home',
      icon: 'fas fa-home fa-fw'
    }
  },

  {
    path: '/todos',
    name: 'todos',
    component: () => import(/* webpackChunkName: "todos" */ '@/views/Todos.vue'),
    drawInMenu: true,
    meta: {
      title: 'Todos',
      icon: 'fas fa-table fa-fw'
    }
  },

  {
    path: '*',
    name: 'error404',
    component: () => import(/* webpackChunkName: "error404" */ '@/views/Error404.vue'),
    drawInMenu: false
  }
]
