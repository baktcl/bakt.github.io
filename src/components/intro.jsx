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
                        <p>Analizo contexto, usuarios y objetivos para definir el problema que debemos resolver.</p>
                    </div>
                    <div class="col-lg-4 col-md-12 col-12 text-center caja">
                        <img src={diseñar} alt="logo" width="70" height="70" class="img-intro"/>
                        <h2>Diseñar</h2>
                        <span>UI · Prototipado</span>
                        <p>Creo flujos, wireframes y diseños visuales para comunicar y validar la experiencia.</p>
                    </div>
                    <div class="col-lg-4 col-md-12 col-12 text-center caja">
                        <img src={construir} alt="logo" width="70" height="70" class="img-intro"/>
                        <h2>Construir</h2>
                        <span>Front-end · Maquetación</span>
                        <p>Transformo el diseño en interfaces funcionales, responsivas y accesibles.</p>
                    </div>
                    <div class="col-lg-4 col-md-12 col-12 text-center caja">
                        <img src={implementar} alt="logo" width="70" height="70" class="img-intro"/>
                        <h2>Iterar</h2>
                        <span>Testing · Optimización</span>
                        <p>Evalúo, ajusto y mejoro el producto a partir de feedback y comportamiento real.</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
export default Intro;