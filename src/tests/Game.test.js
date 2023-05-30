import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Game, CharacterList } from '../components/Game';
import { getCoords } from '../firebaseFunctions';

jest.mock('../firebaseFunctions', () => ({
  getCoords: jest.fn(),
}));

describe('Game component', () => {
  it('Renders dropdown on image click', async () => {
    const user = userEvent.setup();

    render(<Game />);

    const image = screen.getByAltText(
      'Various characters across video games, movies and TV shows crowded in a city street and on buildings.',
    );

    await user.click(image);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('adds linethrough class to characters that have been found', async () => {
    const characters = [
      { name: 'Man Ray', id: 1, found: true, char: 'manray' },
      { name: 'Raiden', id: 2, found: false, char: 'raiden' },
      { name: 'Roger', id: 3, found: false, char: 'roger' },
    ];

    const setCharacters = jest.fn();

    render(
      <CharacterList
        characters={characters}
        setCharacters={setCharacters}
        coords={[80, 20]}
        popupCoords={[700, 800]}
      />,
    );

    const manray = screen.getByRole('listitem', { name: 'Man Ray' });
    expect(manray).toHaveClass('lineThrough');
  });
});
