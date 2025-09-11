import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/navA.css";


const NavbarA = () => {
    return(<>
        <nav className='navA'>

          <div id='iconsA'>

            <a href="https://www.linkedin.com/company/ngdynamic/about/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin icons"></i></a>
            
            <a href="mailto:Gerenciageneral@ngdynamic.com?subject=Solicito información&body=Hola, quería consultar información
              acerca de..."><i className="bi bi-envelope-open-fill icons"></i></a>
              
          </div>


          <div id='dropA'>
            <i class="bi bi-list icons"></i>
          </div>

        </nav>
    </>)
}

export default NavbarA