// Proyects.js
import { useContext, useEffect } from 'react';
import ProyectCard from '../components/ProyectCard/ProyectCard';
import NavbarPortfolio from "../components/NavbarPortfolio/NavbarPortfolio/NavbarPortfolio"
import "./_proyectsPageMobile.scss";
import "./_proyectsPageIpad.scss";
import "./_proyectsPageDesktop.scss"
import mercadoLibreScreen from "../../public/screensProyect/mercadoLibreScreen.png";
import screenTattoo from "../../public/screensProyect/screenTattoo.jpg";
import screenMunicipalidad from "../../public/screensProyect/screenMunicipalidad.png"
import screenPassword from "../../public/screensProyect/screenPassword.jpg"
import screenRick from "../../public/screensProyect/screenRick.jpg"
import megadethScreen from "../../public/screensProyect/screenMegadeth.jpg"
import ReactTag from "../components/Tags/ReactTag/ReactTag";
import ExpressTag from "../components/Tags/ExpressTag/ExpressTag";
import NodeTag from "../components/Tags/NodeTag/NodeTag";
import SassTag from "../components/Tags/SassTag/SassTag";
import FramerMotionTag from '../components/Tags/FramerMotionTag/FramerMotionTag';
import SQLTag from '../components/Tags/SQLTag/SQLTag';
import SequelizeTag from '../components/Tags/SequelizeTag/SequelizeTag';
import StyledComponentsTag from '../components/Tags/StyledComponentsTag/StyledComponentsTag';
import JavascriptTag from "../components/Tags/JavascriptTag/JavascriptTag"
import HtmlTag from "../components/Tags/HtmlTag/HtmlTag"
import CssTag from "../components/Tags/CssTag/CssTag"
import OpenNavbar from '../components/OpenNavbar/OpenNavbar';
import { OpenNavbarContext } from '../context/OpenNavbarContext';



export default function Proyects() {

  const { isMenuOpen, handleExitNavbar } = useContext(OpenNavbarContext);

  useEffect(() => {
    handleExitNavbar()
  },[])

  
  return (
    <div className='contenedorPageProyects'>
    {isMenuOpen ? <OpenNavbar /> : <span />}
    <NavbarPortfolio/>
    <div className="contenedorGralProyects">
      <div className="contenedorBuscador">
        <div className='buscador'>
          <input></input>
        </div>
      </div>
      <div className="contenedorFiltro">
      </div>
      <article className="contenedorProyects">
        <ProyectCard
          title="Desafio Técnico Mercado Libre"
          image={mercadoLibreScreen}
          deployLink="https://julian-merc-libre.vercel.app/"
          serverLink="https://server-julianstore.onrender.com/"
          technologies={[<ReactTag key="react" />, <JavascriptTag key="javascript"/>, <ExpressTag key="express" />, <NodeTag key="node" />, <StyledComponentsTag key="styledComponents"/>]}
        />
        <ProyectCard
          title="Sr.Finelli Tattoos"
          image={screenTattoo}
          deployLink="https://tattoo-finelli.vercel.app/"
          repositoryLink="https://github.com/julianf97/tattooFinelli"
          technologies={[<ReactTag key="react" />, <JavascriptTag key="javascript"/>, <SassTag key="sass" />, <FramerMotionTag key="framerMotion"/>]}
        />
        <ProyectCard
          title="Registro - Inicio de sesión"
          image={screenMunicipalidad}
          repositoryLink="https://github.com/julianf97/desafio-tecnico-municipalidadSN"
          technologies={[<ReactTag key="react" />, <JavascriptTag key="javascript"/>, <SassTag key="sass" />, <ExpressTag key="express" />, <NodeTag key="node" />, <SQLTag key="MySql"/>, <SequelizeTag key="sequelize"/>]}
        />
        <ProyectCard
          title="Password Generator"
          image={screenPassword}
          deployLink="https://password-generator-julianf97.vercel.app/"
          repositoryLink="https://github.com/julianf97/password-generator"
          technologies={[<ReactTag key="react" />, <JavascriptTag key="javascript"/>,<SassTag key="sass" />]}
        />
        <ProyectCard
          title="Rick & Morty Wiki"
          image={screenRick}
          deployLink="https://therickandmortyapp.vercel.app/"
          repositoryLink="https://github.com/julianf97/vitenMorty"
          technologies={[<ReactTag key="react" />, <JavascriptTag key="javascript"/>,<SassTag key="sass" />]}
        />
        <ProyectCard
          title="Megadeth Fan Website"
          image={megadethScreen}
          deployLink="https://megadeth.netlify.app/"
          repositoryLink="https://github.com/julianf97/megadeth"
          technologies={[<JavascriptTag key="javascript"/>,<SassTag key="sass" />, <HtmlTag key="htmlTag" />, <CssTag key="cssTag" />]}
        />
      </article>
    </div>
    </div>
    
  )
}
