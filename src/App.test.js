import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders an incremented count on setAlienSize click', () => {
//   render(<App />);

//   const alienSizeEl = screen.getby
//   const linkElement = screen.getByText(/Yegads! The lizard is ramping up to its final form!/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders buttons in App.js', () => {
  render(<App />);

  const buttonArray = screen.getAllByRole('button');
  expect(buttonArray.length).toBe(11);
  
});
