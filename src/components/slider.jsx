import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/slider.scss';
import { useRef, useEffect, useState } from "react";

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
import sass from "../images/skills/logo-sass.svg";
import js from "../images/skills/javascript-logo.svg";
import bootstrap from "../images/skills/bootstrap-logo.svg";
import angular from "../images/skills/angular-logo.svg";
import wordpress from "../images/skills/logo-wordpress.svg";
import vtex from "../images/skills/vtex_logo.svg";

import blank from "../images/url-blank.svg";

export default function SimpleSlider() {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth >= 1024 ? 2 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0, true);
    }
  }, [slidesToShow]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 9000,
    pauseOnHover: true,
    slidesToShow,
    slidesToScroll: slidesToShow,
  };

  useEffect(() => {
  window.dispatchEvent(new Event('resize'));
  
  const timer = setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 300);

  return () => clearTimeout(timer);
}, []);

  return (
    <Slider  {...settings}>
      <div class="proyecto">
        <img src={Guess} alt="logo" width="180"/>
        <h3>Guess (2021)</h3>
        <p>Hecho en VTEX, asegurando consistencia visual, adaptación a lineamientos de marca a nivel internacional a la marca en Chile.</p>
        <a href="https://www.guess.cl/" rel="noreferrer" target="_blank" class="url" >
          <img src={blank} width="45" alt="url" />
          Ir a la web
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40" height="40"/>
            <img src={css} alt="logo" width="40" height="40"/>
            <img src={sass} alt="logo" width="40" height="40"/>
            <img src={js} alt="logo" width="40" height="40"/>
            <img src={bootstrap} alt="logo" width="40" height="40"/>
            <img src={vtex} alt="logo" width="40" height="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Unired} alt="logo" width="180" style={{margin:'0'}} />
        <h3>Unired (2024)</h3>
        <p>Prototipado e implementación de interfaces para plataforma de pagos de alto tráfico, priorizando claridad en flujos transaccionales, rendimiento y accesibilidad en entornos Angular.</p>
        <a href="https://www.unired.cl/" rel="noreferrer" target="_blank" class="url" >
          <img src={blank} width="45" alt="url" />
          Ir a la web
        </a>
        <div class="skills">
            <img tooltip="Html5" flow="top" src={html} alt="logo" width="40" height="40"/>
            <img tooltip="Css3" flow="top" src={css} alt="logo" width="40" height="40"/>
            <img tooltip="Javascript" flow="top" src={js} alt="logo" width="40" height="40"/>
            <img tooltip="Bootstrap" flow="top" src={bootstrap} alt="logo" width="40" height="40"/>
            <img tooltip="Angular" flow="top" src={angular} alt="logo" width="40" height="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Construmart} alt="logo" width="180" />
        <h3>Construmart (2021)</h3>
        <p>Prototipado y desarrollo para e-commerce en VTEX, adaptación responsive y mejora de la experiencia de usuario en procesos de búsqueda.</p>
        <a href="https://www.construmart.cl/" rel="noreferrer" target="_blank" class="url" >
          <img src={blank} width="45" alt="url" />
          Ir a la web
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40" height="40"/>
            <img src={css} alt="logo" width="40" height="40"/>
            <img src={sass} alt="logo" width="40" height="40"/>
            <img src={js} alt="logo" width="40" height="40"/>
            <img src={bootstrap} alt="logo" width="40" height="40"/>
            <img src={vtex} alt="logo" width="40" height="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Fucoa} alt="logo" width="180"  />
        <h3>Chile Agrícola (2020)</h3>
        <p>Diseño y desarrollo front-end sobre WordPress para plataforma informativa del Ministerio de Agricultura, optimizando arquitectura de contenidos y experiencia de navegación.</p>
        <a href="https://www.chileagricola.cl/" rel="noreferrer" target="_blank" class="url" >
          <img src={blank} width="45" alt="url" />
          Ir a la web
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40" height="40"/>
            <img src={css} alt="logo" width="40" height="40"/>
            <img src={js} alt="logo" width="40" height="40"/>
            <img src={bootstrap} alt="logo" width="40" height="40"/>
            <img src={wordpress} alt="logo" width="40" height="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Colloky} alt="logo" width="180" style={{margin:'0'}} />
        <h3>Colloky (2021)</h3>
        <p>Hecho en VTEX, traduciendo lineamientos de marca a componentes reutilizables y asegurando coherencia visual en catálogo y checkout.</p>
        <a href="https://www.colloky.cl/" rel="noreferrer" target="_blank" class="url" >
          <img src={blank} width="45" alt="url" />
          Ir a la web
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40" height="40"/>
            <img src={css} alt="logo" width="40" height="40"/>
            <img src={sass} alt="logo" width="40" height="40"/>
            <img src={js} alt="logo" width="40" height="40"/>
            <img src={bootstrap} alt="logo" width="40" height="40"/>
            <img src={vtex} alt="logo" width="40" height="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Vitamina} alt="logo" width="180" style={{margin:'0'}} />
        <h3>Vitamina (2016)</h3>
        <p>Diseño y desarrollo del sitio corporativo en WordPress, creando una estructura clara y adaptable que facilitara la navegación y comunicación institucional.</p>
        <a href="https://www.vitamina.cl/" rel="noreferrer" target="_blank" class="url" >
          <img src={blank} width="45" alt="url" />
          Ir a la web
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40" height="40"/>
            <img src={css} alt="logo" width="40" height="40"/>
            <img src={wordpress} alt="logo" width="40" height="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Sakura} alt="logo" width="180" />
        <h3>Sakura (2024)</h3>
        <p>Desarrollo de interfaces y componentes en Angular para plataforma comercial, optimizando tiempos de compra y flujos.</p>
        <a href="https://www.sakuraexpress.cl/" rel="noreferrer" target="_blank" class="url" >
          <img src={blank} width="45" alt="url" />
          Ir a la web
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40" height="40"/>
            <img src={css} alt="logo" width="40" height="40"/>
            <img src={js} alt="logo" width="40" height="40"/>
            <img src={bootstrap} alt="logo" width="40" height="40"/>
            <img src={angular} alt="logo" width="40" height="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Fonasa} alt="logo" width="170" />
        <h3>Fonasa (2023)</h3>
        <p>Plataforma institucional de alto alcance, priorizando accesibilidad, estructura semántica y creación de intranet sobre WordPress.</p>
        <a href="https://nuevo.fonasa.gob.cl/" rel="noreferrer" target="_blank" class="url" >
          <img src={blank} width="45" alt="url" />
          Ir a la web
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40" height="40"/>
            <img src={css} alt="logo" width="40" height="40"/>
            <img src={js} alt="logo" width="40" height="40"/>
            <img src={bootstrap} alt="logo" width="40" height="40"/>
            <img src={wordpress} alt="logo" width="40" height="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Capitaria} alt="logo" width="180"  />
        <h3>Capitaria (2015)</h3>
        <p>Diseño y maquetación de landing pages orientadas a conversión, enfocadas en captación de clientes y optimización visual para campañas digitales.</p>
        <a href="https://bakt.cl/Proyectos/Capitaria/" rel="noreferrer" target="_blank" class="url" >
          <img src={blank} width="45" alt="url" />
          Ir a la landing
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40" height="40"/>
            <img src={css} alt="logo" width="40" height="40"/>
            <img src={bootstrap} alt="logo" width="40" height="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Sercotec} alt="logo" width="180" style={{margin:'0'}} />
        <h3>Barrios comerciales (2018)</h3>
        <p>Plataforma institucional de Sercotec hecha en Wordpress, mejorando usabilidad y acceso a información para pymes a nivel nacional.</p>
        <a href="https://www.sercotec.cl/barrios-comerciales/" rel="noreferrer" target="_blank" class="url" >
          <img src={blank} width="45" alt="url" />
          Ir a la web
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40" height="40"/>
            <img src={css} alt="logo" width="40" height="40"/>
            <img src={bootstrap} alt="logo" width="40" height="40"/>
            <img src={wordpress} alt="logo" width="40" height="40"/>
        </div>
      </div>

      <div class="proyecto">
        <img src={Bata} alt="logo" width="180" style={{margin:'0'}} />
        <h3>Bata (2021)</h3>
        <p>Entorno VTEX, implementando mejoras visuales y estructurales orientadas a optimizar la experiencia de compra online.</p>
        <a href="https://www.bata.cl/" rel="noreferrer" target="_blank" class="url" >
          <img src={blank} width="45" alt="url" />
          Ir a la web
        </a>
        <div class="skills">
            <img src={html} alt="logo" width="40" height="40"/>
            <img src={css} alt="logo" width="40" height="40"/>
            <img src={sass} alt="logo" width="40" height="40"/>
            <img src={js} alt="logo" width="40" height="40"/>
            <img src={bootstrap} alt="logo" width="40" height="40"/>
            <img src={vtex} alt="logo" width="40" height="40"/>
        </div>
      </div>

    </Slider>
  );
}