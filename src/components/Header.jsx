import React, { useState } from 'react';
import '../styles/header.css';

function Header({ gameActive, setGameActive }) {
  // const [gameActive, setGameActive] = useState(false);
  const [time, setTime] = useState(0);

  return (
    <header>
      <h1>Find the Characters</h1>
      <p>0:00:00</p>
      <p>0/3</p>
    </header>
  );
}

export default Header;
