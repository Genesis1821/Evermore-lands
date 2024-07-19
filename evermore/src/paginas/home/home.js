import Navbar from "../../componentes/Navbar/navbar"
import Footer from "../../componentes/footer"
import Articulo from "../../componentes/ArticuloHome/artHome";
import './home.css'

function LandingPage(){
    return(
        <>
         <Navbar />
         <Articulo />
         <Footer />
        </>
    )
}

export default LandingPage