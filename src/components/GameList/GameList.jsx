import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "../Game/Game";

const GameList = () => {
  const [gameList, setGameList] = useState([]);
  const [ratingGame, setRatingGame] = useState(false);

  useEffect(() => {
    axios
      .get("https://apis.wilders.dev/wild-games/games/")
      .then((response) => response.data)
      .then((data) => {
        setGameList(data);
      });
  }, []);

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
        ? gameList && (
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
                />
              ))}
            </>
          )}
    </div>
  );
};

export default GameList;
