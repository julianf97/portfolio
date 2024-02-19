import "./_proyectDetailDesktop.scss"
import "./_proyectDetailIpad.scss"
import "./_proyectDetailMobile.scss"

import { useContext, useEffect } from "react";
import { OpenNavbarContext } from "../../../context/OpenNavbarContext";
import NavbarPortfolio from "../../../components/NavbarPortfolio/NavbarPortfolio/NavbarPortfolio";
import mercadoLibre from "../../../../public/screensProyect/mercadoLibreScreen.png"
import OpenNavbar from "../../../components/OpenNavbar/OpenNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";




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
              <h2>Desafío Técnico Mercado Libre</h2>
            </div>
            <div className="contenedorVideoProyect">
            <iframe src="https://www.youtube.com/embed/mUtDxxb85Uk?si=s3v_NhYRgrm2u5JE" title="YouTube video player"   sandbox="allow-same-origin allow-scripts" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </>
    );

}
