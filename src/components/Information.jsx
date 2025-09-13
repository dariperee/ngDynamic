import "../styles/information.css";
import catering from "../assets/hero-info/catering.jpg";
import catering2 from "../assets/hero-info/catering2.jpg";
import agropecuaria from "../assets/hero-info/agropecuaria.jpg";
import deposito from "../assets/hero-info/deposito.jpg";
import logistica from "../assets/hero-info/logistica.jpg";
import seguridad from "../assets/hero-info/seguridad.jpg";
import limpieza from "../assets/hero-info/limpieza2.jpg";

const Information = () => {
  return (
    <>
      <section id="heroInformation">
        <div id="heroInfoB">
          <div className="heroPtext">
            <h4>Logística,transporte y distribución:</h4>
            <p>
              Traslado seguro de mercaderías a nivel nacional, incluyendo cargas especiales y
              transporte pesado.
            </p>

            <h4>Vehículos y maquinarias:</h4>
            <p>
              Comercialización, alquiler y mantenimiento de equipos para industria, construcción y
              agro.
            </p>

            <h4>Agropecuaria y exportación:</h4>
            <p>
              Producción y comercialización de productos agrícolas, especializados en exportación y
              servicios de valor agregado.
            </p>

            <h4>Minería forestal y productos de madera:</h4>
            <p>Gestión sostenible de recursos forestales y fabricación de derivados de madera.</p>
            <h4>Limpieza y mantenimiento:</h4>
            <p>Servicios de limpieza integral, desinfección y cuidado de espacios verdes.</p>

            <h4>Seguridad industrial, higiene y medioambiente:</h4>
            <p>Asesoramiento, capacitaciones, auditorías y provisión de equipos de protección.</p>
            <h4>Industria del plástico:</h4>
            <p>
              Venta y distribución de materiales sintéticos e insumos industriales, incluyendo
              bolsas de residuos.
            </p>
          </div>

          <div className="heroPimg">
            <img src={catering} alt="catering" />
            <img src={agropecuaria} alt="catering" />
            <img src={deposito} alt="deposito" />
            <img src={catering2} alt="catering2" />
            <img src={logistica} alt="logistica" />
            <img src={seguridad} alt="seguridad" />
            <img src={limpieza} alt="limpieza" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
