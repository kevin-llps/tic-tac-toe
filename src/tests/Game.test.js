const { default: Game } = require("../components/Game");

import React from 'react';
import { shallow, render } from '../enzyme';

describe('Game', () => {
    test('Render a Game', () => {
        const wrapper = render(
            <Game></Game>
        );
        expect(wrapper).toMatchSnapshot();
    });

    [
        [null, null, null, null, null, null, null, null, null],
        ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O']
    ].forEach(boardSquares => {
        test(`Given board squares having "${boardSquares}" should return null`, () => {
            const wrapper = shallow(
                <Game></Game>
            );
            expect(wrapper.instance().calculateWinner(boardSquares)).toEqual(null);
        });
    });

    [
        ['X', 'X', 'X', null, null, null, null, null, null],
        [null, null, null, 'X', 'X', 'X', null, null, null],
        [null, null, null, null, null, null, 'X', 'X', 'X'],
        ['X', null, null, 'X', null, null, 'X', null, null],
        [null, 'X', null, null, 'X', null, null, 'X', null],
        [null, null, 'X', null, null, 'X', null, null, 'X'],
        ['X', null, null, null, 'X', null, null, null, 'X'],
        [null, null, 'X', null, 'X', null, 'X', null, null]
    ].forEach(boardSquares => {
        test(`Given board squares "${boardSquares}" should return a winner`, () => {
            const wrapper = shallow(
                <Game></Game>
            );
            expect(wrapper.instance().calculateWinner(boardSquares)).toEqual('X');
        });
    });
});