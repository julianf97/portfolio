import { motion } from "framer-motion";
import "./_openNavbar.scss";
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import { useEffect } from "react";
import { useContext } from "react";

export default function OpenNavbar() {
  const { isMenuOpen } = useContext(OpenNavbarContext);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Habilitar scroll cuando el componente se desmonta
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <motion.div
      className="contenedorGral"
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: isMenuOpen ? 0 : "-100vw", opacity: isMenuOpen ? 1 : 0 }}
      transition={{ type: "tween", duration: 1.5, ease: "easeInOut" }}
    >
      <div className="openNavbarContainer">
        <div className="cabeceraOpenNavbarContainer">
          <div className="contenedorLogoLetras">
            <h1>Logo aquí</h1>
            {/* Puedes agregar cualquier contenido adicional aquí */}
          </div>
        </div>
        <nav className="navegadorNavbarOpen">
          <ul className="contenedorBotones">
            <li className="btnNav">Home</li>
            <li className="btnNav">Proyect</li>
            <li className="btnNav">About Me</li>
            <li className="btnNav">Blog</li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
