import "../styles/information.css";
import logistica from "../assets/hero-icons/logistica.png";
import agronomia from "../assets/hero-icons/agronomia.png";
import limpieza from "../assets/hero-icons/limpieza.png";
import consultoria from "../assets/hero-icons/consultoria.png";
import catering from "../assets/hero-icons/catering.png";
import nutricion from "../assets/hero-icons/nutricion.png";
import seguridad from "../assets/hero-icons/seguridad.png";
import mineria from "../assets/hero-icons/mineria.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Information = () => {
  useEffect(() => {
    const rubros = document.querySelectorAll(".rubro");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(rubros).indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.2}s`;
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    rubros.forEach((rubro) => observer.observe(rubro));

    return () => {
      rubros.forEach((rubro) => observer.unobserve(rubro));
    };
  }, []);

  useEffect(() => {
    const content = document.querySelector("#infoTitle");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // solo se anima una vez
          }
        });
      },
      { threshold: 0.1 } // cuando el 10% del bloque esté visible
    );

    if (content) observer.observe(content);

    return () => {
      if (content) observer.unobserve(content);
    };
  }, []);

  return (
    <section id="heroInformation">
      <h1 id="infoTitle">
        Servicios integrales que ofrecemos para la mejora continua de su empresa
      </h1>

      <section id="miniRubros">
        <div className="rubro">
          <div className="rubroIco">
            <Link to="/rubros/logistica" className="navLink">
              <img src={logistica} alt="logistica" />
            </Link>
          </div>
          <div className="rubroInfo">
            <h5>Logistica</h5>
            <p>
              Traslado seguro de mercaderías a nivel nacional, incluyendo cargas especiales y
              transporte pesado.
            </p>
          </div>
        </div>

        <div className="rubro">
          <div className="rubroIco">
            <Link to="/rubros/agropecuaria" className="navLink">
              <img src={agronomia} alt="agronomia" />
            </Link>
          </div>
          <div className="rubroInfo">
            <h5>Agronomia</h5>
            <p>
              Producción y comercialización de productos agrícolas, especializados en exportación y
              servicios de valor agregado.
            </p>
          </div>
        </div>

        <div className="rubro">
          <div className="rubroIco">
            <Link to="/rubros/servicios" className="navLink">
              <img src={limpieza} alt="limpieza" />
            </Link>
          </div>
          <div className="rubroInfo">
            <h5>Limpieza</h5>
            <p>Servicios de limpieza integral, desinfección y cuidado de espacios verdes.</p>
          </div>
        </div>

        <div className="rubro">
          <div className="rubroIco">
            <Link to="/rubros/consultoria" className="navLink">
              <img src={consultoria} alt="consultoria" />
            </Link>
          </div>
          <div className="rubroInfo">
            <h5>Consultoria</h5>
            <p>
              Asesoramiento estratégico para optimizar procesos, aumentar la eficiencia y potenciar
              la rentabilidad de su empresa.
            </p>
          </div>
        </div>

        <div className="rubro">
          <div className="rubroIco">
            <Link to="/rubros/servicios" className="navLink">
              <img src={catering} alt="catering" />
            </Link>
          </div>
          <div className="rubroInfo">
            <h5>Catering</h5>
            <p>
              Servicios de alimentación personalizados para eventos corporativos, reuniones y
              celebraciones, garantizando calidad y presentación.
            </p>
          </div>
        </div>

        <div className="rubro">
          <div className="rubroIco">
            <Link to="/rubros/nutricion" className="navLink">
              <img src={nutricion} alt="nutricion" />
            </Link>
          </div>
          <div className="rubroInfo">
            <h5>Nutricion Animal</h5>
            <p>
              Asesoramiento y suministro de planes de alimentación para bovinos y otros animales de
              granja, optimizando la salud y producción.
            </p>
          </div>
        </div>

        <div className="rubro">
          <div className="rubroIco">
            <img src={seguridad} alt="seguridad" />
          </div>
          <div className="rubroInfo">
            <h5>Seguridad</h5>
            <p>Asesoramiento, capacitaciones, auditorías y provisión de equipos de protección.</p>
          </div>
        </div>

        <div className="rubro">
          <div className="rubroIco">
            <img src={mineria} alt="mineria" />
          </div>
          <div className="rubroInfo">
            <h5>Mineria</h5>
            <p>
              Exploración y extracción responsable de recursos minerales, con enfoque en seguridad y
              sostenibilidad ambiental.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Information;
