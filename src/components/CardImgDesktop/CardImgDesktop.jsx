import { useState } from "react";
import { motion } from "framer-motion";
import foto from "../../../public/fotoSinFondo.png";
import "./_cardImgDesktop.scss";

export default function CardImgDesktop() {
  const [imgAnimationComplete, setImgAnimationComplete] = useState(false);

  const handleImgAnimationComplete = () => {
    setImgAnimationComplete(true);
  };

  return (
    <div className="contenedorCardImgDesktop">
      <motion.div
        className="cardImg"
        initial={{ x: "30vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1.5, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
        onAnimationComplete={handleImgAnimationComplete}
      >
        <img src={foto} alt="retrato"/>
      </motion.div>
      {imgAnimationComplete && (      <motion.div
        className="contenedorBotones"
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut", afterChildren: 0.5 }} // Espera 0.5 segundos después de que termine la animación de los hijos
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="btnResumen"
        >
          Contactame
        </motion.div>
        <motion.div
          className="btnResumen"
        >
          Mi CV
        </motion.div>
      </motion.div>) }
    </div>
  );
}


