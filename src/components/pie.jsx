import mail from "../images/mail.svg";
import telefono from "../images/telefono.svg";
import ubicacion from "../images/ubicacion.svg";
import { useState } from "react";
import exito from "../images/exito.svg";
import error from "../images/error.svg";

function Pie() {
  const [estado, setEstado] = useState(null); // null | "exito" | "error"
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    const form = e.target;

    try {
      const response = await fetch("https://formspree.io/f/xnjjnkdg", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setEstado("exito");
        form.reset();
      } else {
        setEstado("error");
      }
    } catch (err) {
      setEstado("error");
    } finally {
      setEnviando(false);
    }
  };

  const cerrarModal = () => setEstado(null);

    return (
        <section class="pie full-screen d-lg-flex justify-content-center align-items-center" id="Contacto">
            <div class="container">
                <div class="row"> 
                    <div class="order-1 order-lg-1 col-lg-4 col-md-12 col-12 text-center espacio-pie">
                        <a href="#Perfil">Perfil</a>
                        <a href="#Proyectos">Proyectos</a>
                        <a href="../Curriculum.pdf" target="_blank">Curriculum</a>
                        <hr></hr>
                        <a href="https://www.linkedin.com/in/bryan-k%C3%B6hnenkampf/" target="_blank" rel="noreferrer">Linkedin</a>
                        <a href="https://www.instagram.com/bkampft/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://api.whatsapp.com/send?phone=56962822951" target="_blank" rel="noreferrer">Whatsapp</a>
                    </div>

                    <div class="order-3 order-lg-2 col-lg-4 col-md-12 col-12 text-center espacio-pie">
                        <form onSubmit={handleSubmit}>
                            <div class="row formulario">
                                <input type="text"
                                        placeholder="Nombres" 
                                        id="nombre" 
                                        name="nombre"
                                        required  />
                            </div>
                            <div class="row formulario">
                                <input type="email"
                                        placeholder="E-mail" 
                                        id="email" 
                                        name="email" 
                                        required />
                            </div>     
                            <div class="row formulario">
                                <input type="tel"
                                        placeholder="Teléfono"  
                                        id="telefono" 
                                        name="telefono"
                                        required />
                            </div>
                            <div class="row formulario">
                                <input type="hidden" name="_language" value="es" />
                                 <button type="submit" class="button" disabled={enviando}>
                                    {enviando ? "Enviando..." : "Enviar"}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div class="order-2 order-lg-3 col-lg-4 col-md-12 col-12 text-center espacio-pie">
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
                    {estado === "exito" && (
                        <div className="modal-overlay">
                        <div className="modal exito">
                            <img src={exito} class="img-fluid" alt="exito" width="80" height="80" />
                            <h2>¡Mensaje enviado!</h2>
                            <p>Estamos en contacto</p>
                            <button onClick={cerrarModal}>Cerrar</button>
                        </div>
                        </div>
                    )}

                    {/* MODAL ERROR */}
                    {estado === "error" && (
                        <div className="modal-overlay">
                        <div className="modal error">
                            <img src={error} class="img-fluid" alt="error" width="80" height="80" />
                            <h2>Ocurrió un problema</h2>
                            <p>Inténtalo más tarde</p>
                            <button onClick={cerrarModal}>Cerrar</button>
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Pie;