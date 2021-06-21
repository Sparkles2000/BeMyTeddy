import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import teddypic from "./teddypic.jpg"

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Be My Teddy Bear</h1>
      <img className="home-img" alt="Teddy" src={teddypic} />
      <Link className="home-link" to="/Teddies">Show Me More!</Link>
    </div>
  )
}

export default Home;