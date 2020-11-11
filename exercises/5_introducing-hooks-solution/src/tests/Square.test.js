import React from 'react';
import { shallow, render } from '../enzyme';
import Square from '../components/Square';

describe('Square', () => {
    test('Render a Square', () => {
        const wrapper = render(
            <Square value="X"></Square>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('Given click event on button should call onClick callback', () => {
        const mockOnClick = jest.fn();
        const wrapper = shallow(
            <Square value="X" onClick={mockOnClick}></Square>
        );
        wrapper.find('button').simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
    });
});