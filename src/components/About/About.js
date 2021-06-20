import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css"
import teddypic from "./teddypic.jpg"

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">Be My Teddy Bear</h1>
      {/* <img className="home-img" alt="Teddy" src={teddypic.jpg} /> */}
      <h2>Teddies need love too! Love a teddy! Care for a teddy! Adopt a teddy! Give a teddy a beary nice home! In return your teddy will take beary good care of you!</h2>
      <img className="about-img" alt="Teddy" src={teddypic} />
      <Link className="about-link" to="/Teddies">Show Me More!</Link>
    </div>
  )
}

export default About;