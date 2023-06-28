import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="info">
        <h2>{props.name}</h2>
        <img src={props.img} alt="profile_pic" />
      </div>
      <div className="info">
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
      <Link to={`${props.id}`}> Visit Profile </Link>
    </div>
  );
};

export default Card;
