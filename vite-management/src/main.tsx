import * as React from "react"
import ReactDOM from 'react-dom/client'
//Style initialization
import "reset-css"
//UI

//Global css
import "@/assets/styles/global.scss"
import App from "./App"
import { BrowserRouter } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>,
)
