// Proyects.js
import ProyectCard from '../ProyectCard/ProyectCard';
import "./_proyects.scss";
import mercadoLibreScreen from "../../../public/screensProyect/mercadoLibreScreen.png";
import screenTattoo from "../../../public/screensProyect/screenTattoo.jpg";
import screenMunicipalidad from "../../../public/screensProyect/screenMunicipalidad.png"
import screenPassword from "../../../public/screensProyect/screenPassword.jpg"
import screenRick from "../../../public/screensProyect/screenRick.jpg"
import megadethScreen from "../../../public/screensProyect/screenMegadeth.jpg"
import ReactTag from "../Tags/ReactTag/ReactTag";
import ExpressTag from "../Tags/ExpressTag/ExpressTag";
import NodeTag from "../Tags/NodeTag/NodeTag";
import SassTag from "../Tags/SassTag/SassTag";
import FramerMotionTag from '../Tags/FramerMotionTag/FramerMotionTag';
import SQLTag from '../Tags/SQLTag/SQLTag';
import SequelizeTag from '../Tags/SequelizeTag/SequelizeTag';
import StyledComponentsTag from '../Tags/StyledComponentsTag/StyledComponentsTag';
import JavascriptTag from "../Tags/JavascriptTag/JavascriptTag"
import HtmlTag from "../Tags/HtmlTag/HtmlTag"
import CssTag from "../Tags/CssTag/CssTag"


export default function Proyects() {
  return (
    <div className="contenedorGralProyects">
      <div className="contenedorPrimerTitulo">
        <h5>Proyectos</h5>
      </div>
      <div className="contenedorSegundoTitulo">
        <h3>Proyectos Destacados</h3>
      </div>
      <div className="contenedorProyects">
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
          title="Desafío Técnico Municipalidad SN"
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
      </div>
    </div>
  )
}
