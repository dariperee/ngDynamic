import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <div id="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <div id="navIcons">
          <a
            href="https://www.linkedin.com/company/ngdynamic/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin icons"></i>
          </a>

          <a
            href="mailto:Gerenciageneral@ngdynamic.com?subject=Solicito información&body=Hola, quería consultar información
              acerca de..."
          >
            <i className="bi bi-envelope-open-fill icons"></i>
          </a>
        </div>

        <Link to="/" className="navLink">
          <button>Home</button>
        </Link>

        <div className="dropdown">
          <button>Rubros</button>
          <div className="dropdownContent">
            <Link to="/rubros/logistica" className="navLink">
              <button>Logística</button>
            </Link>
            <Link to="/rubros/mantenimiento" className="navLink">
              <button>Limpieza y Mantenimiento</button>
            </Link>
            <Link to="/rubros/consultoria" className="navLink">
              <button>Consultoría</button>
            </Link>
            <Link to="/rubros/nutricion" className="navLink">
              <button>Nutrición Animal</button>
            </Link>
            <Link to="/rubros/agropecuaria" className="navLink">
              <button>Agropecuaria</button>
            </Link>
          </div>
        </div>

        <Link to="/nosotros" className="navLink">
          <button>Nosotros</button>
        </Link>
        <Link to="/contacto" className="navLink">
          <button>Contacto</button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
