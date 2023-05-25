import React, { useState, useRef, useEffect } from 'react';
import '../styles/dialog.css';

export const Dialog = ({ time, open }) => {
  const dialogRef = useRef(null);

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
      <form action="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
        <button type="submit">Submit</button>
      </form>
    </dialog>
  );
};
