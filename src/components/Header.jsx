import React, { useState } from 'react';
import manRay from '../images/manray.webp';
import raiden from '../images/raiden.png';
import roger from '../images/roger.png';

import '../styles/header.css';

function Header({ gameActive, setGameActive }) {
  // const [gameActive, setGameActive] = useState(false);
  const [time, setTime] = useState(0);

  return (
    <header>
      {/* <h1>Find the Characters</h1> */}
      <p>0:00:00</p>
      <div id="characters">
        <div className="character">
          <img
            src={manRay}
            alt=""
            className="character-logo"
          />
          <p>Man Ray</p>
        </div>
        <div className="character">
          <img
            src={raiden}
            alt=""
            className="character-logo"
          />
          <p>Raiden</p>
        </div>
        <div className="character">
          <img
            src={roger}
            alt=""
            className="character-logo"
          />
          <p>Roger</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
