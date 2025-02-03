import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Players.css';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Players() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  async function getPlayers() {
    try {
      const response = await axios(
        'https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players'
      );
      setPlayers(response.data.data.players);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <>
      <Search />
      <div className="playerCard">
        {players.map((player) => (
          <div className="playerList" key={player.id}>
            <h3>{player.name}</h3>
            <img src={player.imageUrl} alt={player.name} />
            <p>Position: {player.status}</p>
            <button
              onClick={() => {
                navigate(`/player/detail/${player.id}`);
              }}>
              View Player Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Players;
