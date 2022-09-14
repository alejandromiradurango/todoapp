import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextApp } from './contexts/ContextApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApp>
      <App />
    </ContextApp>
  </React.StrictMode>
)
