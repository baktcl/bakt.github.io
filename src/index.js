import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';
import Nav from "./components/navbar.jsx";
import Perfil from "./components/perfil.jsx";
import Intro from "./components/intro.jsx";
import Divisor from "./components/divisor.jsx";
import Proyectos from './components/proyectos.jsx';
import Pie from './components/pie.jsx';
import Clientes from './components/clientes.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Nav />
    <a name="Perfil" id="a"></a>
    <Perfil />
    <Intro />
    <Divisor />
    <a name="Proyectos" id="a"></a>
    <Proyectos />
    <a name="Contacto" id="a"></a>
    <Pie />
    <Clientes />
  </>
);
