import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Inicio from './componentes/inicio.jsx';
import NavBar from './componentes/navbar.jsx';
import Registro from './componentes/registro';
import Login from './componentes/login';
import Footer from './componentes/footer.jsx';
import './estilos/modal.css';
import './estilos/inicio.css';
import './estilos/navbar.css';
import './estilos/footer.css';
import './estilos/productos.css';
import Productos from './componentes/productos.jsx';
import AdminPanel from './componentes/admin.jsx';
import ProductoDetalle from './componentes/productoDetalle.jsx';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [rol, setRol] = useState(null);
    const [productos, setProductos] = useState([]);
    const location = useLocation();
    const paginaAdmin = location.pathname === '/admin';
    const paginaLogin = location.pathname === '/login';
    const paginaRegistro = location.pathname === '/registro';

    const [setShowModal] = useState(false);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch("http://localhost:3000/productos");
                if (!response.ok) {
                    throw new Error("Error al obtener los productos");
                }
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };
    
        fetchProductos();
    }, []);
    
    const handleLogout = () => {
        setIsAuthenticated(false);
        setRol(null);
        localStorage.removeItem("userId");
        localStorage.removeItem("nombre");
        localStorage.removeItem("rol");
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const ProtectedRoute = ({ children, requiredRole }) => {
        

        if (requiredRole && rol !== requiredRole) {
            return <Navigate to="/" replace />;
        }

        return children;
    };

    console.log("isAuthenticated:", isAuthenticated);
    console.log("rol:", rol);

    return (
        <>          
            <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} rol={rol} />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/registro" element={<Registro handleCloseModal={handleCloseModal} />} />
                <Route 
                    path="/login" 
                    element={<Login setIsAuthenticated={setIsAuthenticated} setRol={setRol} />}
                />
                <Route 
                    path="/productos" 
                    element={
                        <ProtectedRoute requiredRole="cliente">
                            <Productos />
                        </ProtectedRoute>
                    }
                />
                <Route
                path='/producto/:id'
                element={<ProductoDetalle productos = {productos}/>}
                />
                <Route 
                    path="/admin"
                    element={
                        <ProtectedRoute requiredRole="admin">
                            <AdminPanel />
                        </ProtectedRoute>
                    }
                />
            </Routes>
            {!paginaLogin && !paginaRegistro && !paginaAdmin && <Footer />}
        </>
    );
}

export default App;