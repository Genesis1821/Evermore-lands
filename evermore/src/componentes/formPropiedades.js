
function FormPropiedades (){
    return(
    <>
    <form id="formularioPropiedades" action="/app.js" method="post">
            <div class="input">
                <label for="address" id="address-label">Direccion</label>
                <input type="text" name="address" id="address" autocomplete="address" required></input>
            </div>
            <div class="input">
                <label for="meroscuadrados" id="m2-label">Metros cuadrados</label>
                <input type="number" name="m2" id="m2" autocomplete="number" required></input>
            </div>
            <div class="input">
               <label for="email" id="email-label">Email</label>
               <input  type="email" name="email" id="email" autocomplete="email" required></input>
            </div>
            <div class="bar">
                <label id="mensaje">Mensaje</label>
                <textarea name="comment" id="comment" autocomplete="off"></textarea>
            </div>
            <button type="submit" id="submit" class="submit-button">Submit</button> 
        </form>
    </>
    )

};

export default FormPropiedades;