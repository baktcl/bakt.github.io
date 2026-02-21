import baktlogo from "../images/bakt-logo.svg";
function Creditos() {
    return (
        <div className="creditos">
            <a href="https://bakt.cl/">
                <img src={baktlogo} width="25" height="25" alt="bakt.cl" class="logotipo" />
            </a>
            <p>Sitio web desarrollado en React.</p>
            <p>Diseño y codificación por:</p>
            <a href="https://bakt.cl/">Bryan Köhnenkampf</a>
        </div>
    )
}
export default Creditos;