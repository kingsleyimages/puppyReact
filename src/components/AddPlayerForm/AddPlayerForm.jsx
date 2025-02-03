import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useBeforeUnload } from 'react-router-dom';

function AddPlayerForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [position, setPosition] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await axios.post(
        'https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players',
        {
          name,
          breed,
          status: position,
          imageUrl: url,
        }
      );

      if (data.data.success) {
        setSuccess(true);
        setName('');
        setBreed('');
        setPosition('');
        setUrl('');
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  return (
    <>
      <button>
        <Link to="/">View All Players</Link>
      </button>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            onChange={(e) => setBreed(e.target.value)}
            value={breed}
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
          />
        </label>
        <label>
          Image(url):
          <input
            type="url"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
        </label>

        <input type="submit" value="Add Player" />
      </form>
    </>
  );
}

export default AddPlayerForm;
