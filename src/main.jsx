import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Todo from './pages/Todo'
import Login from './pages/Login'
import Register from './pages/Register'
import App from './App'

const router = createBrowserRouter([
  {
    path:'',
    element:<Layout />,
    children:[
      {path:'/',
        element:<Todo />
      },
      {
        path:'login',
        element:<Login />

      },
      {
        path:'register',
        element:<Register />
      },
      {
        path:'*',
        element:<h1>Not Found</h1>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  
<>
<RouterProvider router={router}>
<App />
</RouterProvider>

</>  
  
  )
