import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Button from './components/button/Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App />
  </StrictMode>,
)
