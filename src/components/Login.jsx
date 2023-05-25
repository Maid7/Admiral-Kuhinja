import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1.5 }}
    >
      <h2>Dobrodosli u maminu kuhinju</h2>
      <Link to="/homepage">
        <motion.button
          className="login-button"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Istrazite Recepte
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Login;
