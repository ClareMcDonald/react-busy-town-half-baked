import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders buttons in App.js', () => {
  render(<App />);

  const buttonArray = screen.getAllByRole('button');
  expect(buttonArray.length).toBe(11);
  expect(buttonArray[1].textContent).toBe('Amazing! The alien zapped the lizard!');
});

// test('renders an incremented alien size on setAlienSize click', () => {
//   render(<App />);

//   const alienButtonEl = screen.getByText(/Oh no! The alien is gobblin up all the electricity!/i);
//   const alienImage = screen.getByAltText(/alien image/i);

//   expect(alienButtonEl).toBeInTheDocument();
//   expect(alienImage).toBeInTheDocument();

//   // fireEvent.click(alienButtonEl);

//   const clickedAlienButtonEl = fireEvent.click(alienButtonEl);
//   expect(alienImage).toHaveAttribute(width, 110);

  
// });