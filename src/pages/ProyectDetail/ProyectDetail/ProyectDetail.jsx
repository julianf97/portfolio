import { useContext, useEffect } from "react";
import { OpenNavbarContext } from "../../../context/OpenNavbarContext";
import NavbarPortfolio from "../../../components/NavbarPortfolio/NavbarPortfolio/NavbarPortfolio";
import OpenNavbar from "../../../components/OpenNavbar/OpenNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import YouTube from 'react-youtube';

export default function ProyectDetail() {
  const { isMenuOpen, handleExitNavbar } = useContext(OpenNavbarContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    handleExitNavbar();
    scrollToTop();
  }, []);

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
          <YouTube className="video" videoId="mUtDxxb85Uk" />
        </div>
      </div>
    </>
  );
}
