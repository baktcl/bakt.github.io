import entender from "../images/entender.svg";
import diseñar from "../images/disenar.svg";
import construir from "../images/construir.svg";
import implementar from "../images/implementar.svg";


function Intro() {
    return (
        <section class="about d-lg-flex justify-content-center align-items-center" id="introduccion">
            <div class="container">
                <div class="row cajas g-1"> 
                    <div class="col-lg-4 col-md-12 col-12 text-center caja">
                        <img src={entender} alt="logo" width="70" height="70" class="img-intro"/>
                        <h2>Entender</h2>
                        <span>UX · Investigación</span>
                        <p>Analizo el contexto, usuarios y objetivos del negocio para definir el problema.</p>
                    </div>
                    <div class="col-lg-4 col-md-12 col-12 text-center caja">
                        <img src={diseñar} alt="logo" width="70" height="70" class="img-intro"/>
                        <h2>Diseñar</h2>
                        <span>UI · Prototipado</span>
                        <p>Creo flujos, wireframes y diseños visuales que comunican y validan la experiencia.</p>
                    </div>
                    <div class="col-lg-4 col-md-12 col-12 text-center caja">
                        <img src={construir} alt="logo" width="70" height="70" class="img-intro"/>
                        <h2>Construir</h2>
                        <span>Front-end · Maquetación</span>
                        <p>Transformo el diseño en interfaces funcionales con tecnologías web modernas.</p>
                    </div>
                    <div class="col-lg-4 col-md-12 col-12 text-center caja">
                        <img src={implementar} alt="logo" width="70" height="70" class="img-intro"/>
                        <h2>Implementar</h2>
                        <span>Desarrollo · Despliegue</span>
                        <p>Desarrollo de lógica front-end utilizando frameworks como React, Angular, entre otros.</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
export default Intro;