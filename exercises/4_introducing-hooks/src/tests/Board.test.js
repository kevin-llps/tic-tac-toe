import React from 'react';
import { shallow, render } from '../enzyme';
import Board from '../components/Board';
import Square from '../components/Square';

describe('Board', () => {
    test('Render a Board', () => {
        const wrapper = render(
            <Board squares={Array(9).fill(null)}></Board>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('Given click event on Square should call onClick callback', () => {
        const mockOnClick = jest.fn();
        const countSquares = 9;
        const wrapper = shallow(
            <Board squares={Array(countSquares).fill(null)} onClick={mockOnClick}></Board>
        );
        wrapper.find(Square).first().simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
        wrapper.find(Square).forEach(s => s.simulate('click'));
        expect(mockOnClick).toHaveBeenCalledTimes(countSquares + 1);
    });
});