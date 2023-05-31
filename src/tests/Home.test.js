import Home from '../components/Home';
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Home component', () => {
  it('renders Where Are We? as heading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Where Are We?' }),
    ).toBeInTheDocument();
  });

  it('renders game instructions', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(
      screen.getByText('Find all of the characters in the image to win.'),
    ).toBeInTheDocument();
  });

  it('renders option buttons', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('button', { name: 'Play Game' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Leaderboard' }),
    ).toBeInTheDocument();
  });
});
