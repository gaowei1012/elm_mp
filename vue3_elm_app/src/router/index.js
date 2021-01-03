import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/register'),
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/login'),
  },
  {
    path: '/',
    name: 'layout',
    // route level code-splitting
    // this generates a separate chunk (layout.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "layout" */ '../views/layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (home.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '../views/home'),
      },
      {
        path: '/order',
        name: 'order',
        // route level code-splitting
        // this generates a separate chunk (order.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "order" */ '../views/order'),
      },
      {
        path: '/mine',
        name: 'mine',
        // route level code-splitting
        // this generates a separate chunk (mine.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "mine" */ '../views/mine'),
      },
      {
        path: '/address',
        name: 'address',
        // route level code-splitting
        // this generates a separate chunk (address.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "address" */ '../views/address'),
      },
      {
        path: '/addAddress',
        name: 'addAddress',
        // route level code-splitting
        // this generates a separate chunk (addAddress.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "addAddress" */ '../views/address/add'),
      },
      {
        path: '/editAddress',
        name: 'editAddress',
        // route level code-splitting
        // this generates a separate chunk (editAddress.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "editAddress" */ '../views/address/edit'),
      },
      {
        path: '/changePassword',
        name: 'changePassword',
        // route level code-splitting
        // this generates a separate chunk (changePassword.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "changePassword" */ '../views/changePassword'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
