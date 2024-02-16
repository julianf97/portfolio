import mercadoLibreScreen from "../../public/screensProyect/mercadoLibreScreen.png";
import screenTattoo from "../../public/screensProyect/screenTattoo.jpg";
import screenMunicipalidad from "../../public/screensProyect/screenMunicipalidad.png";
import screenPassword from "../../public/screensProyect/screenPassword.jpg";
import screenRick from "../../public/screensProyect/screenRick.jpg";
import megadethScreen from "../../public/screensProyect/screenMegadeth.jpg";
import alphaGamesScreen from "../../public/screensProyect/screenAlphaGames.png";
import spaceGamesScreen from "../../public/screensProyect/screenSpaceGames.png";
import coloCossyScreen from "../../public/screensProyect/screenColoCossy.png";

export const arrayProjectsPage = [
  {
    id: "mercadoLibre",
    title: "Desafio Técnico Mercado Libre",
    image: mercadoLibreScreen,
    deployLink: "https://julian-merc-libre.vercel.app/",
    serverLink: "https://server-julianstore.onrender.com/",
    technologies: ["ReactTag", "JavascriptTag", "ExpressTag", "NodeTag", "StyledComponentsTag"],
    stack: "fullstack"
  },
  {
    id: "finellitattoos",
    title: "Sr.Finelli Tattoos",
    image: screenTattoo,
    deployLink: "https://tattoo-finelli.vercel.app/",
    repositoryLink: "https://github.com/julianf97/tattooFinelli",
    technologies: ["ReactTag", "JavascriptTag", "SassTag", "FramerMotionTag"],
    stack: "frontend"
  },
  {
    id: "snmunicipalidad",
    title: "Registro - Inicio de sesión",
    image: screenMunicipalidad,
    repositoryLink: "https://github.com/julianf97/desafio-tecnico-municipalidadSN",
    technologies: ["ReactTag", "JavascriptTag", "SassTag", "ExpressTag", "NodeTag", "MySQLTag", "SequelizeTag"],
    stack: "fullstack"
  },
  {
    id: "passwordgenerator",
    title: "Password Generator",
    image: screenPassword,
    deployLink: "https://password-generator-julianf97.vercel.app/",
    repositoryLink: "https://github.com/julianf97/password-generator",
    technologies: ["ReactTag", "JavascriptTag", "SassTag"],
    stack: "frontend"
  },
  {
    id: "rickandmorty",
    title: "Rick & Morty Wiki",
    image: screenRick,
    deployLink: "https://therickandmortyapp.vercel.app/",
    repositoryLink: "https://github.com/julianf97/vitenMorty",
    technologies: ["ReactTag", "JavascriptTag", "SassTag"],
    stack: "frontend"
  },
  {
    id: "megadeth",
    title: "Megadeth Fan Website",
    image: megadethScreen,
    deployLink: "https://megadeth.netlify.app/",
    repositoryLink: "https://github.com/julianf97/megadeth",
    technologies: ["JavascriptTag", "SassTag", "HtmlTag", "CssTag"],
    stack: "frontend"
  },
  {
    id: "spacegames",
    title: "Space Games",
    image: spaceGamesScreen,
    deployLink: "https://space-games.vercel.app/",
    repositoryLink: "https://github.com/julianf97/megadeth",
    technologies: ["ReactTag", "JavascriptTag", "FireBaseTag",  "SassTag"],
    stack: "fullstack"
  },
  {
    id: "alphagames",
    title: "Alpha Games",
    image: alphaGamesScreen,
    deployLink: "https://alpha-games-pi.vercel.app/",
    repositoryLink: "https://github.com/julianf97/alphaGames",
    technologies: ["SassTag", "HtmlTag", "CssTag"],
    stack: "frontend"
  },
  {
    id: "colocossy",
    title: "Colo Cossy Fotografía",
    image: coloCossyScreen,
    deployLink: "https://colocossyfotografia.netlify.app/",
    repositoryLink: "",
    technologies: ["SassTag", "HtmlTag", "CssTag"],
    stack: "frontend"
  }
];
