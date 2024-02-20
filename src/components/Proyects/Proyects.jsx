import ProyectCard from '../ProyectCard/ProyectCard';
import "./_proyectsMobile.scss";
import "./_proyectsIpad.scss";
import "./_proyectsDesktop.scss";
import ReactTag from "../Tags/ReactTag/ReactTag";
import ExpressTag from "../Tags/ExpressTag/ExpressTag";
import NodeTag from "../Tags/NodeTag/NodeTag";
import SassTag from "../Tags/SassTag/SassTag";
import FramerMotionTag from '../Tags/FramerMotionTag/FramerMotionTag';
import SQLTag from '../Tags/SQLTag/SQLTag';
import SequelizeTag from '../Tags/SequelizeTag/SequelizeTag';
import StyledComponentsTag from '../Tags/StyledComponentsTag/StyledComponentsTag';
import JavascriptTag from "../Tags/JavascriptTag/JavascriptTag";
import HtmlTag from "../Tags/HtmlTag/HtmlTag";
import CssTag from "../Tags/CssTag/CssTag";
import { arrayProjects } from '../../data/arrayProyects';
import { Link } from 'react-router-dom';

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
  HtmlTag,
  CssTag
};

export default function Proyects() {
  return (
    <div className="contenedorGralProyects">
      <div className="contenedorPrimerTitulo">
        <h5>Proyectos</h5>
      </div>
      <div className="contenedorSegundoTitulo">
        <h3>Proyectos Destacados</h3>
      </div>
      <article className="contenedorProyects">
        {arrayProjects.map((project, index) => (
          <ProyectCard
            key={index}
            id={project.id} 
            title={project.title}
            image={project.image}
            deployLink={project.deployLink}
            serverLink={project.serverLink}
            repositoryLink={project.repositoryLink}
            videoYoutube={project.urlYoutube}
            technologies={project.technologies.map((tag, index) => {
              const TagComponent = tagComponents[tag];
              return TagComponent ? <TagComponent key={index} /> : null;
            })}
          />
        ))}
      </article>
      <div className='contenedorBtnVerTodos'>
        <Link to={"/proyects"}> 
          <div className='btnResumen'>
            <span>Ver Más</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
