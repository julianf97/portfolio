import { useContext, useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { motion, useAnimation } from "framer-motion";
import "./_navbarPortfolio.scss";
import letrasLogo from "../../../../public/letrasLogo.png";
import { OpenNavbarContext } from "../../../context/OpenNavbarContext";

export default function NavbarPortfolio() {
  const { handleClickOpen, handleExitNavbar, isOpen } = useContext(OpenNavbarContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(65);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) {
      setNavbarHeight(50); // Establece la nueva altura del navbar cuando se hace scroll
    } else {
      setNavbarHeight(70); // Vuelve a la altura original del navbar cuando el usuario está en la parte superior de la página
    }

    controls.start({ height: navbarHeight, transition: { duration: 0.2 } });
  }, [scrollPosition, navbarHeight, controls]);

  return (
    <motion.nav
      className={`containerPrincipalNavbarPortfolio ${isOpen ? 'open' : ''}`}
      style={{ height: navbarHeight }}
      animate={controls}
    >
      <div className="logoContainer">
        <img src={letrasLogo} alt="Logo Portfolio" />
      </div>
      <div className="logoPalabrasContainer" />
      <div className="contenedorBarras">
        <Hamburger
          onToggle={(toggled) => {
            if (toggled) {
              handleClickOpen();
            } else {
              handleExitNavbar();
            }
          }}
          size={20}
          color="#fff"
          rounded
          toggled={isOpen}
        />
      </div>
    </motion.nav>
  );
}
