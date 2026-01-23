import baktlogo from "../images/bakt-logo.svg";
import Hamburguesa from "./hamburguesa.jsx";
function Nav() {
    return (
        <nav class="navegacion" role="navigation">
            <div class="container">
                <div class="fh5co-top-logo">
                    <div id="bakt-logo">
                        <a href="https://bakt.cl/">
                            <img src={baktlogo} width="50" height="50" alt="bakt.cl" class="logotipo" />
                        </a>
                    </div>
                </div>
                <div class="fh5co-top-menu menu-1 text-center">
                    <Hamburguesa />
                </div>
            </div>
	</nav>
    );
}

export default Nav;