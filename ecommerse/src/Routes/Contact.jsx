import React from 'react'
import './Contact.css'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";


export default function Contact() {
  return (
    <div className="contact">
      <h1>¡Contactame!</h1>
      <IconContext.Provider value={{ color: "blue", size: "5em"}}>
        <a href="https://www.linkedin.com/in/augusto-gallo-ab1150150/"><FaLinkedin className="icon" /></a>
        <a href="https://github.com/AugustoGa?tab"><FaGithub className="icon" /></a>
        <a href="augustogallo98@gmail.com"><FaEnvelope className="icon" /></a>
      </IconContext.Provider>
    </div>
  )
}
