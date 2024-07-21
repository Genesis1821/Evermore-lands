import Navbar from "../componentes/navbar"
import Footer from "../componentes/footer"
import SingForm from "../componentes/form"
import './sing_up.css'


function Comentario(){
    return(
        <div className="cuerpoComentario">
        <Navbar />
        <SingForm />
        <Footer />
        </div>
    )
}

export default Comentario