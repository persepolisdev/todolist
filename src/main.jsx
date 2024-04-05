import React from "react"
import ReactDOM from "react-dom/client"
import Routingpage from "./Pages/Routingpage.jsx"
import { BrowserRouter } from "react-router-dom"
import './index.css'
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routingpage />
    </BrowserRouter>
  </React.StrictMode>
)

