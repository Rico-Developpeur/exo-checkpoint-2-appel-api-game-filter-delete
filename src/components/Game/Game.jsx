import React from "react";
import "./Game.css";

const Game = ({ name, image, rating }) => {
  return (
    <div className="game-container">
      <h2>{name}</h2>
      <img src={image} alt="game" />
      <p>note: {rating}</p>
    </div>
  );
};

export default Game;
