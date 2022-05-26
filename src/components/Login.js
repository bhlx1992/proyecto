import React, { useState } from "react";

export const Login = () => {



    return (
        <section className="modal">
      <div className="modal_container">
     
        <div className="overlay">
        
          <form>
              <a href="#" className="modal_close"></a>
    
            <div className="logo-modal">
              <img className="img-logo" src="/letras_blancas.png" alt="logo" />
            </div>
            <div className="form_section">
              <input
                className="form_input"
                id="txt-input"
                type="text"
                placeholder="@NombreUsario"
                required
              />
            </div>
            <div className="form_section">
              <input
                className="form_input"
                type="password"
                placeholder="Contraseña"
                id="pwd"
                name="Password"
                required
              />
            </div>
            <div className="form_section button1">
              <button className="sign_up">Registrate</button>
            </div>
            <div className="form_section button1">
              <button className="entry">Entrar</button>
            </div>
            <button className="forgot">¿Has olvidado la cuenta?</button>
          </form>
        </div>
      </div>
    </section>
    )
}