import Navbar from "../componentes/navbar"
import Footer from "../componentes/footer"
import FormPropiedades from "../componentes/formPropiedades"
import Carrusel from "../componentes/carrusel"
import './registo_prpiedades.css'
import fachada from '../img/architecture.jpg'
import constuccion from '../img/construction.jpg'
import casa from '../img/casa1.jpg'
import balcon from '../img/balcones.jpg'
import piscina from '../img/casaPiscina.jpg'

function RegistroPropiedades(){
    const imagenesSlider =[fachada,casa, balcon, constuccion, piscina]
    return(
        <div className="bodyRegistroP">
         <Navbar />
         <FormPropiedades />
         <Carrusel imagenes={imagenesSlider} />
         <Footer />
        </div>
    )
}

export default RegistroPropiedades