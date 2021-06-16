import { render, screen } from '@testing-library/react';
import TabletWeaver from './TabletWeaver';

test('renders learn react link', () => {
  render(<TabletWeaver />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
