import React from 'react'
import ReactDOM from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp'
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  // Ayuda a identificar problemas componentes solo DEV
  <React.StrictMode> 
    <GiftExpertApp />
  </React.StrictMode>
)
