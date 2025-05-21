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

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [rol, setRol] = useState(null);
    const location = useLocation(); 
    const paginaLogin = location.pathname === '/login';
    const paginaRegistro = location.pathname === '/registro';
    const [setShowModal] = useState(false);


    const handleLogout = () => {
        setIsAuthenticated(false);
        setRol(null);
        localStorage.removeItem("userId");
        localStorage.removeItem("nombre");
        localStorage.removeItem("rol");
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const ProtectedRoute = ({ children, requiredRole }) => {
        
        if (requiredRole && rol !== requiredRole) {
            return <Navigate to="/" replace />;
        }
        return children;
    };


    return(
      <>          
        <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} rol={rol}/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/registro" element={<Registro handleCloseModal={handleCloseModal}/>}/>
                <Route 
                    path="/login" 
                    element={<Login setIsAuthenticated={setIsAuthenticated} setRol={setRol}/>}
                />
                <Route 
                    path="/productos" 
                    element={
                        <ProtectedRoute requiredRole="cliente">
                            <Producto/>
                        </ProtectedRoute>
                    }
                />
                <Route 
                
                  path='/admin'
                  element={
                
                    <ProtectedRoute requiredRole="admin">
                        <AdminPanel/>
                    </ProtectedRoute>
                  }
                
                
                />
            </Routes>
        {!paginaLogin && !paginaRegistro && <Footer/>}
      </>

    )
}

export default App;
