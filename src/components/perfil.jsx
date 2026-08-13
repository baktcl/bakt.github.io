import bakt from "../images/bakt.svg";
import linkedin from "../images/linkedin.svg";
import codepen from "../images/Codepen-logo.svg";
import github from "../images/github-logo.svg";
import credly from "../images/credly-logo.svg";
import behance from "../images/behance-logo.svg";

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
                                    <h2 class="animated-item">Front-end Developer</h2>
                                    <h2 class="animated-item">Diseñador UX/UI</h2>
                                </div>
                        </div>
                        <p>Diseñador UX/UI y desarrollador Front-end con más de diez años de experiencia en fintech, retail y organismos públicos desde la investigación hasta el código en producción.
                        </p>
                        
                        <div class="boton-group mt-4">
                            <a href="#Proyectos" class=" boton boton-bg boton-link">Proyectos</a>
                            <a href="#Contacto" class=" mr-lg-2 boton"> Contacto</a>
                        </div>

                        <div class="redes">
                            <a tooltip="Linkedin" flow="down" href="https://www.linkedin.com/in/bryan-k%C3%B6hnenkampf/" target="_blank" rel="noreferrer">
                                <img src={linkedin} class="img-fluid" alt="linkedin" />
                            </a>
                            <a tooltip="behance" flow="down" href="https://www.behance.net/bryankhnenkampf" target="_blank" rel="noreferrer">
                                <img src={behance} class="img-fluid" alt="behance" />
                            </a>
                            <a tooltip="Github" flow="down" href="https://github.com/baktcl/" target="_blank" rel="noreferrer">
                                <img src={github} class="img-fluid" alt="github" />
                            </a>
                            <a tooltip="Codepen" flow="down" href="https://codepen.io/bryan-k-hnenkampf/" target="_blank" rel="noreferrer">
                                <img src={codepen} class="img-fluid" alt="codepen" />
                            </a>
                            <a tooltip="Credly" flow="down" href="https://www.credly.com/users/bryan-kohnenkampf" target="_blank" rel="noreferrer">
                                <img src={credly} class="img-fluid" alt="credly" />
                            </a>
                           
                            {/*
                            <a tooltip="Instagram" flow="down" href="https://www.instagram.com/bkampft/" target="_blank" rel="noreferrer">
                                <img src={instagram} class="img-fluid" alt="instagram" />
                            </a>
                            <a tooltip="Whatsapp" flow="down" href="https://api.whatsapp.com/send?phone=56962822951" target="_blank" rel="noreferrer">
                                <img src={whatsapp} class="img-fluid" alt="whatsapp" />
                            </a>
                            */}
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-12 col-12">
                    <div class="about-image svg">
                        <img src={bakt} class="img-fluid vector" alt="bakt" />
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
  }
  
  export default perfil;