import SimpleSlider from "./slider.jsx";

function Proyectos() {
    return (
        <section class="proyectos full-screen d-lg-flex justify-content-center align-items-center" id="Proyectos">
            <div class="container">
                <div class="row"> 
                    <p class="p-5 m-0 leyenda">
                        Mi trabajo es cubrir el espectro UI completo — diseño visual, implementación front-end y motion — e implementar el código en producción. En UX mi enfoque es práctico: benchmarking competitivo, arquitectura de flujos y validación con prototipos orientados a conversión.
                    </p>
                </div>
                <div class="row"> 
                    <SimpleSlider />
                </div>
                
            </div>
        </section>
    );
}
export default Proyectos;