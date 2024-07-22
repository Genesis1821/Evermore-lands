import { Link} from 'react-router-dom';
import './navbar.css'

function Navbar(){
    
    return(
        <>
        <nav>
            <h2>Everhome</h2>
            <ul className="listPages">
                <Link to={"/"} className='navEnlace'>Inicio</Link>
                <Link to={"/propiedades"} className='navEnlace'>Propiedades</Link>
                <Link to={"/registroPropiedades"} className='navEnlace'>Registro de propiedades</Link>
                <Link to={"/registroPersonas"} className='navEnlace'>Comentario</Link>

            </ul>
        </nav>
        </>
    )
}

export default Navbar