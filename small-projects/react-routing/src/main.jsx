import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'


let allRoutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/services',
      element:<Services/>
    },
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allRoutes}/>
  </StrictMode>
)
