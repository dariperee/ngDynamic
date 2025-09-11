import { useEffect } from "react";

const Hero = () => {

  useEffect(() => {document.title = "Home | NG Dynamic";}, []);

  return (
    <section id="hero">
        <h1>NG Dynamic</h1>
        <p>Nos dirigimos a ustedes con el fin de presentarles NG Dynamic, una organización fundada el 7 de febrero de 2003 con 
        la misión de brindar soluciones logísticas integrales en sectores estratégicos de la economía argentina.
        Con más de dos décadas de experiencia, nuestro objetivo principal es acompañar a cada cliente con un servicio confiable, 
        eficiente y adaptado a sus necesidades específicas. Nos enorgullece ser un socio estratégico que garantiza no solo el 
        transporte, sino la seguridad y la integridad de cada operación, respaldados por un equipo altamente capacitado y 
        recursos de primer nivel.</p>
    </section>
  )
}

export default Hero
