import './buscador.css'

function Buscador(){
    return(
        <>
        <div className="inputBuscador">
        <input type="search" id="buscador" name="search"  placeholder="Ingresa direccion"autocomplete="address" required></input>
        <button type="submit" id="boton" class="submit-button">Bucar</button> 
        </div>
        </>
    )
};

export default Buscador