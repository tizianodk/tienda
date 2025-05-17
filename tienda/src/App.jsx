import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './componentes/inicio.jsx';
import NavBar from './componentes/navbar.jsx';
import Registro from './componentes/registro';
import Login from './componentes/login';
import Footer from './componentes/footer.jsx';
import './estilos/modal.css';
import './estilos/inicio.css';
import './estilos/navbar.css';
import './estilos/footer.css';


function App(){
    return(
      <>          
      <NavBar/>
          <Routes>
              <Route path="/" element={<Inicio/>}/>
              <Route path="/" element={<Registro/>}/>
              <Route path="/" element={<Login/>}/>
          </Routes>
          <Footer/>
      </>

    )
}

export default App;
