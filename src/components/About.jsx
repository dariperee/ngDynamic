import { useEffect } from "react";
import "../styles/about.css";
import aboutVid from "../assets/about-us/about-vid.mp4";

const About = () => {
  useEffect(() => {
    document.title = "Sobre Nosotros | NG Dynamic";
  }, []);

  return (
    <>
      <section id="aboutUs">
        <div id="aboutTxt">
          <h1>Sobre nosotros</h1>
          <p>
            En NG Dynamic, nuestra filosofía empresarial se cimienta en un propósito claro: mejorar
            la calidad de vida de la comunidad a través de servicios que generan un impacto positivo
            y duradero. Cada una de nuestras acciones es guiada por un inquebrantable respeto al
            prójimo, fomentando relaciones basadas en la integridad y la empatía con nuestros
            clientes, colaboradores y la sociedad en su conjunto. Este compromiso es inseparable de
            nuestra responsabilidad con el cuidado del medio ambiente, integrando la sostenibilidad
            como un pilar transversal en todas nuestras operaciones para construir un futuro más
            próspero y saludable para las generaciones venideras.
          </p>
        </div>
        <div id="aboutVid">
          <video src={aboutVid} autoPlay loop muted playsInline />
        </div>
      </section>
    </>
  );
};

export default About;
