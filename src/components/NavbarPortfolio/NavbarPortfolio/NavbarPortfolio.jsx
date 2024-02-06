import "../NavbarPortfolio/_navbarPortfolio.scss"
import logoPortfolio from "../../../../public/cometas.png"
import letrasLogo from "../../../../public/letrasLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavbarPortfolio() {
  return (
    <nav className="containerPrincipalNavbarPortfolio">
        <div className="logoContainer">
            <img src={logoPortfolio}></img>
        </div>
        <div className="logoPalabrasContainer">
            <img src={letrasLogo}></img>
        </div>
        <div className="contenedorBarras">
            <FontAwesomeIcon onClick={() => {console.log("click")}} className='iconBars' icon={ faBars }></FontAwesomeIcon>
        </div>
    </nav>
  )
}
