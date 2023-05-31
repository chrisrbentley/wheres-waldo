import React, { useState, useEffect } from 'react';
import { getWinners } from '../firebaseFunctions';
import { Link } from 'react-router-dom';
import LeaderboardCSS from '../styles/leaderboard.module.css';

const Leaderboard = () => {
  const [winners, setWinners] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWinners();
      return setWinners(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {winners === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <header id={LeaderboardCSS.leaderboardHeader}>
            <h1>Leaderboard</h1>
            <nav>
              <Link
                to="/"
                className={LeaderboardCSS.navLinks}
              >
                Home
              </Link>
              <Link
                className={LeaderboardCSS.navLinks}
                to="/game"
              >
                Play
              </Link>
            </nav>
          </header>
          <main id={LeaderboardCSS.leaderboardContainer}>
            {winners.length < 1 ? (
              <p>There are no winners yet, can you be the first?</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Time (in seconds)</th>
                  </tr>
                </thead>
                <tbody>
                  {winners.map((winner, index) => {
                    return (
                      <tr
                        key={index}
                        className="leaderboard-row"
                      >
                        <td>{winner.name}</td>
                        <td>{winner.time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </main>
        </>
      )}
    </>
  );
};

export default Leaderboard;
