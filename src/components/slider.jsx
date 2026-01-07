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
import Sercotec from "../images/logos/barrios-comerciales-sercotec2.png";
import Construmart from "../images/logos/icon-construmart-vertical-colors Large.png";
import Bata from "../images/logos/logo-Bata.svg";
import Fonasa from "../images/logos/fonasa-1-1 Large.png";
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
        <h3>Guess (2021)</h3>
        <p>Sitio web desarrollado a través de la agencia Ecomsur.</p>
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
        <img src={Unired} alt="logo" width="200" style={{margin:'0'}} />
        <h3>Unired (2024)</h3>
        <p>Sitio web desarrollado a través de la agencia Anticipa.</p>
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
        <img src={Construmart} alt="logo" width="200" style={{margin:'0'}} />
        <h3>Construmart (2021)</h3>
        <p>Sitio web desarrollado a través de la agencia Ecomsur.</p>
        <a href="https://www.construmart.cl/" rel="noreferrer" target="_blank">
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
        <img src={Fucoa} alt="logo" width="200" style={{margin:'0'}} />
        <h3>Chile Agrícola (2019)</h3>
        <p>Sitio web desarrollado a través de Fucoa del ministerio de agricultura de Chile.</p>
        <a href="https://www.chileagricola.cl/" rel="noreferrer" target="_blank">
          <button class="custom-btn custom-btn-bg">Ir a la web</button>
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40"/>
            <img src={css} alt="logo" width="40"/>
            <img src={js} alt="logo" width="40"/>
            <img src={bootstrap} alt="logo" width="40"/>
            <img src={wordpress} alt="logo" width="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Colloky} alt="logo" width="200" style={{margin:'0'}} />
        <h3>Colloky (2021)</h3>
        <p>Sitio web desarrollado a través de la agencia Ecomsur.</p>
        <a href="https://www.colloky.cl/" rel="noreferrer" target="_blank">
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
        <img src={Vitamina} alt="logo" width="200" style={{margin:'0'}} />
        <h3>Vitamina (2016)</h3>
        <p>Sitio web desarrollado directamente con jardines infantiles Vitamina.</p>
        <a href="https://www.vitamina.cl/" rel="noreferrer" target="_blank">
          <button class="custom-btn custom-btn-bg">Ir a la web</button>
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40"/>
            <img src={css} alt="logo" width="40"/>
            <img src={wordpress} alt="logo" width="40"/>
        </div>
      </div>
      <div class="proyecto">
        <img src={Capitaria} alt="logo" width="200" style={{margin:'0'}} />
        <h3>Capitaria (2015)</h3>
        <p>Sitio web no disponible actualmente. Adjunto maqueta formato landing page para ventas.</p>
        <a href="#" rel="noreferrer" target="_blank">
          <button class="custom-btn custom-btn-bg">Ir a la web</button>
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40"/>
            <img src={css} alt="logo" width="40"/>
            <img src={bootstrap} alt="logo" width="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Fonasa} alt="logo" width="200" style={{margin:'0'}} />
        <h3>Fonasa (2023)</h3>
        <p>Sitio web desarrollado a través de la agencia Anticipa.</p>
        <a href="https://nuevo.fonasa.gob.cl/" rel="noreferrer" target="_blank">
          <button class="custom-btn custom-btn-bg">Ir a la web</button>
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40"/>
            <img src={css} alt="logo" width="40"/>
            <img src={js} alt="logo" width="40"/>
            <img src={bootstrap} alt="logo" width="40"/>
            <img src={wordpress} alt="logo" width="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Sakura} alt="logo" width="200" style={{margin:'0'}} />
        <h3>Sakura (2024)</h3>
        <p>Sitio web desarrollado a través de la agencia Anticipa.</p>
        <a href="https://www.sakuraexpress.cl/" rel="noreferrer" target="_blank">
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
        <img src={Sercotec} alt="logo" width="200" style={{margin:'0'}} />
        <h3>Barrios comerciales (2018)</h3>
        <p>Sitio web desarrollado diectamente con Sercotec del ministerio de Economía.</p>
        <a href="https://www.sercotec.cl/barrios-comerciales/" rel="noreferrer" target="_blank">
          <button class="custom-btn custom-btn-bg">Ir a la web</button>
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40"/>
            <img src={css} alt="logo" width="40"/>
            <img src={bootstrap} alt="logo" width="40"/>
            <img src={wordpress} alt="logo" width="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Bata} alt="logo" width="200" style={{margin:'0'}} />
        <h3>Bata (2021)</h3>
        <p>Sitio web desarrollado a través de la agencia Ecomsur.</p>
        <a href="https://www.bata.cl/" rel="noreferrer" target="_blank">
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

    </Slider>
  );
}