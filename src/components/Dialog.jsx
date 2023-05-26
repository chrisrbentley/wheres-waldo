import React, { useState, useRef, useEffect } from 'react';
import { uploadTime } from '../firebaseFunctions';
import { useNavigate } from 'react-router-dom';
import '../styles/dialog.css';

export const Dialog = ({ time, open }) => {
  const [name, setName] = useState(null);
  const dialogRef = useRef(null);
  const navigate = useNavigate();

  const saveData = (e) => {
    e.preventDefault();
    uploadTime(name, time);
    navigate('/leaderboard');
  };

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (open && !dialogNode.open) {
      dialogNode.showModal();
    }
  }, [open]);

  return (
    <dialog ref={dialogRef}>
      <p>
        You finished in {time} seconds. Enter your name to be added to the
        leaderboard.
      </p>
      <form onSubmit={saveData}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </dialog>
  );
};
