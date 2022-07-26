import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Game.css";

const Game = ({ name, image, rating, id, deleteGame }) => {
  //useState afin de modifier le favori
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="game-container">
      <h2>
        {name} {favorite ? "❤️" : null}
      </h2>
      <img src={image} alt="game" />
      <p>note: {rating}</p>
      {/* lien pour envoyer via le params  */}
      <Link to={`/games/${id}`}>voir detail jeu</Link>
      {/* bouton delet */}
      <button type="button" onClick={() => deleteGame(id)}>
        Supprimer
      </button>
      {/* buton favori */}
      <button type="button" onClick={() => setFavorite(!favorite)}>
        {!favorite ? "ajouter au favori" : "retirer des favoris"}
      </button>
    </div>
  );
};

export default Game;
