/* eslint react/prop-types: 0 */
import "./_proyectCard.scss";

export default function ProyectCard({ title, image, deployLink, serverLink, repositoryLink, technologies }) {
  return (
    <div className="proyectCard">
        <div className="imgProyect">
            <img src={image} alt={title}></img>
        </div>
        <div className="titleProyectContainer">
            <h3>{title}</h3>
        </div>
        <div className="links">
          {deployLink && (
            <div className="btnResumen">
              <a href={deployLink} target="_blank" rel="noopener noreferrer">Deploy</a>
            </div>
          )}
          {serverLink && (
            <div className="btnResumen">
              <a href={serverLink} target="_blank" rel="noopener noreferrer">Server</a>
            </div>
          )}
          {!serverLink && deployLink && repositoryLink && (
            <div className="btnResumen">
              <a href={repositoryLink} target="_blank" rel="noopener noreferrer">Repositorio</a>
            </div>
          )}
          {!deployLink && !serverLink && repositoryLink && (
            <div className="btnResumen">
              <a href={repositoryLink} target="_blank" rel="noopener noreferrer">Repositorio</a>
            </div>
          )}
        </div>
        <div className="contenedorTecnologias">
          {technologies.map((tech, index) => (
            <div key={index} className="techTag">{tech}</div>
          ))}
        </div>
    </div>
  )
}
