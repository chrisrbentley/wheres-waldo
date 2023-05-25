import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog } from '../components/Dialog';

describe('Dialog component', () => {
  it('displays users time', () => {
    render(<Dialog time={33.245} />);
    expect(
      screen.getByText(
        'You finished in 33.245 seconds. Enter your name to be added to the leaderboard.',
      ),
    ).toBeInTheDocument();
  });

  it('renders input and submit elements', () => {
    render(<Dialog time={33.245} />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
