import { Link } from "react-router-dom";

function Gracias() {
  return (
    <div className="gracias">
      <h1>Mensaje enviado ✅</h1>
      <p>Gracias por escribirnos. Te responderemos pronto.</p>

      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default Gracias;