import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './styles/global.css'
import { ContactContextProvider } from './contexts/contactContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactContextProvider>
      <App />
    </ContactContextProvider>
  </StrictMode>,
)
