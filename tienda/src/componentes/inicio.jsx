import React, { useEffect, useState } from 'react';
import "../estilos/inicio.css";
import imagen1 from '../imagenes/imagen1.png';
import imagen2 from '../imagenes/imagen2.png';
import imagen3 from '../imagenes/imagen3.png';
import imagen4 from '../imagenes/imagen4.png';
import imagen5 from '../imagenes/imagen5.png';

function Inicio() {
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [isTransitioning, setIsTransitioning] = useState(true);

    const imagenes = [
        imagen1,
        imagen2,
        imagen3,
        imagen4,
        imagen5,
    ];

    
    const extendedImages = [imagenes[imagenes.length - 1], ...imagenes];

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 2500);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handlePrev = () => {
        if (currentIndex === 0) {
            setIsTransitioning(false);
            setCurrentIndex(extendedImages.length - 2);
            setTimeout(() => {
                setIsTransitioning(true);
            }, 0);
        } else {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex === extendedImages.length - 1) {
            setIsTransitioning(false);
            setCurrentIndex(1); 
            setTimeout(() => {
                setIsTransitioning(true);
            }, 0);
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <div className="inicio">
            <div className="carousel">
                <div
                    className="carousel-images-container"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                    }}
                >
                    {extendedImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Imagen ${index + 1}`}
                            className="carousel-image"
                        />
                    ))}
                </div>
                <button className="prev" onClick={handlePrev}>
                    &#10094;
                </button>
                <button className="next" onClick={handleNext}>
                    &#10095;
                </button>
            </div>
            <div className='texto'>
                <h1 className='titulo'>Bienvenid@ a nuestra tienda</h1>
                <p className='descripcion'>Aquí encontrarás una variedad de productos para satisfacer tus necesidades.</p>
                <p className='descripcion'>¡Explora nuestra colección y encuentra lo que más te gusta!</p>
                <p className='descripcion'>¡No olvides registrarte para acceder a todos los productos!</p>
                <p className='descripcion'>¡Contáctanos si tienes alguna pregunta o necesitas asistencia!</p>
                <p className='descripcion'>¡Gracias por elegir nuestra tienda!</p>
            </div>
        </div>
    );
}

export default Inicio;