import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './_footer.scss';
import './_footerMobile.scss';

export default function Footer() {

  const handleEmailMe = () => {
    const destinatario = 'julianfinelli97@hotmail.com';
    const asunto = 'Hola Julián!, me contacto contigo desde el footer de tu portfolio!';

    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}`;

    window.location.href = mailtoLink;
}


  return (
    <footer className="contenedorFooter">
      <div className='internoFooter'>
        <div className="comunityContainer">
          <div className="tituloContainer">
            <span>Community</span>
          </div>
          <div className="youtubeContainer">
            <FontAwesomeIcon className='iconYoutube' icon={faYoutube} />
            <a href="https://www.youtube.com/channel/UCaaQx6Cr9iYLFE8WB4-n4Wg">
              <span>Youtube</span>
            </a>
          </div>
          <div className="githubContainer">
            <FontAwesomeIcon className='iconYoutube' icon={faGithub} />
            <a href="https://github.com/julianf97">
              <span>Github</span>
            </a>
          </div>
        </div>
        <div className="comunityContainer">
          <div className="tituloContainer">
            <span>Social Media</span>
          </div>
          <div className="linkedinContainer">
            <FontAwesomeIcon className='iconLinkedin' icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/julian-finelli/">
              <span>Linkedin</span>
            </a>
          </div>
          <div className="instagramContainer">
            <FontAwesomeIcon className='iconYoutube' icon={faInstagram} />
            <a href="https://www.instagram.com/">
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="comunityContainer">
          <div className="tituloContainer">
            <span>About</span>
          </div>
          <div className="learningContainer">
            <span>Learning About Me</span>
          </div>
          <div className="githubContainer">
            <span className='email' onClick={handleEmailMe} >julianfinelli97@gmail.com</span>
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
