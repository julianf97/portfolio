import "./_aboutMobile.scss"
import "./_aboutIpad.scss"
import "./_aboutDesktop.scss"
import foto from "../../../public/fotoSinFondo.png"
import { useEffect, useContext } from "react"
import NavbarPortfolio from "../../components/NavbarPortfolio/NavbarPortfolio/NavbarPortfolio"
import { OpenNavbarContext } from "../../context/OpenNavbarContext"
import OpenNavbar from "../../components/OpenNavbar/OpenNavbar"
import Footer from "../../components/Footer/Footer"

export default function About() {

    const { isMenuOpen, handleExitNavbar } = useContext(OpenNavbarContext);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      handleExitNavbar();
    }, []);
  
    scrollToTop();

  return (
    <>
        <NavbarPortfolio/>
        {isMenuOpen ? <OpenNavbar /> : <span />}
        <div className="contenedorGralAbout">
            <div className="contenedorDosDesktop">
                <div className="contenedorAboutImg">
                    <img src={foto}></img>
                </div>
                <div className="contenedorParrafo">
                    <div className="contenedorInteriorParrafo">
                        <p>Desarrollador fullstack nacido en Buenos Aires, Argentina con tres años de experiencia en constante capacitación en el campo del desarrollo web. Me apasiona la tecnología y el mundo de la informática, y me destaco por mi incesante búsqueda de conocimiento y mi habilidad para trabajar con una variedad de tecnologías, incluyendo Next.js, React, Node.js, Express, JavaScript, así como bases de datos SQL y NoSQL. Con una actitud proactiva y habilidades de comunicación en inglés y español, estoy comprometido a colaborar en equipos para crear software de alta calidad. Si estás interesado en mi perfil, no dudes en ponerte en contacto conmigo.</p>
                    </div>
                </div>
            </div>
            <div className="contenedorTituloChat">
                <h3>¿Quieres saber algo más de mi? <span>Preguntame!</span> </h3>
            </div>
            <div className="contenedorChat">
                <div className="chat"></div>
            </div>
        </div>
        <Footer/>
    </>

  )
}
