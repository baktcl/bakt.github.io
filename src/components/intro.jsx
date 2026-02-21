import html from "../images/skills/html5-logo.svg";
import css from "../images/skills/css3-logo.svg";
import sass from "../images/skills/logo-sass.svg";
import js from "../images/skills/javascript-logo.svg";
import bootstrap from "../images/skills/bootstrap-logo.svg";
import angular from "../images/skills/angular-logo.svg";
import wordpress from "../images/skills/logo-wordpress.svg";
import vtex from "../images/skills/vtex_logo.svg";
import react from "../images/skills/logo-react.svg";
import figma from "../images/skills/figma-logo.svg";
import photoshop from "../images/skills/photoshop-logo.svg";
import illustrator from "../images/skills/illustrator-logo.svg";
import xd from "../images/skills/adobe-xd-logo.svg";


function Intro() {
    return (
        <section class="about d-lg-flex justify-content-center align-items-center" id="introduccion">
            <div class="container">
                <div class="row cajas g-1"> 
                    <div class="col-lg-4 col-md-12 col-12 text-center caja">
                        <h2>Prototipado</h2>
                        <p>Diseño de interfaces, creando prototipos interactivos orientados a la experiencia de usuario.</p>
                        <div class="skills">
                            <div class="skill-box">
                                <div class="skill-bar">
                                    <span class="skill-per figma">
                                        <img src={figma} alt="logo" width="24" height="24"/>
                                        <span class="title">Figma</span>
                                    </span>
                                </div>
                            </div>
                            <div class="skill-box">
                                <div class="skill-bar">
                                    <span class="skill-per xd">
                                        <img src={xd} alt="logo" width="24" height="24"/>
                                        <span class="title">Adobe Xd</span>
                                    </span>
                                </div>
                            </div>
                            <div class="skill-box">
                                <div class="skill-bar">
                                    <span class="skill-per photoshop">
                                        <img src={photoshop} alt="logo" width="24" height="24"/>
                                        <span class="title">Adobe Photoshop</span>
                                    </span>
                                </div>
                            </div>
                            <div class="skill-box">
                                <div class="skill-bar">
                                    <span class="skill-per illustrator">
                                        <img src={illustrator} alt="logo" width="24" height="24"/>
                                        <span class="title">Adobe Illustrator</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4 col-md-12 col-12 text-center caja">
                        <h2>Maquetación</h2>
                        <p>Traducción de prototipos a código responsivo y accesible, manteniendo fidelidad al diseño.</p>
                        <div class="skills">
                            <div class="skill-box">
                                <div class="skill-bar">
                                    <span class="skill-per html">
                                        <img src={html} alt="logo" width="24" height="24"/>
                                        <span class="title">HTML5</span>
                                    </span>
                                </div>
                            </div>
                            <div class="skill-box">
                                <div class="skill-bar">
                                    <span class="skill-per css">
                                        <img src={css} alt="logo" width="24" height="24"/>
                                        <span class="title">CSS3</span>
                                    </span>
                                </div>
                            </div>
                            <div class="skill-box">
                                <div class="skill-bar">
                                    <span class="skill-per javascript">
                                        <img src={js} alt="logo" width="24" height="24"/>
                                        <span class="title">JavaScript</span>
                                    </span>
                                </div>
                            </div>
                            <div class="skill-box">
                                <div class="skill-bar">
                                    <span class="skill-per sass">
                                        <img src={sass} alt="logo" width="24" height="24"/>
                                        <span class="title">Sass</span>
                                    </span>
                                </div>
                            </div>
                            <div class="skill-box">
                                <div class="skill-bar">
                                    <span class="skill-per bootstrap">
                                        <img src={bootstrap} alt="logo" width="24" height="24"/>
                                        <span class="title">Bootstrap</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-12 text-center caja">
                        <h2>Implementación</h2>
                        <p>Desarrollo de lógica front-end utilizando frameworks como React, Angular, entre otros.</p>
                        <div class="skills">
                            <div class="skill-box">
                                <div class="skill-bar">
                                    <span class="skill-per angular">
                                        <img src={angular} alt="logo" width="24" height="24"/>
                                        <span class="title">Angular</span>
                                    </span>
                                </div>
                            </div>
                            <div class="skill-box">
                                <div class="skill-bar">
                                    <span class="skill-per react">
                                        <img src={react} alt="logo" width="24" height="24"/>
                                        <span class="title">React</span>
                                    </span>
                                </div>
                            </div>
                            <div class="skill-box">
                                <div class="skill-bar">
                                    <span class="skill-per wordpress">
                                        <img src={wordpress} alt="logo" width="24" height="24"/>
                                        <span class="title">Wordpress</span>
                                    </span>
                                </div>
                            </div>
                            <div class="skill-box">
                                <div class="skill-bar">
                                    <span class="skill-per vtex">
                                        <img src={vtex} alt="logo" width="24" height="24"/>
                                        <span class="title">Vtex</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
export default Intro;