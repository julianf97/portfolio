import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './_footer.scss';

export default function Footer() {
  return (
    <footer className="contenedorFooter">
        <div className="comunityContainer">
          <div className="tituloContainer">
            <span>Community</span>
          </div>
          <div className="youtubeContainer">
            <FontAwesomeIcon className='iconYoutube' icon={faYoutube} />
            <span>Youtube</span>
          </div>
          <div className="githubContainer">
            <FontAwesomeIcon className='iconYoutube' icon={faGithub} />
            <span>Github</span>
          </div>
        </div>
        <div className="comunityContainer">
          <div className="tituloContainer">
            <span>Social Media</span>
          </div>
          <div className="youtubeContainer">
            <FontAwesomeIcon className='iconYoutube' icon={faLinkedin} />
            <span>Linkedin</span>
          </div>
          <div className="githubContainer">
            <FontAwesomeIcon className='iconYoutube' icon={faInstagram} />
            <span>Instagram</span>
          </div>
        </div>
        <div className="comunityContainer">
          <div className="tituloContainer">
            <span>About</span>
          </div>
          <div className="youtubeContainer">
            <span >Learning About Me</span>
          </div>
          <div className="githubContainer">
            <span className='email'>julianfinelli97@gmail.com</span>
          </div>
          <div className="githubContainer">
            <span className='derechos'>© Julian Dev 2024 Inc. All rights reserved.</span>
          </div>
        </div>
    </footer>
  );
}

