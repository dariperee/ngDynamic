import logo from "../assets/logo.png";
import "../styles/navB.css";

import { Link } from "react-router-dom";

const NavbarB = () => {
    return(<>
        <nav className='navB'>
          <Link to="/" className="logo"><div id="logo"><img src={logo} alt="logo"/></div></Link>
          <Link to="/" className="navLink"><button>Home</button></Link>

          <div className="dropdown"><button>Rubros</button>
            <div className="dropdown-content">
                <Link to="/logistica" className="navLink"><button>Logística</button></Link>
                <Link to="/mantenimiento" className="navLink"><button>Limpieza y mantenimiento</button></Link>
                <Link to="/consultoria" className="navLink"><button>Consultoría</button></Link>
                <Link to="/nutricion" className="navLink"><button>Nutrición Animal</button></Link>
                <Link to="/agroexp" className="navLink"><button>Agropecuaria y exportación</button></Link> 
            </div>
          </div>

          <Link to="/nosotros" className="navLink"><button>Nosotros</button></Link>
          <Link to="/contacto" className="navLink"><button>Contacto</button></Link>
        </nav>
    </>)
}

export default NavbarB