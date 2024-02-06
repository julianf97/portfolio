import "./_portfolio.scss"
import video from "../../../public/portfolioBackgroundVideo.webm"
import NavbarPortfolio from "../../components/NavbarPortfolio/NavbarPortfolio/NavbarPortfolio"

export default function Portfolio() {
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
        <NavbarPortfolio/>
      </main>
    </>
  )
}
