import "./_portfolio.scss"
import video from "../../../public/portfolioBackgroundVideo.webm"
import NavbarPortfolio from "../../components/NavbarPortfolio/NavbarPortfolio/NavbarPortfolio"
import OpenNavbar from "../OpenNavbar/OpenNavbar"
import DescriptionInitialPortfolio from "../DescripcionInitialPortfolio/DescriptionInitialPortfolio.jsx"
import { OpenNavbarContext } from "../../context/OpenNavbarContext.jsx"
import { useContext } from "react"

export default function Portfolio() {

  const { isMenuOpen } = useContext(OpenNavbarContext)

  return (
    <>
      <main className="principalContainer">
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
        { isMenuOpen ? <OpenNavbar/> : <span/> }
        <NavbarPortfolio/>
        <DescriptionInitialPortfolio/>
      </main>
    </>
  )
}
