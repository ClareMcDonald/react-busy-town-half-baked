import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders an incremented count on setAlienSize click', () => {
  render(<App />);

  const alienSizeEl = screen.getby
  const linkElement = screen.getByText(/Yegads! The lizard is ramping up to its final form!/i);
  expect(linkElement).toBeInTheDocument();
});
