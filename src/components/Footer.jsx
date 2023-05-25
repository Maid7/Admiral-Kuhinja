import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faHeart,
  faStroopwafel,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="rounded-top"
      initial={{ y: 350 }}
      animate={{ y: 0 }}
      transition={{
        delay: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 50,
      }}
    >
      <Link to="/homepage">
        <div className="footer-icons">
          <FontAwesomeIcon icon={faUtensils} />
          <p>Recepti</p>
        </div>
      </Link>

      <Link to="/favorites">
        <div className="footer-icons">
          <FontAwesomeIcon icon={faHeart} />
          <p>Omiljeni</p>
        </div>
      </Link>
      <Link to="/sweet-recipes">
        <div className="footer-icons">
          <FontAwesomeIcon icon={faStroopwafel} />
          <p>Slatko</p>
        </div>
      </Link>

      <Link to="/savory-recipes">
        <div className="footer-icons">
          <FontAwesomeIcon icon={faBowlFood} />
          <p>Slano</p>
        </div>
      </Link>
    </motion.footer>
  );
};

export default Footer;
