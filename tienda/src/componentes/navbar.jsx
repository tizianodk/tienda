import React, { useState } from 'react';
import carrito from '../imagenes/carrito1.png';
import Registro from './registro';
import Login from './login';
import "../estilos/modal.css";
import { href, Link } from 'react-router-dom';
import Logo from '../imagenes/logo.png';



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
            <img src={Logo} className='logo' />
            <ul className="nav">
                <li> <Link to= "/">Inicio</Link></li>
                <li> <Link to= "/productos">Productos</Link></li>
                <li> <Link to= "/" onClick={() => handleOpenModal("registro")}> Registrarse</Link></li>
            </ul>
            <div className="carrito">
                <button onClick={() => handleOpenModal("carrito")}>
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
