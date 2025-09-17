import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { rubrosData } from "../rubrosData.js";
import FadeSlider from "./FadeSlider";
import "../styles/rubro.css";

const Rubro = () => {
  const { id } = useParams();
  const data = rubrosData[id];
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (data) {
      document.title = `${data.tab} | NG Dynamic`;
      setReady(true);
    }
  }, [data]);

  if (!data) return <p>Rubro no encontrado</p>;
  if (!ready) return <p>Cargando...</p>; // evita render prematuro

  return (
    <section id="rubroPage">
      <section id="rubroA">
        <div id="rubroHeader">
          <h1>{data.titulo}</h1>
          <div className="rubroInfoA">
            <p>{data.descripcion}</p>
          </div>
        </div>
        <div className="rubroSliderA">
          <FadeSlider className="swiperFadeA" images={data.imagenesA} />
        </div>
      </section>

      <section id="rubroB">
        <div className="rubroSliderB">
          <FadeSlider className="swiperFadeB" images={data.imagenesB} />
        </div>
        <div className="rubroInfoB">
          <h2>Servicios que ofrecemos:</h2>
          {data.servicios && (
            <ul>
              {data.servicios.map((servicio, i) => (
                <li key={i}>{servicio}</li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <div id="fraseMotivacional">
        <h2>{data.fraseMotivacional}</h2>
      </div>
    </section>
  );
};

export default Rubro;
