import { useContext } from "react";
import { Divide as Hamburger } from "hamburger-react";
import "./_navbarPortfolio.scss";
import letrasLogo from "../../../../public/letrasLogo.png";
import { OpenNavbarContext } from "../../../context/OpenNavbarContext";

export default function NavbarPortfolio() {
  const { handleClickOpen, handleExitNavbar, isOpen } = useContext(OpenNavbarContext);

  return (
    <nav className={`containerPrincipalNavbarPortfolio ${isOpen ? 'open' : ''}`}>
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
    </nav>
  );
}
