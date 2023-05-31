import React from 'react';
import { Link } from 'react-router-dom';
import HomeCSS from '../styles/home.module.css';

const Home = () => {
  return (
    <>
      <header id={HomeCSS.homeHeader}>
        <h1>Where Are We?</h1>
      </header>
      <main id={HomeCSS.homeContainer}>
        <section id={HomeCSS.mainSec}>
          <p aria-label="Instructions">
            Find all of the characters in the image to win.
          </p>
          <section id={HomeCSS.buttonsGroup}>
            <button>
              <Link
                to="/game"
                className={HomeCSS.link}
              >
                Play Game
              </Link>
            </button>
            <button>
              <Link
                to="/leaderboard"
                className={HomeCSS.link}
              >
                Leaderboard
              </Link>
            </button>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
