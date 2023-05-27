import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Leaderboard from '../components/Leaderboard';
import { getWinners } from '../firebaseFunctions';

jest.mock('../firebaseFunctions', () => ({
  getWinners: jest.fn(),
}));

describe('leaderboard component', () => {
  it('renders loading... before data is fetched', () => {
    render(<Leaderboard />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders the leaderboard with mock data', async () => {
    getWinners.mockResolvedValue([
      { time: 36.203, name: 'chris' },
      { time: 42.531, name: 'john' },
    ]);

    render(<Leaderboard />);
    await waitFor(() => {
      expect(screen.getByText('chris')).toBeInTheDocument();
    });
    expect(screen.getByText('36.203')).toBeInTheDocument();
    expect(screen.getByText('john')).toBeInTheDocument();
    expect(screen.getByText('42.531')).toBeInTheDocument();
  });

  it('renders message if there is no winner data', async () => {
    getWinners.mockResolvedValue([]);

    render(<Leaderboard />);

    await waitFor(() => {
      expect(
        screen.getByText('There are no winners yet, can you be the first?'),
      ).toBeInTheDocument();
    });
  });

  it('renders header', async () => {
    getWinners.mockResolvedValue([
      { time: 36.203, name: 'chris' },
      { time: 42.531, name: 'john' },
    ]);

    render(<Leaderboard />);

    await waitFor(() => {
      expect(screen.getByRole('heading')).toBeInTheDocument();
    });
  });
});
