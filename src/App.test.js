import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import TrafficLight from './TrafficLight';

test('renders buttons in App.js', () => {
  render(<App />);

  const buttonArray = screen.getAllByRole('button');
  expect(buttonArray.length).toBe(11);
  expect(buttonArray[1].textContent).toBe('Amazing! The alien zapped the lizard!');
});


test('renders bright green after green button click', () => {
  render(<TrafficLight /*color={lightColor}*/ />);

  const greenDiv = screen.getByTitle('green-div');
  expect(greenDiv).toBeInTheDocument();
  expect(greenDiv).toHaveClass('green');

});

test('renders a bus on click', async () => {
  render(<App />);

  const busButton = screen.getByRole('button', { name: 'Bus' });
  fireEvent.click(busButton);
  const emojiEl = await screen.findByText('🚌');
  expect(emojiEl.textContent).toBe('🚌');
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