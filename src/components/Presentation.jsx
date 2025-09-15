import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/presentation.css";
import { useEffect } from "react";

const Presentation = () => {
  useEffect(() => {
    const content = document.querySelector("#heroPresentationContent");

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
    <>
      <section id="heroPresentation">
        <div id="heroPresentationContent">
          <i class="bi bi-people-fill"></i>
          <h1>Quienes somos:</h1>
          <p>
            En NG Dynamic, desde hace 2 décadas ofrecemos soluciones integrales en sectores
            estratégicos, con un fuerte compromiso con la calidad, la eficiencia y la
            sustentabilidad. Nuestro enfoque está en brindar servicios confiables, adaptados a las
            necesidades de cada cliente, apoyados por un equipo profesional y recursos de primer
            nivel, garantizando resultados que contribuyen al crecimiento y éxito de cada proyecto.
            Trabajamos día a día para innovar y optimizar nuestros procesos, asegurando que cada
            solución esté a la altura de los desafíos actuales del mercado.
          </p>
        </div>
      </section>
    </>
  );
};

export default Presentation;
