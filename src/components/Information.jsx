import "../styles/information.css";
import logistica from "../assets/rubrosIcons/logistica.png";
import agronomia from "../assets/rubrosIcons/agronomia.png";
import limpieza from "../assets/rubrosIcons/limpieza.png";
import consultoria from "../assets/rubrosIcons/consultoria.png";
import catering from "../assets/rubrosIcons/catering.png";
import nutricion from "../assets/rubrosIcons/nutricion.png";
import seguridad from "../assets/rubrosIcons/seguridad.png";
import mineria from "../assets/rubrosIcons/mineria.png";
import { useEffect } from "react";

const Information = () => {
  useEffect(() => {
    const rubros = document.querySelectorAll(".rubro");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(rubros).indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.2}s`; // 0.2s entre cada rubro
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

  return (
    <section id="heroInformation">
      <h1>Servicios integrales para la gestión y mejora continua de su empresa</h1>

      <section id="miniRubros">
        <div className="rubro">
          <div className="rubroIco">
            <img src={logistica} alt="logistica" />
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
            <img src={agronomia} alt="agronomia" />
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
            <img src={limpieza} alt="limpieza" />
          </div>
          <div className="rubroInfo">
            <h5>Limpieza</h5>
            <p>Servicios de limpieza integral, desinfección y cuidado de espacios verdes.</p>
          </div>
        </div>

        <div className="rubro">
          <div className="rubroIco">
            <img src={consultoria} alt="consultoria" />
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
            <img src={catering} alt="catering" />
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
            <img src={nutricion} alt="nutricion" />
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
