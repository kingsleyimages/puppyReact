import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Search.css';

function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [players, setPlayers] = useState([]);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredPlayers.length === 1) {
      navigate(`/player/detail/${filteredPlayers[0].id}`);
      search = '';
    } else {
      console.log('No player found');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Search
          <input
            type="text"
            placeholder="Search for a player"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
export default Search;
