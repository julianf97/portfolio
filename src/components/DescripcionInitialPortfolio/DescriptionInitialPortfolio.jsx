import { motion } from "framer-motion";
import { useState } from "react"; // Importa useState
import "./_descriptionInitialPortfolio.scss";

export default function DescriptionInitialPortfolio() {
  const [showCard, setShowCard] = useState(false); // Estado para controlar la visibilidad de cardFullStack

  return (
    <div className="contenedorGralDescriptionInitialPortfolio">
      <div className="contenedorCardFullStack">
        <motion.div
          className="cardFullStack"
          initial={{ y: "-5vh", opacity: 0 }}
          animate={{ y: 0, opacity: showCard ? 1 : 0 }} // Condición para mostrar u ocultar la tarjeta
          transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="iconoEstrellas text-[#b49bff] mr-[2px]" // Cambia aquí el tamaño del icono
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text"> FullStack Developer </span>
        </motion.div>
      </div>
      <motion.div
        className="titleTextPresentation"
        initial={{ x: "-15vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1.5, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
        onAnimationComplete={() => setShowCard(true)} // Cuando la animación del título se complete, muestra cardFullStack
      >
        <h1>Hola 👋! Soy <span className="theBest">Julián Finelli </span>Desarrollador Web</h1>
      </motion.div>
      <motion.div
        className="descriptionTextPresentation"
        initial={{ x: "-15vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1.6, ease: "easeInOut", delay: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <p>Programador con más de 3 años de experiencia, centrado en la creación de aplicaciones web rápidas, intuitivas y construidas con las mejores prácticas del mercado. Me especializo en proporcionar la mejor experiencia de usuario, combinando un diseño excepcional con una eficacia de desarrollo óptima.</p>
      </motion.div>
    </div>
  );
}
