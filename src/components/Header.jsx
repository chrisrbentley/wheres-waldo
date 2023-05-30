import React from 'react';
import manRay from '../images/manray.webp';
import raiden from '../images/raiden.png';
import roger from '../images/roger.png';
import headerCSS from '../styles/header.module.css';
import { Link } from 'react-router-dom';

function Header({ characters }) {
  return (
    <header>
      <nav>
        <Link
          to="/"
          id={headerCSS.link}
        >
          Home
        </Link>
      </nav>
      <div id={headerCSS.characters}>
        <div className={headerCSS.character}>
          <img
            src={manRay}
            alt=""
            className={
              characters[0].found
                ? headerCSS.found + ' ' + headerCSS.characterLogo
                : headerCSS.characterLogo
            }
          />
          <p>Man Ray</p>
        </div>
        <div className={headerCSS.character}>
          <img
            src={raiden}
            alt=""
            className={
              characters[1].found
                ? headerCSS.found + ' ' + headerCSS.characterLogo
                : headerCSS.characterLogo
            }
          />
          <p>Raiden</p>
        </div>
        <div className={headerCSS.character}>
          <img
            src={roger}
            alt=""
            className={
              characters[2].found
                ? headerCSS.found + ' ' + headerCSS.characterLogo
                : headerCSS.characterLogo
            }
          />
          <p>Roger</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
