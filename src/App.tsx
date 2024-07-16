import 'regenerator-runtime/runtime'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from '@components/Layout/Layout'
import { MainPage } from '@pages/MainPage'
import { StorePage } from '@pages/StorePage'
import { MenuPage } from '@pages/MenuPage'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/store',
        element: <StorePage />,
      },
      {
        path: '/order/:storeId/menu',
        element: <MenuPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
