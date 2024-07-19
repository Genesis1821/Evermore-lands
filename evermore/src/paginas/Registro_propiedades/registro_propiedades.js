import Navbar from "../../componentes/Navbar/navbar"
import Footer from "../../componentes/footer"
import FormPropiedades from "../../componentes/FormularioPropiedades/formPropiedades"
//import Carrusel from "../../componentes/carrusel/carrusel"
import './registo_prpiedades.css'

function RegistroPropiedades(){
    return(
        <>
         <Navbar />
         <FormPropiedades />
         
         <Footer />
        </>
    )
}

export default RegistroPropiedades