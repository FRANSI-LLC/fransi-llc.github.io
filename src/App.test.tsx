import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero headline and contact form', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: /software built around people/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
});
