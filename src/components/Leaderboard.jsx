import React, { useState, useEffect } from 'react';
import { getWinners } from '../firebaseFunctions';

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
          <h1>Leaderboard</h1>
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
                {winners.map((winner) => {
                  return (
                    <tr>
                      <td>{winner.name}</td>
                      <td>{winner.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </>
      )}
    </>
  );
};

export default Leaderboard;
