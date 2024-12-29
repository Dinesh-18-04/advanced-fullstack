import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Default from './components/default.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Default />
  </StrictMode>,
)
