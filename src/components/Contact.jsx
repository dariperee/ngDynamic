import { useEffect } from "react";
import "../styles/contact.css";
import Form from "./Form";
import background from "../assets/contact/background.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

const Contact = () => {
  useEffect(() => {
    document.title = "Contacto | NG Dynamic";
  }, []);

  return (
    <>
      {/* Contenedor solo de imagen con overlay y texto */}
      <section id="contactImg">
        <img src={background} alt="background" />
        <div className="overlayText">
          <h2>Contacto</h2>
          <p>Estamos para ayudarte, envianos tu consulta a través del formulario.</p>
        </div>
      </section>

      {/* Formulario separado */}
      <section id="contactForm">
        <div id="form">
          <Form />
        </div>
        <div id="data">
          <div id="dataIcon">
            <div id="contactIcons">
              <a
                href="https://www.linkedin.com/company/ngdynamic/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <i className="bi bi-linkedin"></i>
                </button>
              </a>

              <a href="mailto:Gerenciageneral@ngdynamic.com?subject=Solicito información&body=Hola, quería consultar información acerca de...">
                <button>
                  <i className="bi bi-envelope"></i>
                </button>
              </a>

              <a
                href="https://wa.me/5491172380483" // tu WhatsApp
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <i className="bi bi-whatsapp"></i>
                </button>
              </a>
            </div>
            <p>+54 9 11 7238-0483</p>
            <p>Uruguay 743, 3º piso, Oficina 310, CABA</p>
            <p>gerenciageneral@ngdynamic.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
