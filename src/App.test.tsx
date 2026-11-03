import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero headline and contact coming-soon notice', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: /software built around people/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/contact form coming soon/i)).toBeInTheDocument();
});
