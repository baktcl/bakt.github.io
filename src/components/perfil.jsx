import bakt from "../images/bakt.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import whatsapp from "../images/whatsapp.svg";

function perfil() {
    return (
    <section class="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
        <div class="container">
            <div class="row"> 
                <div class="col-lg-7 col-md-12 col-12 align-items-center">
                    <div class="about-text">
                        <div class="animated animated-text">
                            <span class="mr-2 d-inline animated-item-2">Hola, soy</span>
                                <div class="animated-info">
                                    <h1 class="animated-item">Bryan Köhnenkampf</h1>
                                    <h2 class="animated-item">Front-end dev</h2>
                                    <h2 class="animated-item">Diseñador UX/UI</h2>
                                </div>
                        </div>
                        <p>Me dedico al prototipado, maquetación e implementación de interfaces web, con 10 años de experiencia en el rubro digital.</p>
                        
                        <div class="boton-group mt-4">
                            <a href="#Proyectos" class=" boton boton-bg boton-link">Proyectos</a>
                            <a href="#Contacto" class=" mr-lg-2 boton"> Contacto</a>
                        </div>

                        <div class="redes">
                            <a href="https://www.linkedin.com/in/bryan-k%C3%B6hnenkampf/" target="_blank" rel="noreferrer">
                                <img src={linkedin} class="img-fluid" alt="linkedin" />
                            </a>
                            <a href="https://www.instagram.com/bkampft/" target="_blank" rel="noreferrer">
                                <img src={instagram} class="img-fluid" alt="instagram" />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=56962822951" target="_blank" rel="noreferrer">
                                <img src={whatsapp} class="img-fluid" alt="whatsapp" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-12 col-12">
                    <div class="about-image svg">
                        <img src={bakt} class="img-fluid" alt="bakt" />
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
  }
  
  export default perfil;