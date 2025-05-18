import React from 'react';
import {BrowserRouter, Routes, Route,useLocation} from 'react-router-dom';
import Inicio from './componentes/inicio.jsx';
import NavBar from './componentes/navbar.jsx';
import Registro from './componentes/registro';
import Login from './componentes/login';
import Footer from './componentes/footer.jsx';
import './estilos/modal.css';
import './estilos/inicio.css';
import './estilos/navbar.css';
import './estilos/footer.css';
import Producto from './componentes/productos.jsx';


function App(){

    const location = useLocation(); 
    const paginaLogin = location.pathname === '/login';
    const paginaRegistro = location.pathname === '/registro';


    return(
      <>          
        <NavBar/>
            <Routes>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/" element={<Registro/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/productos" element={<Producto/>}/>
            </Routes>
        {!paginaLogin && !paginaRegistro && <Footer/>}
      </>

    )
}

export default App;
