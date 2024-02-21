import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});