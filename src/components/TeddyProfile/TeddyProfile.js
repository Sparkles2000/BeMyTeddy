import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./TeddyProfile.css";


const BASE_URL = 'https://teddiesdb.herokuapp.com/teddies'

function TeddyProfile() {
  const [teddy, setTeddy] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const URL =`${BASE_URL}/${id}`;
    fetch(URL)
      .then(r => r.json())
      .then(teddyData => {
        setTeddy(teddyData);
      })
      .catch(err => console.error(err))
  }, [id])

  useEffect(() => {
    console.log(teddy);
  }, [teddy])

  return (
    <div className="teddy-profile-container">
      <h2 className="teddy-profile-heading">{teddy.name}</h2>
      <img className="teddy-profile-image" src={teddy.image} alt={teddy.image} width="90%" />
      <p className="teddy-profile-detail">Age: {teddy.age}</p>
      <p className="teddy-profile-detail">Gender: {teddy.gender}</p>
      <p className="teddy-profile-detail">Story: {teddy.story}</p>
    </div>
  )
}

export default TeddyProfile;