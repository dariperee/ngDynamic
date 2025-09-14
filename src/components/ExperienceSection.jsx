import "../styles/experience.css";
import ejemploImg from "../assets/hero-info/catering.jpg"; // reemplazá por tu imagen

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div id="visuals">
        <div id="box">
          <h1>Soy el box</h1>
        </div>
        <img src={ejemploImg} alt="catering" />
      </div>

      <div id="text">
        <h1>hola</h1>
      </div>
    </section>
  );
};

export default ExperienceSection;
