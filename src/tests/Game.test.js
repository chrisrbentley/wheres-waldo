import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Game } from '../components/Game';

describe('Game component', () => {
  it('Renders dropdown on image click', async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Game />
      </BrowserRouter>,
    );

    const image = screen.getByAltText(
      'Various characters across video games, movies and TV shows crowded in a city street and on buildings.',
    );

    await user.click(image);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
