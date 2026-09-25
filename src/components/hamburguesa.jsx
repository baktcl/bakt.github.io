import React, { useState } from "react";
import '../scss/hamburguesa.scss';
import baktlogo from "../images/bakt-logo.svg";


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
            <a onClick={() => setOpen(false)} href="#Perfil">Perfil</a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#introduccion">Habilidades</a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#Proyectos">Proyectos</a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#Contacto">Contacto</a>
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
