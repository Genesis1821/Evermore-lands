import Navbar from "../../componentes/navbar"
import Footer from "../../componentes/Footer/footer"
import PropiedadesArt from "../../componentes/propiedadesArtIzq"
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