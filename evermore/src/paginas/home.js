import Navbar from "../componentes/navbar"
import Footer from "../componentes/footer"
import Articulo from "../componentes/artHome"
import './home.css'

function LandingPage(){
    return(
        <div className="cuerpoLandind">
         <Navbar />
        <Articulo />
         <Footer />
        </div>
    )
}

export default LandingPage