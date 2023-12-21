import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './AppLol.jsx'
import './index.css'
import { ApiLolProvider } from './contexts/ApiLolContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiLolProvider>
        <App/>
    </ApiLolProvider>
  </React.StrictMode>,
)
