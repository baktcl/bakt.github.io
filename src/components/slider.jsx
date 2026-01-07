import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/slider.scss';

import Colloky from "../images/logos/colloky.svg";
import Guess from "../images/logos/Guess_logo.svg";
import Capitaria from "../images/logos/logo-capitaria.png";
import Fucoa from "../images/logos/MINAGRI_FUCOA_RGB_blanco.png";
import Unired from "../images/logos/unired-seeklogo.svg";
import Vitamina from "../images/logos/vitamina_logo.svg";
import Sercotec from "../images/logos/Logo_Sercotec.svg";
import Construmart from "../images/logos/icon-construmart-vertical-colors Large.png";
import Bata from "../images/logos/logo-Bata.svg";
import Fonasa from "../images/logos/fonasa-1-1 Large.png";
import Providencia from "../images/logos/Logo-municipal-2025-W2.png";
import Sakura from "../images/logos/Logos_Cards_Sitio_Beneficios_Sakura.png";

import html from "../images/skills/html5-logo.svg";
import css from "../images/skills/css3-logo.svg";
import js from "../images/skills/javascript-logo.svg";
import bootstrap from "../images/skills/bootstrap-logo.svg";
import angular from "../images/skills/angular-logo.svg";
import react from "../images/skills/logo-react.svg";
import wordpress from "../images/skills/logo-wordpress.svg";
import vtex from "../images/skills/vtex_logo.svg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    pauseOnHover: true
  };
  return (
    <Slider {...settings}>
      <div class="proyecto">
        <img src={Guess} alt="logo" width="200"/>
        <h3>Guess - 2021</h3>
        <p>Sitio web desarrollado a través de la agencia Ecomsur.<br/>Es una actualización de su sitio web antiguo siguiendo los lineamientos del sitio web internacional.</p>
        <a href="https://www.guess.cl/" rel="noreferrer" target="_blank">
          <button class="custom-btn custom-btn-bg">Ir a la web</button>
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40"/>
            <img src={css} alt="logo" width="40"/>
            <img src={js} alt="logo" width="40"/>
            <img src={bootstrap} alt="logo" width="40"/>
            <img src={vtex} alt="logo" width="40"/>
        </div>
      </div>
      <div class="proyecto">
        <img src={Unired} alt="logo" width="200"/>
        <h3>Unired - 2024</h3>
        <p>Sitio web desarrollado a través de la agencia Anticipa. <br/>Actualización del sitio web en base a nuevos diseños y colores corporativos.</p>
        <a href="https://www.unired.cl/" rel="noreferrer" target="_blank">
          <button class="custom-btn custom-btn-bg">Ir a la web</button>
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40"/>
            <img src={css} alt="logo" width="40"/>
            <img src={js} alt="logo" width="40"/>
            <img src={bootstrap} alt="logo" width="40"/>
            <img src={angular} alt="logo" width="40"/>
        </div>
      </div>
      <div class="proyecto">
        <h2>3</h2>
      </div>
      <div class="proyecto">
        <h2>4</h2>
      </div>
      <div class="proyecto">
        <h2>5</h2>
      </div>
      <div class="proyecto">
        <h2>6</h2>
      </div>
    </Slider>
  );
}