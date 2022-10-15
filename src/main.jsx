import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import { PakemonProvider } from './pakemon'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PakemonProvider>
      <App />
    </PakemonProvider>
  </React.StrictMode>
)
