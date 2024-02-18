// Importa todos los componentes de tags necesarios
import ProyectCard from "../../components/ProyectCard/ProyectCard"
import { useEffect, useContext, useState } from 'react';
import NavbarPortfolio from "../../components/NavbarPortfolio/NavbarPortfolio/NavbarPortfolio"
import "./_proyectsPageMobile.scss";
import "./_proyectsPageIpad.scss";
import "./_proyectsPageDesktop.scss"
import ReactTag from "../../components/Tags/ReactTag/ReactTag";
import ExpressTag from "../../components/Tags/ExpressTag/ExpressTag";
import NodeTag from "../../components/Tags/NodeTag/NodeTag";
import SassTag from "../../components/Tags/SassTag/SassTag";
import FramerMotionTag from '../../components/Tags/FramerMotionTag/FramerMotionTag';
import SQLTag from '../../components/Tags/SQLTag/SQLTag';
import SequelizeTag from '../../components/Tags/SequelizeTag/SequelizeTag';
import StyledComponentsTag from '../../components/Tags/StyledComponentsTag/StyledComponentsTag';
import JavascriptTag from "../../components/Tags/JavascriptTag/JavascriptTag"
import HtmlTag from "../../components/Tags/HtmlTag/HtmlTag"
import CssTag from "../../components/Tags/CssTag/CssTag"
import FireBaseTag from "../../components/Tags/FirebaseTag/FireBaseTag"
import OpenNavbar from '../../components/OpenNavbar/OpenNavbar';
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { arrayProjectsPage } from "../../data/arrayProyectsPage";


export default function PageProyect() {
  const { isMenuOpen, handleExitNavbar } = useContext(OpenNavbarContext);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  scrollToTop()

  useEffect(() => {
    handleExitNavbar()
  },[]);

  // Función para manejar el cambio de filtro
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  // Función para manejar el cambio en el valor del input de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Objeto que mapea el nombre del tag al componente correspondiente
  const tagComponents = {
    ReactTag,
    ExpressTag,
    NodeTag,
    SassTag,
    FramerMotionTag,
    SQLTag,
    SequelizeTag,
    StyledComponentsTag,
    JavascriptTag,
    FireBaseTag,
    HtmlTag,
    CssTag
  };

  return (
    <>
      <div className='contenedorPageProyects'>
        {isMenuOpen ? <OpenNavbar /> : <span />}
        <NavbarPortfolio />
        <div className="contenedorGralProyects">
          <div className="contenedorBuscador">
            <div className='buscador'>
              <FontAwesomeIcon className='iconLupa' icon={ faMagnifyingGlass }></FontAwesomeIcon>
              <input 
                type="text" 
                placeholder='Search' 
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="contenedorFiltro">
            <button onClick={() => handleFilterChange('All')}>All</button>
            <button onClick={() => handleFilterChange('Frontend')}>Front End</button>
            <button onClick={() => handleFilterChange('Fullstack')}>Full Stack</button>
          </div>
          <article className="contenedorProyects">
            {arrayProjectsPage.filter(project => {
              // Filtra por título y por filtro seleccionado
              if (
                (searchTerm === '' || project.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
                (filter === 'All' || project.stack.toLowerCase() === filter.toLowerCase())
              ) {
                return true;
              }
              return false;
            }).map((project, index) => (
              <ProyectCard
                key={index}
                title={project.title}
                image={project.image}
                deployLink={project.deployLink}
                serverLink={project.serverLink}
                repositoryLink={project.repositoryLink}
                technologies={project.technologies.map((tag, index) => {
                  const TagComponent = tagComponents[tag];
                  return TagComponent ? <TagComponent key={index} /> : null;
                })}
              />
            ))}
          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}