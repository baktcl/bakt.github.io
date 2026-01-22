import html2 from "../images/skills/html5-color.svg";
import css2 from "../images/skills/css3-color.svg";
import bootstrap2 from "../images/skills/bootstrap-color.svg";
import angular2 from "../images/skills/angular-color.svg";
import react2 from "../images/skills/react-color.svg";
import wordpress2 from "../images/skills/wordpress-color.svg";
import vtex2 from "../images/skills/vtex-color.svg";
import sass2 from "../images/skills/sass-color.svg";
import photoshop from "../images/skills/photoshop-color.svg";
import illustrator from "../images/skills/illustrator-color.svg";
import xd from "../images/skills/adobe-xd-color.svg";
import figma from "../images/skills/figma-color.svg";


function Intro() {
    return (
        <section class="about d-lg-flex justify-content-center align-items-center" id="introduccion">
            <div class="container">
                <div class="row"> 
                    <div class="col-lg-4 col-md-12 col-12 text-center caja">
                        <h2>Prototipado</h2>
                        <p>Diseño de interfaces en Figma/Adobe XD, creando prototipos interactivos orientados a la experiencia de usuario.</p>
                        <div class="skills">
                            <img src={figma} alt="logo" width="40"/>
                            <img src={xd} alt="logo" width="40"/>
                            <img src={photoshop} alt="logo" width="40"/>
                            <img src={illustrator} alt="logo" width="40"/>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-12 text-center caja">
                        <h2>Maquetación</h2>
                        <p>Traducción de prototipos a HTML/CSS responsivo y accesible, manteniendo fidelidad al diseño.</p>
                        <div class="skills">
                            <img src={html2} alt="logo" width="40"/>
                            <img src={css2} alt="logo" width="40"/>
                            <img src={sass2} alt="logo" width="40"/>
                            <img src={bootstrap2} alt="logo" width="40"/>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-12 text-center caja">
                        <h2>Implementación</h2>
                        <p>Desarrollo de lógica front-end utilizando frameworks como React, Angular y Wordpress.</p>
                        <div class="skills">
                            <img src={angular2} alt="logo" width="40"/>
                            <img src={react2} alt="logo" width="40"/>
                            <img src={wordpress2} alt="logo" width="40"/>
                            <img src={vtex2} alt="logo" width="40"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
export default Intro;