import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'; // Importa Link y animateScroll de react-scroll
import logo from '../../img/logoporta.png';
import menu from '../../img/menu.svg';

const Navbar = () => {
  const navLinkStyle = {
    marginLeft: '10px',
    marginRight: '10px',
    color: '#FFFFFF',
    transition: 'color 0.3s',
  };

  const brandLinkStyle = {
    marginLeft: '15px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Dancing Script',
    color: '#FFFFFF',
    transition: 'color 0.3s',
  };

  const selectedLinkStyle = {
    marginLeft: '10px',
    marginRight: '10px',
    color: '#ffb300',
    fontWeight: 'bold',
    transition: 'background-color 0.8s, color 0.8s', // Agregamos la transición al fondo y al color del texto
    backgroundColor: 'transparent', // Color de fondo inicial
  };

  const customBackgroundColor = {
    background: '#231d1e',
    boxShadow: '-4px 12px 0px -10px rgba(224,224,224,1)',
  };


  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú desplegable
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 100; // Cambia 100 por la distancia que prefieras
    setIsNavVisible(visible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMenuOpen(false); // Cierra el menú desplegable al seleccionar una opción
  };

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado del menú al hacer clic en el botón
  };

  return isNavVisible ? (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={customBackgroundColor}>
      <Link to="#Home" smooth={true} duration={500} offset={-70}>
        <a className="navbar-brand" href="#Home" style={brandLinkStyle}>
          <img src={logo} alt="Logo" width="200" height="100" />
        </a>
      </Link>
      <button
        className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
        style={{ marginRight: '5px', color: 'white' }}
        onClick={handleToggleClick}
      >
        <img src={menu} alt='menu' />
      </button>
      <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="Home" smooth={true} duration={500} offset={-70}>
            <a
              className={`nav-item nav-link ${activeLink === 'Home' ? 'active' : ''}`}
              href="#Home"
              style={activeLink === 'Home' ? selectedLinkStyle : navLinkStyle}
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </a>
          </Link>
          <Link to="Sobremi" smooth={true} duration={500} offset={-70}>
            <a
              className={`nav-item nav-link ${activeLink === 'Sobre mi' ? 'active' : ''}`}
              href="#Sobremi"
              style={activeLink === 'Sobre mi' ? selectedLinkStyle : navLinkStyle}
              onClick={() => handleLinkClick('Sobre mi')}
            >
              Sobre mi
            </a>
          </Link>
          <Link to="Skills" smooth={true} duration={500} offset={-70}>
            <a
              className={`nav-item nav-link ${activeLink === 'Skills' ? 'active' : ''}`}
              href="#Skills"
              style={activeLink === 'Skills' ? selectedLinkStyle : navLinkStyle}
              onClick={() => handleLinkClick('Skills')}
            >
              Skills
            </a>
          </Link>
          <Link to="Proyectos" smooth={true} duration={500} offset={-70}>
            <a
              className={`nav-item nav-link ${activeLink === 'Proyectos' ? 'active' : ''}`}
              href="#Proyectos"
              style={activeLink === 'Proyectos' ? selectedLinkStyle : navLinkStyle}
              onClick={() => handleLinkClick('Proyectos')}
            >
              Proyectos
            </a>
          </Link>
          <Link to="Contactame" smooth={true} duration={500} offset={-70}>
            <a
              className={`nav-item nav-link ${activeLink === 'Contactame' ? 'active' : ''}`}
              href="#Contactame"
              style={activeLink === 'Contactame' ? selectedLinkStyle : navLinkStyle}
              onClick={() => handleLinkClick('Contactame')}
            >
              Contactame
            </a>
          </Link>
        </div>
      </div>
    </nav>
  ) : null;
};

export default Navbar;
