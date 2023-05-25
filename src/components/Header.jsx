import React, { useState } from 'react';
import manRay from '../images/manray.webp';
import raiden from '../images/raiden.png';
import roger from '../images/roger.png';

import '../styles/header.css';

function Header({ gameActive, setGameActive, characters }) {
  return (
    <header>
      <div id="characters">
        <div className="character">
          <img
            src={manRay}
            alt=""
            className={
              characters[0].found ? 'found character-logo' : 'character-logo'
            }
          />
          <p>Man Ray</p>
        </div>
        <div className="character">
          <img
            src={raiden}
            alt=""
            className={
              characters[1].found ? 'found character-logo' : 'character-logo'
            }
          />
          <p>Raiden</p>
        </div>
        <div className="character">
          <img
            src={roger}
            alt=""
            className={
              characters[2].found ? 'found character-logo' : 'character-logo'
            }
          />
          <p>Roger</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
