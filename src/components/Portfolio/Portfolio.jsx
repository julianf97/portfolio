// Portfolio.jsx
import { useContext, useEffect } from "react";
import { OpenNavbarContext } from "../../context/OpenNavbarContext.jsx";
import NavbarPortfolio from "../../components/NavbarPortfolio/NavbarPortfolio/NavbarPortfolio";
import OpenNavbar from "../OpenNavbar/OpenNavbar";
import DescriptionInitialPortfolio from "../DescripcionInitialPortfolio/DescriptionInitialPortfolio.jsx";
import CardImg from "../CardImg/CardImg.jsx";
import CardImgDesktop from "../CardImgDesktop/CardImgDesktop.jsx";
import Proyects from "../Proyects/Proyects.jsx";
import Footer from "../Footer/Footer.jsx";
import video from "../../../public/portfolioBackgroundVideo.webm";
import "./_portfolioMobile.scss"
import "./_portfolioIpad.scss"
import "./_portfolioDesktop.scss"

export default function Portfolio() {
  const { isMenuOpen, handleExitNavbar  } = useContext(OpenNavbarContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  scrollToTop()

  useEffect(() => {
    handleExitNavbar()
  },[])

  return (
    <> 
      <main>
        <div className="principalContainer">
          <div className="soloDesktop">
            <video
              className="soloDesktopVideo"
              src={video}
              preload="false"
              playsInline
              loop
              muted
              autoPlay
            ></video>
          </div>
          <div className="backgroundContainer"></div>
          <div className="videoContainer">
            <video
              src={video}
              preload="false"
              playsInline
              loop
              muted
              autoPlay
            ></video>
          </div>
          {isMenuOpen ? <OpenNavbar /> : <span />}
          <NavbarPortfolio />
          <div className="divisor">
            <DescriptionInitialPortfolio />
            <CardImgDesktop/>
          </div>
        </div>
        <CardImg/>
        <Proyects />
      </main>
      <Footer />
    </>
  );
}
