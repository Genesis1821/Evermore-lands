import './propiedadesArt.css'
import chateau from'../img/chateau.jpg'
import arwuitectura from'../img/architecture.jpg'
import aley from '../img/alley.jpg'

function PropiedadesArt(img){
    
    return (
        <>        
        <div className="gridcontein">
        <div className="grid1">
            <h3 className="tituloProp">Article or post title</h3>
            <p>Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.</p>
        </div>
        <img className="grid2" src={chateau} alt="propiedad"></img>
        </ div>
        <div className="gridcontein">
        <div className="grid2">
            <h3 className="tituloProp">Article or post title</h3>
            <p>Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.</p>
        </div>
        <img className="grid1" src={arwuitectura} alt="propiedad"></img>
        </ div>
        <div className="gridcontein">
        <div className="grid1">
            <h3 className="tituloProp">Article or post title</h3>
            <p>Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.</p>
        </div>
        <img className="grid2" src={aley} alt="propiedad"></img>
        </ div>
        </>

    )
};
export default PropiedadesArt