import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppContextProvider } from './context/AppContextProvider'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppContextProvider>

  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AppContextProvider>

)
