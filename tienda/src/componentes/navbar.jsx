import React, { useState } from 'react';
import carrito from '../imagenes/carrito1.png';
import Registro from './registro';
import Login from './login';
import "../estilos/modal.css";


function NavBar(){
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    
    const handleOpenModal = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalContent(null);
    };


    return(
        <div className="NavBar">
            <h1>tienda</h1>
            <ul className="nav">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#" onClick={() => handleOpenModal("registro")}>Registrarse</a></li>
                <li><a href="#" onClick={() => handleOpenModal("login")}>Iniciar Sesion</a></li>
            </ul>
            <div className="carrito">
                <button>
                    <img src={carrito}/>
                </button>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content"> 
                        <button className="close-modal" onClick={handleCloseModal}> X </button>
                        {modalContent === "registro" && <Registro handleOpenModal= {handleOpenModal}/>}
                        {modalContent === "login" && <Login handleOpenModal= {handleOpenModal}/>}
                    </div>
                </div>
            )}
    
        </div>
    );
};

export default NavBar;
