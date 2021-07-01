import { lazy } from 'react'

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/post/:id',
    name: 'post',
    exact: true,
    component: lazy(() => import('@/pages/Post')),
  },
]

export default routes
