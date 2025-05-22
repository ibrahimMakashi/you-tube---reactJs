import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import Watch from './components/Watch.jsx'
import SearchPage from './components/SearchPage.jsx'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path: '/watch/:videoId',
        element: <Watch/>
      },
      {
        path:'/search/:query',
        element: <SearchPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={appRouter}></RouterProvider>
)
