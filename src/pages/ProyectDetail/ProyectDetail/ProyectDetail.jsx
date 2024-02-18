import "./_proyectDetailDesktop.scss"
import "./_proyectDetailIpad.scss"
import "./_proyectDetailMobile.scss"

import { useContext, useEffect } from "react";
import { OpenNavbarContext } from "../../../context/OpenNavbarContext";
import NavbarPortfolio from "../../../components/NavbarPortfolio/NavbarPortfolio/NavbarPortfolio";
import OpenNavbar from "../../../components/OpenNavbar/OpenNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";




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
              <FontAwesomeIcon className='flechaIzquierda' icon={faArrowLeft} />
              <span>Back</span>
            </div>
          </div>
        </>
    );

}
