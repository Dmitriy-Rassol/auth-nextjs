// @ts-check

import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from '../index';
import '@testing-library/jest-dom';

describe('Input', () => {


    const setup = () => {
        const handler = jest.fn();

        const utils = render(<Input
            type="text"
            label="My Label"
            placeholder="My Placeholder"
            handleChange={handler}
            name=''
        />)
        const input = screen.getByLabelText('My Label') as HTMLInputElement;
        // Assertion, так как мы уверенны, что здесь будет input-элемент,
        // а тип по умолчанию HTMLElement не содержит свойства value, необходимого нам в 3м тесте

        return {
            input,
            handler,
            ...utils,
        }
    }


    it('Should match snapshot', () => {
        const { container } = setup();

        expect(container).toMatchSnapshot();
    })


    it('Should render a label', () => {
        setup();
        const label = screen.getByText('My Label');

        expect(label).toBeInTheDocument();
    });

    // https://testing-library.com/docs/example-input-event/ хороший пример теста другого Input-компонента

    it('Should be changeable and call handler on change', () => {
        const { input, handler } = setup();

        fireEvent.change(input, {
            target: {
                value: 'Some Value'
            }
        })

        expect(input.value).toBe('Some Value');
        expect(handler).toHaveBeenCalled();
        expect(handler).toHaveBeenCalledWith('Some Value');
    })
});