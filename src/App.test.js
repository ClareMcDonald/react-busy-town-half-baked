import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders buttons in App.js', () => {
  render(<App />);

  const buttonArray = screen.getAllByRole('button');
  expect(buttonArray.length).toBe(11);
  
});

test('renders an incremented alien size on setAlienSize click', () => {
  render(<App />);

  const alienButtonEl = screen.getByText(/Oh no! The alien is gobblin up all the electricity!/i);

  expect(alienButtonEl).toBeInTheDocument();
});