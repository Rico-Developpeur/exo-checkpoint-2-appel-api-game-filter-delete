import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const GameDetail = () => {
  const [gameDetail, setGameDetail] = useState({});
  // appel useParams
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://apis.wilders.dev/wild-games/games/${id}`)
      .then((response) => response.data)
      .then((data) => {
        setGameDetail(data);
      });
  }, [id]);

  return (
    <div>
      {gameDetail && gameDetail.name && (
        <>
          <h2>{gameDetail.name}</h2>
          <img src={gameDetail.background_image} alt="game" />
          <p>{gameDetail.rating}</p>
          <Link to="/">Revenir aux jeux</Link>
        </>
      )}
    </div>
  );
};

export default GameDetail;
