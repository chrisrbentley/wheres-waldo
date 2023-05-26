import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game } from './components/Game';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/game"
          element={<Game />}
        />
        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
