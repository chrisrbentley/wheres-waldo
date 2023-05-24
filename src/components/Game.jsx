import React, { useState, useEffect } from 'react';
import Header from './Header';
import img from '../images/proj.jpeg';
import '../styles/game.css';
import { getCoords } from '../firebaseFunctions';
import { format, intervalToDuration } from 'date-fns';

export function Game() {
  const [characters, setCharacters] = useState([
    { name: 'Man Ray', id: 1, found: false, char: 'manray' },
    { name: 'Raiden', id: 2, found: false, char: 'raiden' },
    { name: 'Roger', id: 3, found: false, char: 'roger' },
  ]);

  const [listShown, setListShown] = useState(false);
  const [popupCoords, setPopupCoords] = useState();
  const [coords, setCoords] = useState();
  const [gameWon, setGameWon] = useState(false);

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [totalTime, setTotalTime] = useState();

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

  useEffect(() => {
    if (startTime === undefined) {
      setStartTime(Date.now());
    }
  }, [startTime]);

  useEffect(() => {
    let allFound = characters.every((obj) => obj.found === true);
    if (allFound) {
      setGameWon(true);
      setEndTime(Date.now());
    }
  }, [characters]);

  useEffect(() => {
    if (gameWon) {
      setTotalTime((endTime - startTime) / 1000);
    }
  }, [endTime, gameWon, startTime]);

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

export function CharacterList({
  characters,
  setCharacters,
  coords,
  popupCoords,
}) {
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
      {characters.map((character) => {
        return (
          <li
            onClick={character.found ? undefined : validateCoords}
            className={character.found ? 'line-through' : ''}
            data-char={character.char}
            aria-label={character.name}
            key={character.id}
          >
            {character.name}
          </li>
        );
      })}
    </ul>
  );
}
