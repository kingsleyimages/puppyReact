import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SinglePlayer.css';
function singlePlayer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  // do an axios/fetch call to get the contact details by adding in the id from the params in URL
  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios(
          `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${id}`
        );
        setPlayer(response.data.data.player);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlayer();
  }, []);

  async function removePlayer({ id }) {
    try {
      const response = await axios.delete(
        `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${id}`
      );
      console.log(response);
      if (response.data.success === true) {
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Details for {player?.name}</h1>
      <div className="playerContainer">
        <img src={player?.imageUrl} alt={player?.name} />
        <div className="detail">
          <p>
            <span>Postion: </span>
            {player?.status}
          </p>
          <p>
            <span>Breed:</span> {player?.breed}
          </p>
          <p>
            <span>Team:</span> {player?.team?.name ?? 'No Team'}
          </p>
          <button>
            <Link to="/">View All Players</Link>
          </button>
          <button onClick={() => removePlayer({ id })}>Delete Player</button>
        </div>
      </div>
    </div>
  );
}

export default singlePlayer;
