import mail from "../images/mail.svg";
import telefono from "../images/telefono.svg";
import ubicacion from "../images/ubicacion.svg";
import { useState } from "react";

function Pie() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      phone,
    });
  };
    
    return (
        <section class="pie full-screen d-lg-flex justify-content-center align-items-center" id="Contacto">
            <div class="container">
                <div class="row"> 
                    <div class="col-lg-4 col-md-12 col-12 text-center espacio-pie">
                        <a href="#Perfil">Perfil</a>
                        <a href="#Proyectos">Proyectos</a>
                        <a href="../Curriculum.pdf" target="_blank">Curriculum</a>
                        <hr></hr>
                        <a href="https://www.linkedin.com/in/bryan-k%C3%B6hnenkampf/" target="_blank" rel="noreferrer">Linkedin</a>
                        <a href="https://www.instagram.com/bkampft/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://api.whatsapp.com/send?phone=56962822951" target="_blank" rel="noreferrer">Whatsapp</a>
                    </div>

                    <div class="col-lg-4 col-md-12 col-12 text-center espacio-pie">
                        <form onSubmit={handleSubmit}>
                            <div class="row formulario">
                                <input type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Nombres" 
                                        id="nombre" 
                                        name="nombre"  />
                            </div>
                            <div class="row formulario">
                                <input type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email" 
                                        id="mail" 
                                        name="mail" />
                            </div>     
                            <div class="row formulario">
                                <input type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Teléfono"  
                                        id="telefono" 
                                        name="telefono" />
                            </div>
                            <div class="row formulario">
                                <button type="submit" name="submit" class="button">ENVIAR</button>
                            </div>
                        </form>
                    </div>

                    <div class="col-lg-4 col-md-12 col-12 text-center espacio-pie">
                        <div class="row animate-box">
                            <span>
                                <a href="mailto:kampf@live.cl">
                                    <img src={mail} width="40" alt="E-mail" />
                                    kampf@live.cl
                                </a>
                            </span>
                        </div>
                        <hr class="final"></hr>
                        <div class="row animate-box">
                            <span>
                                <a href="tel:+56962822951">
                                    <img src={telefono} width="22" alt="Telefono" /> 
                                    +56 962822951
                                </a>
                            </span>
                        </div>
                        <hr class="final"></hr>         
                        <div class="row animate-box">
                            <span>
                                <img src={ubicacion} width="24" alt="Ubicación" /> 
                                Santiago, CL.
                            </span>
                        </div>		
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pie;