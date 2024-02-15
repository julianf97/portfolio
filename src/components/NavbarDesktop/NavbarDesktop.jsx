import "./_navbarDesktop.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavbarDesktop() {
  return (
    <div className="contenedorNavbarDesktop">
      <ul>
        <motion.li 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Link to={"/portfolio"}>Home</Link>
        </motion.li>
        <motion.li 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Link to={"/proyects"}>Projects</Link>
        </motion.li>
        <motion.li 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Link to={"/about"}>About</Link>
        </motion.li>
        <motion.li 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Link to={"/blog"}>Blog</Link>
        </motion.li>
      </ul>
    </div>
  );
}

