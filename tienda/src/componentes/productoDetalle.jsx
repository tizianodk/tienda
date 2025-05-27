import React from 'react';
import { useParams } from 'react-router-dom';
import "../estilos/productoDetalle.css";

function ProductoDetalle({ productos, agregarAlCarrito }) {
    const { id } = useParams();

    if (!productos || !Array.isArray(productos) || productos.length === 0) {
        return <div>Cargando...</div>;
    }

    const producto = productos.find((producto) => producto._id === id);

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }


    return (
        <div className="producto-detalle">
            <h2>{producto.nombre}</h2>
            <div className="carrousel">
                {Array.isArray(producto.imagenes) ? (
                    producto.imagenes.map((imagen, index) => (
                        <img key={index} src={`http://localhost:3000/uploads/${imagen}`} alt={`Imagen ${index + 1}`} />
                    ))
                ) : (
                    <img src={`http://localhost:3000/uploads/${producto.imagen}`} alt={producto.nombre} style={{borderRadius:"10px"}} />
                )}
            </div>
            <strong><p>Precio: ${producto.precio}</p></strong>
            <strong><p>Descripción: {producto.descripcion}</p></strong>
            <button onClick={ () => {agregarAlCarrito(producto)}} style={{backgroundColor:"green"}}>Agregar Al Carrito</button> 

        </div>
    );
}

export default ProductoDetalle;