import {render, screen} from '@testing-library/react';
import React from 'react';
import {Home} from './Home';

test('render Home', () => {
  render(<Home />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
