import "./footer.css";

function Footer(){
    return(
        <>
        <footer>
            <h2 className="titulo">Everhome</h2>
            <ul className="grupoMedia"> 
                <li><a className="enlaceMedia" href="https://www.facebook.com" rel='noreferrer' target="_blank"><img src= "../img/facebook.png" alt= "Logo Facebook"></img></a></li>
                <li><a className="enlaceMedia" href="https://www.linkedin.com"  rel='noreferrer' target="_blank"><img src= "../img/linkedin.png" alt= "Logo Linkedin"></img></a></li>
                <li><a className="enlaceMedia" href="https://www.youtube.com" rel='noreferrer' target="_blank"><img src= "../img/youtube.png" alt= "Logo Youtube"></img></a></li>
                <li><a className="enlaceMedia" href="https://www.instagram.com" rel='noreferrer' target="_blank"><img src= "../img/instagram.png" alt= "Logo Instagram"></img></a></li>
            </ul>
        </footer>
        </>
    )
}

export default Footer