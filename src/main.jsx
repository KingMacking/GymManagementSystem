import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { fireStoreInit } from './firebase/config'
import './index.css'

fireStoreInit()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
