import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import { Game } from './components/Game';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/game"
          element={<Game />}
        />
        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
