import { lazy } from 'react'

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/page2',
    name: 'page2',
    exact: true,
    component: lazy(() => import('@/pages/Page2')),
  },
]

export default routes
