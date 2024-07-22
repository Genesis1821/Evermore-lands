import './propiedadesArt.css'
import chateau from'../img/chateau.jpg'
import arwuitectura from'../img/architecture.jpg'
import aley from '../img/alley.jpg'

function PropiedadesArt(img){
    
    return (
        <>        
        <div className="gridcontein">
        <div className="grid1">
            <h3 className="tituloProp">Calle Falsa 123, Piso 4, Departamento B, 28001 Madrid, España</h3>
            <p className="squareMeters">200m2</p>
            <p className="kindProperty">Apartamento tipo estudio </p>
            <p className='actualState'>Estado actual, necesita reparaciones </p>
            <p className='propertyDesciption'>Apartamento con dos habitaciones, cocina remodelada y estacin de lavanderia</p>
           </div>
        <img className="grid2" src={chateau} alt="propiedad"></img>
        </ div>
        <div className="gridcontein">
        <div className="grid2">
        <h3 className="tituloProp">Avenida Imaginaria 456, Colonia Inventada, 06000 Ciudad de México, México</h3>
            <p className="squareMeters">500m2</p>
            <p className="kindProperty">Casa de dos plantas </p>
            <p className='actualState'>Estado actual, remplazo del aire acondicionado </p>
            <p className='propertyDesciption'>Casa con amplios cuartos, cocina totalmente equipada</p>
           
         </div>
        <img className="grid1" src={arwuitectura} alt="propiedad"></img>
        </ div>
        <div className="gridcontein">
        <div className="grid1">
        <h3 className="tituloProp">Rua Inexistente 789, Bairro Fantasia, 01000-000 São Paulo, Brasil</h3>
            <p className="squareMeters">7500m2</p>
            <p className="kindProperty">Casa con Piscina y patio  trasero</p>
            <p className='actualState'>En excelente estado actual </p>
            <p className='propertyDesciption'>5 Cuartos con 3 baños, amplia sala de estar y patio con hermosos jardines </p>
           
         </div>
        <img className="grid2" src={aley} alt="propiedad"></img>
        </ div>
        <div className="gridcontein">
        <div className="grid2">
        <h3 className="tituloProp">Avenida Imaginaria 456, Colonia Inventada, 06000 Ciudad de México, México</h3>
            <p className="squareMeters">500m2</p>
            <p className="kindProperty">Casa de dos plantas </p>
            <p className='actualState'>Estado actual, remplazo del aire acondicionado </p>
            <p className='propertyDesciption'>Casa con amplios cuartos, cocina totalmente equipada</p>
           
         </div>
        <img className="grid1" src={arwuitectura} alt="propiedad"></img>
        </ div>
        <div className="gridcontein">
        <div className="grid1">
        <h3 className="tituloProp">Rua Inexistente 789, Bairro Fantasia, 01000-000 São Paulo, Brasil</h3>
            <p className="squareMeters">7500m2</p>
            <p className="kindProperty">Casa con Piscina y patio  trasero</p>
            <p className='actualState'>En excelente estado actual </p>
            <p className='propertyDesciption'>5 Cuartos con 3 baños, amplia sala de estar y patio con hermosos jardines </p>
           
         </div>
        <img className="grid2" src={aley} alt="propiedad"></img>
        </ div>
        </>

    )
};
export default PropiedadesArt