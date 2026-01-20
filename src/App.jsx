import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar.jsx";
import Perfil from "./components/perfil.jsx";
import Intro from "./components/intro.jsx";
import Divisor from "./components/divisor.jsx";
import Proyectos from "./components/proyectos.jsx";
import Pie from "./components/pie.jsx";
import Clientes from "./components/clientes.jsx";

function Home() {
  return (
    <>
      <Nav />
      <section id="Perfil">
        <Perfil />
      </section>
      <Intro />
      <Divisor />
      <section id="Proyectos">
        <Proyectos />
      </section>
      <section id="Contacto">
        <Pie />
      </section>
      <Clientes />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       {/* <Route path="/gracias" element={<Gracias />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
