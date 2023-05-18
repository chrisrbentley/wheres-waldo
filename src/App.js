import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game } from './components/Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/game"
          element={<Game />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
