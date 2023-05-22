import React, { useState } from 'react';
import Header from './Header';
import img from '../images/proj.jpeg';
import '../styles/game.css';
import { getCoords } from '../firebaseFunctions';

export function Game() {
  const [characters, setCharacters] = useState([
    { name: 'Man Ray', id: 1, found: false },
    { name: 'Raiden', id: 2, found: false },
    { name: 'Roger', id: 3, found: false },
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
    setListShown(true);
    return setCoords(position);
  }

  return (
    <>
      <Header characters={characters} />
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
            setCharacters={setCharacters}
            coords={coords}
            popupCoords={popupCoords}
          />
        ) : null}
      </main>
    </>
  );
}

function CharacterList({ characters, setCharacters, coords, popupCoords }) {
  async function validateCoords(e) {
    const char = e.target.dataset.char;
    const charData = await getCoords(char);

    let x = charData.possibleXCoords;
    let y = charData.possibleYCoords;

    if (x.includes(coords[0]) && y.includes(coords[1])) {
      let updatedCharacters = [...characters];
      const obj = updatedCharacters.find((x) => x.id === charData.id);
      obj.found = true;
      setCharacters(updatedCharacters);
    }
  }

  return (
    <ul
      id="popup-menu"
      style={{
        position: 'absolute',
        left: popupCoords[0],
        top: popupCoords[1],
      }}
    >
      <li
        data-char="manray"
        onClick={characters[0].found ? undefined : validateCoords}
        className={characters[0].found ? 'line-through' : ''}
        aria-label="Man Ray"
      >
        {characters[0].name}
      </li>
      <li
        data-char="raiden"
        onClick={characters[1].found ? undefined : validateCoords}
        className={characters[1].found ? 'line-through' : ''}
        aria-label="Raiden"
      >
        {characters[1].name}
      </li>
      <li
        data-char="roger"
        onClick={characters[2].found ? undefined : validateCoords}
        className={characters[2].found ? 'line-through' : ''}
        aria-label="Roger"
      >
        {characters[2].name}
      </li>
    </ul>
  );
}
