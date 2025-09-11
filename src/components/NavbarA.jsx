import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/navA.css";

const NavbarA = () => {
    return(<>
        <nav className='navA'>  {/* Navbar A en general */}

          <div id='navAleft'>    {/* Lado izq */}

            <a href="https://www.linkedin.com/company/ngdynamic/about/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin iconsA"></i></a>
            
            <a href="mailto:Gerenciageneral@ngdynamic.com?subject=Solicito información&body=Hola, quería consultar información
              acerca de..."><i className="bi bi-envelope-open-fill iconsA"></i></a>
              
          </div>


          <div id='navAright'>     {/* Lado derecho */}
            <i class="bi bi-list iconsA"></i>
          </div>

        </nav>
    </>)
}

export default NavbarA