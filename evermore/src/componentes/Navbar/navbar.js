import { Link} from 'react-router-dom';
import './navbar.css'

function Navbar(){
    
    return(
        <>
        <nav>
            <h2>Everhome</h2>
            <ul className="listPages">
                <Link to={"/"} className='navEnlace'>Landing Page</Link>
                <Link to={"/propiedades"} className='navEnlace'>Propiedades</Link>
                <Link to={"/registro_propiedades"} className='navEnlace'>Registro de propiedades</Link>
                <Link to={"/registro_personas"} className='navEnlace'>Inicion de sesion</Link>

            </ul>
        </nav>
        </>
    )
}

export default Navbar