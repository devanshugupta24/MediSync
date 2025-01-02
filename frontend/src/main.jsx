import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'



// BrowserRouter-It enables seamless navigation between different views or pages without requiring a full page reload.
//AppContextProvider- provides the doctors data to all components wrapped within it.
createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <AppContextProvider>  
      <App />
    </AppContextProvider>
  </BrowserRouter>,
)
