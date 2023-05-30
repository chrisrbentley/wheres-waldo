import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Dialog } from '../components/Dialog';
import { BrowserRouter } from 'react-router-dom';

describe('Dialog component', () => {
  it('displays users time', () => {
    render(
      <BrowserRouter>
        <Dialog time={33.245} />
      </BrowserRouter>,
    );
    expect(
      screen.getByText(
        'You finished in 33.245 seconds. Enter your name to be added to the leaderboard.',
      ),
    ).toBeInTheDocument();
  });

  it('renders input and submit elements', () => {
    render(
      <BrowserRouter>
        <Dialog time={33.245} />
      </BrowserRouter>,
    );

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
