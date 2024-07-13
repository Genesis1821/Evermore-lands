import Navbar from "../componentes/navbar"
import Footer from "../componentes/footer"
import PropiedadesArt from "../componentes/propiedadesArtIzq"
import Buscador from "../componentes/buscador"

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