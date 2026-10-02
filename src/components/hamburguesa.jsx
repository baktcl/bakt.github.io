import React, { useState } from "react";
import '../scss/hamburguesa.scss';
import baktlogo from "../images/bakt-logo.svg";

import perfil from "../images/icon-perfil.svg";
import proyectos from "../images/icon-proyectos.svg";
import contacto from "../images/icon-contacto.svg";

export default function Hamburguesa() {
  
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button
        id="debug-burger"
        onClick={() => {
          setOpen(!isOpen);
        }}
        class={`hamburger-button ${isOpen ? "open" : ""}`}>
        ☰
      </button>

      <div class={`panel ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="https://bakt.cl/">
              <img class="logo" src={baktlogo} width="50" height="50" alt="bakt.cl" />
            </a>
          </li>
          <li>
            <hr></hr>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#Perfil">
              <img class="icon-hamburguesa" src={perfil} width="25" height="23" alt="bakt.cl" />
              Perfil</a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#Proyectos">
              <img class="icon-hamburguesa" src={proyectos} width="25" height="25" alt="bakt.cl" />
              Proyectos</a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#Contacto">
              <img class="icon-hamburguesa" src={contacto} width="25" height="25" alt="bakt.cl" />
              Contacto</a>
          </li>
          
          {/*
          <li>
            <hr></hr>
          </li>
          <li class="traduccion">
            <a class="menuitem" role="menuitem" tabindex="-1" href="#Contacto"> EN</a>
            <a class="menuitem activo" role="menuitem" tabindex="-1" href="#Contacto"> ES</a>
          </li>
          */}
          <li>
            <hr></hr>
          </li>
          <a href="/CV_Bryan_Kohnenkampf.pdf" class=" mr-lg-2 boton" target="_blank" rel="noreferrer"> Descargar CV</a>
        </ul>
      </div>
    </div>
  );
}
