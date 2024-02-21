import mockRouter from 'next-router-mock';
import { render, screen } from '@testing-library/react';
import { Header } from '../index';

jest.mock('next/navigation', () => require('next-router-mock'));

// jest.mock('next/navigation', () => {
//     return {
//         useRouter: () => {}
//     }
// });

describe('Header', () => {
  it('renders the component', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});