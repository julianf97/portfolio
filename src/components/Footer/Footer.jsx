import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './_footer.scss';
import './_footerMobile.scss';

export default function Footer() {
  return (
    <footer className="contenedorFooter">
      <div className='internoFooter'>
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
            <span>Learning About Me</span>
          </div>
          <div className="githubContainer">
            <span className='email'>julianfinelli97@gmail.com</span>
          </div>
          <div className="derechosContainerMobile">
            <span className='derechos'>© Julian Dev 2024 Inc. All rights reserved.</span>
          </div>
        </div>
      </div>
      <div className="derechosContainer">
        <span className='derechos'>© Julian Dev 2024 Inc. All rights reserved.</span>
      </div>
    </footer>
  );
}
