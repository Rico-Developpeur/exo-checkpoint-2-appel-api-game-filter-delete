import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "../Game/Game";

const GameList = () => {
  //UseState afin de faire le map
  const [gameList, setGameList] = useState([]);
  //useState rating
  const [ratingGame, setRatingGame] = useState(false);

  useEffect(() => {
    axios
      .get("https://apis.wilders.dev/wild-games/games/")
      .then((response) => response.data)
      .then((data) => {
        setGameList(data);
      });
  }, []);

  const handleDelete = (id) => {
    const newData = gameList.filter((game) => game.id !== id);
    setGameList(newData);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setRatingGame(!ratingGame);
        }}
      >
        {ratingGame ? "Tous les jeux" : "Jeux les mieux notés"}
      </button>

      {ratingGame
        ? //filtre raiting avec ternaire,
          gameList && (
            <>
              {gameList
                .filter((rat) => rat.rating >= 4.5)
                .map((game) => (
                  <Game
                    key={game.id}
                    name={game.name}
                    image={game.background_image}
                    rating={game.rating}
                    id={game.id}
                    deleteGame={handleDelete}
                  />
                ))}
            </>
          )
        : gameList && (
            <>
              {gameList.map((game) => (
                <Game
                  key={game.id}
                  name={game.name}
                  image={game.background_image}
                  rating={game.rating}
                  id={game.id}
                  deleteGame={handleDelete}
                />
              ))}
            </>
          )}
    </div>
  );
};

export default GameList;
