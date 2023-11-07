import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './pages/Routes/routes'
import AllContext from './Context/AllContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllContext><RouterProvider router={router}></RouterProvider></AllContext>
  </React.StrictMode>,
)
