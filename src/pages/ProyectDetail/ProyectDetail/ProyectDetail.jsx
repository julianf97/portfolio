import "./_proyectDetailDesktop.scss"
import "./_proyectDetailIpad.scss"
import "./_proyectDetailMobile.scss"

import { useContext, useEffect } from "react";
import { OpenNavbarContext } from "../../../context/OpenNavbarContext";
import NavbarPortfolio from "../../../components/NavbarPortfolio/NavbarPortfolio/NavbarPortfolio";
import OpenNavbar from "../../../components/OpenNavbar/OpenNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";




export default function ProyectDetail() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    handleExitNavbar()
  },[]);

  scrollToTop()


  const { isMenuOpen, handleExitNavbar } = useContext(OpenNavbarContext);

    return (
        <>
          <div className="contenedorGralProyectsDetail">
            {isMenuOpen ? <OpenNavbar /> : <span />}
            <NavbarPortfolio />
            <div className="contenedorVolver">
              <Link to={"/proyects"}>
                <FontAwesomeIcon className='flechaIzquierda' icon={faArrowLeft} />
                <span className="back">Back</span>
              </Link>
            </div>
            <div className="contenedorTituloProyect">
              <div className="interiorTituloProyect">
                <h2>Desafío Técnico Mercado Libre</h2>
              </div>
            </div>
            <div className="contenedorVideoProyect">
              <iframe 
                src="https://www.youtube.com/embed/mUtDxxb85Uk?si=s3v_NhYRgrm2u5JE" 
                title="YouTube video player"   
                sandbox="allow-same-origin allow-scripts" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="tituloDescripcion">
              <div className="interiorTituloDescripcion">
                <h4>Descripción</h4>
              </div>
            </div>
            <div className="descripcion">
              <div className="interiorDescripcion">
                <p>Project made for a large community of fans of belgrano de cordoba, the main objective of the application is to raise funds for each game played by the team, here will reflect the contributions of all users and also you can see the costs of each game.</p>
              </div>
            </div>
            <div className="tecnologias">
              <div className="tituloTecnologias">
                <div className="interiorTituloTecnologia">
                  <h4>Tecnologías y Caracteristicas</h4>
                </div>
              </div>
              <div className="listaTecnologias">
                <ul>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="contenedorBotones">
                <div className="btnProyect">Deploy</div>
                <div className="btnProyect"> Server </div>
              </div>
            </div>
          </div>
          <Footer/>
        </>
    );

}
