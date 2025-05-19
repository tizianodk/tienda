import React, {useState} from 'react';
import { Routes, Route,useLocation, Navigate} from 'react-router-dom';
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
import AdminRoute from "./componentes/adminRoute.jsx"
import AdminPanel from './componentes/admin.jsx';

function App(){

    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation(); 
    const paginaLogin = location.pathname === '/login';
    const paginaRegistro = location.pathname === '/registro';

    // const ProtectedRoute = ({ children }) => {
    //     if (!isAuthenticated) {
    //         return <Navigate to="/login" replace/>;
    //     }
    //     return children;
    // };


    return(
      <>          
        <NavBar/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/" element={<Registro/>}/>
                <Route 
                    path="" 
                    element={<Login />}
                />
                <Route 
                    path="/productos" 
                    element={
                    
                        <Producto/>
                    
                    }
                />
                <Route 
                  
                  path='/admin'
                  element={
               
                    <AdminRoute> 
                    <AdminPanel/>
                       
                    </AdminRoute>
                  }
                
                
                />



            </Routes>
        {!paginaLogin && !paginaRegistro && <Footer/>}
      </>

    )
}

export default App;
