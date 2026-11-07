import type { ComponentType } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'

/** Code-splits a page: its chunk loads only when the route is first visited. */
const lazyPage = (load: () => Promise<{ default: ComponentType }>) => async () => ({
  Component: (await load()).default,
})

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'services', lazy: lazyPage(() => import('@/pages/ServicesPage')) },
      { path: 'about', lazy: lazyPage(() => import('@/pages/AboutPage')) },
      { path: 'gallery', lazy: lazyPage(() => import('@/pages/GalleryPage')) },
      { path: 'contact', lazy: lazyPage(() => import('@/pages/ContactPage')) },
      { path: '*', lazy: lazyPage(() => import('@/pages/NotFoundPage')) },
    ],
  },
])
