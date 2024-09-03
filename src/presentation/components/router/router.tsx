import { Login } from '@/presentation/pages'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    }
  ])

  return <RouterProvider router={router} />
}

export default Router
