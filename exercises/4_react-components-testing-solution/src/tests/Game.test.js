import React from 'react';
import { shallow, render } from '../enzyme';
import Game from '../components/Game';
import Board from '../components/Board';

describe('Game', () => {
    test('Render a Game', () => {
        const wrapper = render(
            <Game></Game>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('When construct a Game should init all state properties', () => {
        const expectedSquares = [null, null, null, null, null, null, null, null, null];
        const wrapper = shallow(
            <Game></Game>
        );
        expect(wrapper.instance().state.history.length).toEqual(1);
        expect(wrapper.instance().state.history[0].squares).toEqual(expectedSquares);
        expect(wrapper.instance().state.xIsNext).toEqual(true);
        expect(wrapper.instance().state.stepNumber).toEqual(0);
    });

    test('Given click event on Board should call onClick callback', () => {
        const wrapper = shallow(
            <Game></Game>
        );
        const spyHandleClick = jest.spyOn(Game.prototype, 'handleClick');
        wrapper.find(Board).first().simulate('click');
        expect(spyHandleClick).toHaveBeenCalled();
    });

    test('When handleClick is called should set the player value on the square' , () => {
        const wrapper = shallow(
            <Game></Game>
        );
        const index = 2;
        wrapper.instance().handleClick(index);
        expect(wrapper.instance().state.history[1].squares[index]).toEqual('X');
    });

    test('When handleClick is called should alternate player on each round' , () => {
        const wrapper = shallow(
            <Game></Game>
        );
        const indexSquX = 2;
        const indexSquO = 4;
        wrapper.instance().handleClick(indexSquX);
        expect(wrapper.instance().state.history[1].squares[indexSquX]).toEqual('X');
        wrapper.instance().handleClick(indexSquO);
        expect(wrapper.instance().state.history[2].squares[indexSquO]).toEqual('O');
    });

    test('When handleClick is called for a filled square should not replace the square value', () => {
        const wrapper = shallow(
            <Game></Game>
        );
        wrapper.setState({ 
            history: [
                ...wrapper.instance().state.history, 
                { squares: [null, null, 'X', null, null, null, null, null, null] }
            ] 
        });
        const indexSquX = 2;
        wrapper.instance().handleClick(indexSquX);
        expect(wrapper.instance().state.history[1].squares[indexSquX]).toEqual('X');
        expect(wrapper.instance().state.history.length).toEqual(2);
    });

    test('When handleClick is called while a winner was declared should not replace the square value', () => {
        const wrapper = shallow(
            <Game></Game>
        );
        const spyCalculateWinner = jest
        .spyOn(Game.prototype, 'calculateWinner')
        .mockImplementation((squares) => { return 'X' });
        const indexSquX = 2;
        wrapper.instance().handleClick(indexSquX);
        expect(spyCalculateWinner).toHaveBeenCalled();
        expect(wrapper.instance().state.history.length).toEqual(1);
        spyCalculateWinner.mockRestore();
    });

    test('When handleClick is called should save play in history', () => {
        const wrapper = shallow(
            <Game></Game>
        );
        const indexSquX = 2;
        const indexSquO = 7;
        wrapper.instance().handleClick(indexSquX);
        expect(wrapper.instance().state.history[1].squares[indexSquX]).toEqual('X');
        expect(wrapper.instance().state.history.length).toEqual(2);
        wrapper.instance().handleClick(indexSquO);
        expect(wrapper.instance().state.history[2].squares[indexSquO]).toEqual('O');
        expect(wrapper.instance().state.history.length).toEqual(3);
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

    [
        [{ step: 0 }, { xIsNext: true }],
        [{ step: 1 }, { xIsNext: false }]
    ].forEach(params => {
        test(`Given step "${params[0].step}" to jumpTo function should update state stepNumber to "${params[0].step}" and xIsNext to "${params[1].xIsNext}"`, () => {
            const wrapper = shallow(
                <Game></Game>
            );
            wrapper.setState({ 
                history: [
                    ...wrapper.instance().state.history, 
                    { squares: [null, null, null, null, null, null, null, null, null] }
                ] 
            });
            wrapper.instance().jumpTo(params[0].step);
            expect(wrapper.instance().state.stepNumber).toEqual(params[0].step);
            expect(wrapper.instance().state.xIsNext).toEqual(params[1].xIsNext);
        });
    });
});