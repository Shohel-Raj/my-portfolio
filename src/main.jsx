import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter, RouterProvider } from 'react-router'
// import { router } from './Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
    {/* <RouterProvider router={router}>
      <App />
    </RouterProvider> */}
    
  </StrictMode>,
)
