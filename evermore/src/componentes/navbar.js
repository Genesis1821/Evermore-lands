

function Navbar(){
    return(
        <>
        <nav>
            <h2>Everhome</h2>
            <ul>
                <li><a className="navEnlace" href="../paginas/home.js">Landing Page</a></li>
                <li><a className="navEnlace" href="../paginas/propiedades.js">Propiedades</a></li>
                <li><a className="navEnlace" href="../paginas/registro_propiedades.js">Registro de propiedades</a></li>
                <li><a className="navEnlace" href="../paginas/sing_up.js">Inicion de sesion</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar