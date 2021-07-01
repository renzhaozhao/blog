import { lazy } from 'react'

export const ROUTE_PATH = import.meta.env.VITE_ROUTE_PATH

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
