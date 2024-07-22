import Navbar from "../componentes/navbar"
import Footer from "../componentes/footer"
import PropiedadesArt from "../componentes/propiedadesArtIzq"
import Buscador from "../componentes/buscador"
import './propiedades.css'

function Propiedades(){
    return(
        <div className="bodyPropiedades">
         <Navbar />
         <Buscador />
         <PropiedadesArt />
         <Footer />
        </div>
    )
}

export default Propiedades 