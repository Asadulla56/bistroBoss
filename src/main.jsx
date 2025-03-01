import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './route/router.jsx'
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Context/AuthContext/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelmetProvider>
  <AuthProvider>
  <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  </AuthProvider>
  </HelmetProvider>
  </StrictMode>,
)
