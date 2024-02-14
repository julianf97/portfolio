import { useContext, useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { motion, useAnimation } from "framer-motion";
import "./_navbarPortfolioMobile.scss";
import "./_navbarPortfolioIpad.scss";
import "./_navbarPortfolioDesktop.scss";
import letrasLogo from "../../../../public/letrasLogo.png";
import { OpenNavbarContext } from "../../../context/OpenNavbarContext";
import NavbarDesktop from "../../NavbarDesktop/NavbarDesktop";

export default function NavbarPortfolio() {
  const { handleClickOpen, handleExitNavbar, isOpen } = useContext(OpenNavbarContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(65);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 900);

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
      setNavbarHeight(50);
    } else {
      setNavbarHeight(70);
    }

    controls.start({ height: navbarHeight, transition: { duration: 0.2 } });
  }, [scrollPosition, navbarHeight, controls]);

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth >= 900);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.nav
      className={`containerPrincipalNavbarPortfolio ${isOpen ? "open" : ""}`}
      style={{ height: navbarHeight }}
      animate={controls}
    >
      <div className="logoContainer">
        <img src={letrasLogo} alt="Logo Portfolio" />
      </div>
      <div className="logoPalabrasContainer">
        <div className="contenedorNavDesktop">
          <NavbarDesktop/>
        </div>
        <span className="selectorIdiomaMobile"> ES </span>
      </div>
      <div className="contenedorBarras">
        {!isLargeScreen && (
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
        )}
        <span className="selectorIdioma"> ES </span>
      </div>
    </motion.nav>
  );
}
