import React, { useState } from 'react';
import Header from './Header';
import img from '../images/proj.jpeg';
import '../styles/game.css';

export function Game() {
  const [characters, setCharacters] = useState([
    { name: 'Man Ray', found: false },
    { name: 'Raiden', found: false },
    { name: 'Roger', found: false },
  ]);
  const [listShown, setListShown] = useState(false);
  const [coords, setCoords] = useState(undefined);

  function imageClick(e) {
    const position = [e.pageX, e.pageY];
    setCoords(position);
    console.log(position);

    setListShown(true);
  }

  return (
    <>
      <Header />
      <main>
        <img
          src={img}
          alt="Various characters across video games, movies and TV shows crowded in a city street and on buildings."
          id="game-image"
          onClick={imageClick}
        />
        {listShown ? (
          <CharacterList
            characters={characters}
            coords={coords}
          />
        ) : null}
      </main>
    </>
  );
}

function CharacterList({ characters, coords }) {
  return (
    <ul
      id="popup-menu"
      style={{
        position: 'absolute',
        left: coords[0],
        top: coords[1],
      }}
    >
      <li>{characters[0].name}</li>
      <li>{characters[1].name}</li>
      <li>{characters[2].name}</li>
    </ul>
  );
}
