import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "../Game/Game";

const GameList = () => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    axios
      .get("https://apis.wilders.dev/wild-games/games/")
      .then((response) => response.data)
      .then((data) => {
        setGameList(data);
      });
  }, []);

  const handleFilter = () => {
    const newData = gameList.filter((rat) => rat.rating >= 4.5);
    setGameList([...newData]);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          handleFilter(gameList.rating);
        }}
      >
        Best Games
      </button>

      {gameList && (
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
