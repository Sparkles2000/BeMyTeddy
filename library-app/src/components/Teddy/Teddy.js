import React from 'react';
import "./Teddy.css";
import { Link } from 'react-router-dom';

function Teddy({ teddy, deleteTeddy, updateTeddy }) {
  const { id, name, age, gender, story } = teddy

  function handleAdoptClick() {
    deleteTeddy(id);
  }

  function handleChangeTeddyClick() {
    // lines 13-16 is a shorter way to write lines 18-23 (look up spread operator)
    // const updatedTeddy = {
    //   ...teddy,
    //   name: "Blackbeary"
    // }

    const updatedTeddy = {
      name: "Blackbeary",
      Gender: gender,
      Age: age,
      Story: story
    }
    updateTeddy(id, updatedTeddy)
  }

  return (
    <div className="teddy">
      <h2>
        <Link to={`https://teddy-bear-db-api.herokuapp.com/Teddies${id}`}>{name}</Link>
      </h2>
      <div className="Teddy-desc">
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Story: {story}</p>
      </div>
      <button className="teddy-btn" onClick={handleAdoptClick}>Adopt A Teddy</button>
      <button className="teddy-btn" onClick={handleChangeTeddyClick}>Update Teddy Info</button>
    </div>
  )
}

export default Teddy;