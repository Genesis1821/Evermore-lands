import Navbar from "../../componentes/Navbar/navbar"
import Footer from "../../componentes/footer"
import PropiedadesArt from "../../componentes/ArticuloPropiedades/propiedadesArtIzq"
import Buscador from "../../componentes/Buscador/buscador"

function Propiedades(){
    return(
        <>
         <Navbar />
         <Buscador />
         <PropiedadesArt />
     
         <Footer />
        </>
    )
}

export default Propiedades 