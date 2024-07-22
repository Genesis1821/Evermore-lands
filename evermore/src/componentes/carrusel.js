import React from 'react';
import flechaA from '../img/flecha-izquierda.png'
import flechaS from '../img/flecha-derecha.png'
import './carrusel.css'


function Carrusel({imagenes}){
    //Variables y estados
    const [imagennActual, setImagenActual] = React.useState(0);
    const cantidad = imagenes.length;
    //Verificacion de que el array no esta vacio
    if(!Array.isArray(imagenes) || cantidad === 0)
        return;
    
    const siguienteImagen = ()=>{
        setImagenActual(imagennActual === cantidad - 1 ? 0 : imagennActual + 1)
    }
        const anteriorImagen = ()=>{
            setImagenActual(imagennActual === 0 ? cantidad - 1 : imagennActual -1)
        
    }
   return(
    <div className='contenedor'>
 <button onClick={anteriorImagen} ><img src={flechaA} alt='Flecha anterior' width={50}></img></button>
 {imagenes.map((imagen, index)=>{
    return <div>{imagennActual === index && (<img key={index} src={imagen} alt='imagen Carrusel' className='imagenCarrusel' ></img>
    )}
                </div>
 } )}
 <button onClick={siguienteImagen} ><img src={flechaS} alt='Flecha siguiente' width={50}></img></button>
    
    </div>
   )
     
};

export default Carrusel;