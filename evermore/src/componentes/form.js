import './sing_up.css'

function SingForm(){
    return(
        <>
     <form id="formularioPersonas" action="/app.js" method="post">
            <div className="input">
                <label for="name" id="name-label">Name</label>
                <input type="text" name="name" id="name" autocomplete="given-name" required></input>
            </div>
            <div className="input">
                <label for="las-name" id="name-label">Last Name</label>
                <input type="text" name="last-name" id="name" autocomplete="given-name" required></input>
            </div>
            <div className="input">
               <label for="email" id="email-label">Email</label>
               <input  type="email" name="email" id="email" autocomplete="email" required></input>
            </div>
            <div className="bar">
                <label id="mensaje">Mensaje</label>
                <textarea name="comment" id="comment" autocomplete="off"></textarea>
            </div>
            <button type="submit" id="submit" class="submit-button">Submit</button> 
        </form>
        </>
    )
};

export default SingForm