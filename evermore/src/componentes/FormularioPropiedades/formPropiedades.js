import './formPropiedades.css'

function FormPropiedades (){
    return(
    <>
    <form id="formularioPropiedades" action="/app.js" method="post">
            <div className="input">
                <label for="address" id="address-label">Direccion</label>
                <input type="text" name="address" id="address" autocomplete="address" required></input>
            </div>
            <div className="input">
                <label for="meroscuadrados" id="m2-label">Metros cuadrados</label>
                <input type="number" name="m2" id="m2" autocomplete="number" required></input>
            </div>
            <div className="input">
               <label for="estado" id="estado-label">Tipo de Propiedad</label>
               <select className="select"> 
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
                <option value="local-comercial">Local Comercial</option>
                <option value="terreno">Terreno</option>

               </select>
            <div className="input">
                <label for="Estado Actual" id="estado-label">Estado Actual</label>
                <input type="text" name="estado-acual" id="estado" autocomplete="off" required></input>
            </div>   
            </div>
            <div className="bar">
                <label id="mensaje">Descripcion de la Propiedad</label>
                <textarea name="comment" id="descripcion" autocomplete="off"></textarea>
            </div>

            <button type="submit" id="submit" className="submit-button">Submit</button> 
        </form>
    </>
    )

};

export default FormPropiedades;