import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu;
  let menuMask;

  if (showMenu) {
    menu = (
      <motion.div
        className="menu bg-white w-50 h-100 shadow-lg"
        initial={{ y: 1300 }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.2,
          ease: "easeOut",
          type: "spring",
          stiffness: 50,
        }}
      >
        <FontAwesomeIcon
          icon={faUtensils}
          style={{ color: "rgb(220, 107, 173)" }}
        />
        <h1 className="menu-title">Admiral Kuhinja</h1>
        <ul>
          <li>
            <NavLink to="/homepage">Pocetna</NavLink>
          </li>
          <li>
            <NavLink to="/about">O nama</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Omiljeni</NavLink>
          </li>
          <li>
            <Link to="/savory-recipes">Slana Jela</Link>
          </li>
          <li>
            <Link to="/sweet-recipes">Slatka jela</Link>
          </li>
        </ul>
      </motion.div>
    );

    menuMask = (
      <div
        className=" menu-mask  w-100 h-100"
        onClick={() => setShowMenu(false)}
      ></div>
    );
  }

  return (
    <nav>
      <motion.span
        initial={{ x: 40 }}
        animate={{ x: 0 }}
        transition={{
          delay: 0.2,
          ease: "easeOut",
          type: "spring",
          stiffness: 130,
        }}
        className="fa-bars"
        onClick={() => setShowMenu(!showMenu)}
      >
        <FontAwesomeIcon icon={faBars} />
      </motion.span>
      {menuMask}
      {menu}
    </nav>
  );
};

export default Navigation;
