import mail from "../images/mail.svg";
import telefono from "../images/telefono.svg";
import ubicacion from "../images/ubicacion.svg";
function Pie() {
    return (
        <section class="pie full-screen d-lg-flex justify-content-center align-items-center" id="introduccion">
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
                        <form id="" method="POST">
                            <div class="row formulario">
                                <input id="nombre" name="nombre" type="text" placeholder="Nombres" />
                            </div>
                            <div class="row formulario">
                                <input id="mail" name="mail" type="email" placeholder="E-mail" />
                            </div>     
                            <div class="row formulario">
                                <input  id="telefono" name="telefono" type="tel" placeholder="Telefono" />
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