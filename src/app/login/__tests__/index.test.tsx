import mockRouter from 'next-router-mock';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import Login from '../page';
import '@testing-library/jest-dom';


const setup = () => {
  const handler = jest.fn();

  const utils = render(<Login />)
  // Assertion, так как мы уверенны, что здесь будет input-элемент,
  // а тип по умолчанию HTMLElement не содержит свойства value, необходимого нам в 3м тесте

  return {
      handler,
      ...utils,
  }
}

jest.mock('next/navigation', () => require('next-router-mock'));
// jest.mock('next/navigation', () => {
//     return {
//         useRouter: () => {}
//     }
// });

describe('Login Page', () => {
  it('should match snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

});