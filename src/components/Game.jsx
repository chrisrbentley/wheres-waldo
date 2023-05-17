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
  const [popupCoords, setPopupCoords] = useState();
  const [coords, setCoords] = useState();

  function imageClick(e) {
    const popupX = e.pageX;
    const popupY = e.pageY;
    const bounds = e.target.getBoundingClientRect();
    const width = bounds.width;
    const height = bounds.height;
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const xPercent = Math.round((x / width) * 100);
    const yPercent = Math.round((y / height) * 100);
    const position = [xPercent, yPercent];
    setPopupCoords([popupX, popupY]);
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
            popupCoords={popupCoords}
          />
        ) : null}
      </main>
    </>
  );
}

function CharacterList({ characters, popupCoords }) {
  return (
    <ul
      id="popup-menu"
      style={{
        position: 'absolute',
        left: popupCoords[0],
        top: popupCoords[1],
      }}
    >
      <li>{characters[0].name}</li>
      <li>{characters[1].name}</li>
      <li>{characters[2].name}</li>
    </ul>
  );
}
