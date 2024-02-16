import mercadoLibreScreen from "../../public/screensProyect/mercadoLibreScreen.png";
import screenTattoo from "../../public/screensProyect/screenTattoo.jpg";
import screenMunicipalidad from "../../public/screensProyect/screenMunicipalidad.png"
import screenPassword from "../../public/screensProyect/screenPassword.jpg"
import screenRick from "../../public/screensProyect/screenRick.jpg"
import megadethScreen from "../../public/screensProyect/screenMegadeth.jpg"

export const arrayProjects = [
    {
      title: "Mercado Libre Technical Challenge",
      image: mercadoLibreScreen,
      deployLink: "https://julian-merc-libre.vercel.app/",
      serverLink: "https://server-julianstore.onrender.com/",
      technologies: ["ReactTag", "JavascriptTag", "ExpressTag", "NodeTag", "StyledComponentsTag"]
    },
    {
      title: "Sr.Finelli Tattoos",
      image: screenTattoo,
      deployLink: "https://tattoo-finelli.vercel.app/",
      repositoryLink: "https://github.com/julianf97/tattooFinelli",
      technologies: ["ReactTag", "JavascriptTag", "SassTag", "FramerMotionTag"]
    },
    {
      title: "Register - Login",
      image: screenMunicipalidad,
      repositoryLink: "https://github.com/julianf97/desafio-tecnico-municipalidadSN",
      technologies: ["ReactTag", "JavascriptTag", "SassTag", "ExpressTag", "NodeTag", "MySQLTag", "SequelizeTag"]
    },
    {
      title: "Password Generator",
      image: screenPassword,
      deployLink: "https://password-generator-julianf97.vercel.app/",
      repositoryLink: "https://github.com/julianf97/password-generator",
      technologies: ["ReactTag", "JavascriptTag", "SassTag"]
    },
    {
      title: "Rick & Morty Wiki",
      image: screenRick,
      deployLink: "https://therickandmortyapp.vercel.app/",
      repositoryLink: "https://github.com/julianf97/vitenMorty",
      technologies: ["ReactTag", "JavascriptTag", "SassTag"]
    },
    {
      title: "Megadeth Fan Website",
      image: megadethScreen,
      deployLink: "https://megadeth.netlify.app/",
      repositoryLink: "https://github.com/julianf97/megadeth",
      technologies: ["JavascriptTag", "SassTag", "HtmlTag", "CssTag"]
    }
  ];
  