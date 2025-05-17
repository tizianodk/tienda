import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './componentes/navbar.jsx'
import "./estilos/navbar.css"
import Footer from './componentes/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <Footer/>
  </StrictMode>,
)
