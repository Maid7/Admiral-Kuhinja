import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Header />
      <motion.div
        className="about-us"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
      >
        <h1>O nama</h1>
        <h3>
          Zdravo,Moje ime je <span>Admira</span>{" "}
        </h3>
        <p>
          Ja sam Admira Sejdinovic i autor sam recepata o hrani koji se nalazi
          trenutno pred vama . <br /> Aplikacija “Admiral-kuhinja” zamišljen je
          kao web odredište na kojem s ostalim zaljubljenicima u kuhanje i hranu
          dijelim svoje kulinarske ideje i eksperimente, kuhinjske navike kao i
          nova kuharska (sa)znanja koja otkrivam prilikom pripreme meni novih i
          zanimljivih jela.
        </p>
        <div className="about-us--contact">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaPinterest />
        </div>
        <p>
          Prvi cilj bloga bilo je dokumentiranje svih mojih kulinarskih
          eksperimenata, novih jela i isprobanih starih, manje poznatih
          recepata. S vremenom sam tu ideju nadogradio s novim ciljem. Danas je
          cilj bloga, osim da služi kao inspiracija što skuhati, popularizirati
          kuhanje kod kuće i pokazati svima koji iz nekog razloga smatraju da je
          kuhanje teško ili da kuhanje nije za njih, kako najvjerojatnije nisu u
          pravu.
        </p>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
