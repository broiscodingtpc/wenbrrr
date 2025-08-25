import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import { AppLayout } from './modules/layout/AppLayout'
import { LandingPage } from './modules/landing/LandingPage'
import { RegistrationPage } from './modules/registration/RegistrationPage'
import { FeaturesPage } from './modules/features/FeaturesPage'
import { WhitepaperPage } from './modules/whitepaper/WhitepaperPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'register', element: <RegistrationPage /> },
      { path: 'features', element: <FeaturesPage /> },
      { path: 'whitepaper', element: <WhitepaperPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


