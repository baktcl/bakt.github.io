import React, { useState } from "react";
import '../scss/hamburguesa.scss';
import baktlogo from "../images/bakt-logo.svg";
import linearli from "../images/linear-li.svg";
import linearig from "../images/linear-ig.svg";
import linearwa from "../images/linear-wa.svg";

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
            <a href="#">Curriculum</a>
          </li>
          <li>
            <a href="mailto:kampf@live.cl">kampf@live.cl</a>
          </li>
          <li>
            <a href="tel:+56962822951">+56 962822951</a>
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
          <div class="redes">
            <a class="social" href="https://www.linkedin.com/in/bryan-k%C3%B6hnenkampf/" target="_blank">
              <img src={linearli} alt="Linkedin" />
            </a> 
            <a class="social" href="https://www.instagram.com/bkampft/" target="_blank">
              <img src={linearig} alt="Instagram" />
            </a>
            <a class="social" href="https://api.whatsapp.com/send?phone=56962822951" target="_blank">
              <img src={linearwa} alt="Whatsapp" />
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}
