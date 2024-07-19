import "./Footer/footer.css";
import face from '../img/facebook.png'
import insta from '../img/instagram.png'
import link from '../img/linkedin.png'
import yout from '../img/youtube.png'


function Footer(){
    return(
        <>
        <footer>
            <h2 className="titulo">Everhome</h2>
            <ul className="grupoMedia"> 
                <li><a className="enlaceMedia" href="https://www.facebook.com" rel='noreferrer' target="_blank"><img className="icons" src= {face} alt= "Logo Facebook"></img></a></li>
                <li><a className="enlaceMedia" href="https://www.linkedin.com"  rel='noreferrer' target="_blank"><img className="icons" src= {link} alt= "Logo Linkedin"></img></a></li>
                <li><a className="enlaceMedia" href="https://www.youtube.com" rel='noreferrer' target="_blank"><img className="icons" src= {yout} alt= "Logo Youtube"></img></a></li>
                <li><a className="enlaceMedia" href="https://www.instagram.com" rel='noreferrer' target="_blank"><img className="icons" src= {insta} alt= "Logo Instagram"></img></a></li>
            </ul>
        </footer>
        </>
    )
}

export default Footer