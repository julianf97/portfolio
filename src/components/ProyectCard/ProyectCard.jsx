/* eslint react/prop-types: 0 */
import { Link } from 'react-router-dom';
import "./_proyectCardMobile.scss";
import "./_proyectCardIpad.scss";
import "./_proyectCardDesktop.scss"

export default function ProyectCard({ title, image, deployLink, serverLink, repositoryLink, technologies }) {
  return (
    <section className="proyectCard">
        <div className="imgProyect">
            <img src={image} alt={title}></img>
        </div>
        <div className="titleProyectContainer">
            <h3>{title}</h3>
        </div>
        <div className="links">
          {deployLink && (
            <Link to={deployLink} target="_blank" rel="noopener noreferrer" className="btnResumen">
              <div>Deploy</div>
            </Link>
          )}
          {serverLink && (
            <Link to={serverLink} target="_blank" rel="noopener noreferrer" className="btnResumen">
              <div>Server</div>
            </Link>
          )}
          {!serverLink && deployLink && repositoryLink && (
            <Link to={repositoryLink} target="_blank" rel="noopener noreferrer" className="btnResumen">
              <div>Repositorio</div>
            </Link>
          )}
          {!deployLink && !serverLink && repositoryLink && (
            <Link to={repositoryLink} target="_blank" rel="noopener noreferrer" className="btnResumen">
              <div>Repositorio</div>
            </Link>
          )}
        </div>
        <div className="contenedorTecnologias">
          {technologies.map((tech, index) => (
            <div key={index} className="techTag">{tech}</div>
          ))}
        </div>
    </section>
  )
}
