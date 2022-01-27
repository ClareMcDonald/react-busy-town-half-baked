import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yegads! The lizard is ramping up to its final form!/i);
  expect(linkElement).toBeInTheDocument();
});
