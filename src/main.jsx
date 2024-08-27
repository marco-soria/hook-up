import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { HooksApp } from './HooksApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <HooksApp />
    </React.StrictMode>,
  </BrowserRouter>
)
