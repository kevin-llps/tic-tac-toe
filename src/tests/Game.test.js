import React from 'react';
import { mount, render } from '../enzyme';
import Game from '../components/Game';
import Square from '../components/Square';

describe('Game', () => {
    test('Render a Game', () => {
        const wrapper = render(
            <Game></Game>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('Given click event on any Square should fill Square', () => {
        const wrapper = mount(
            <Game></Game>
        );
        wrapper.find(Square).at(2).first().simulate('click');
        expect(wrapper.find(Square).at(2).text()).toEqual('X');
    });

    test('Given 2 click events on Squares should alternate player on each round' , () => {
        const wrapper = mount(
            <Game></Game>
        );
        wrapper.find(Square).at(0).simulate('click');
        wrapper.find(Square).at(1).simulate('click');
        expect(wrapper.find(Square).at(0).text()).toEqual('X');
        expect(wrapper.find(Square).at(1).text()).toEqual('O');
    });

    test('Given click events on same Square should not replace the Square value' , () => {
        const wrapper = mount(
            <Game></Game>
        );
        wrapper.find(Square).at(0).simulate('click');
        expect(wrapper.find(Square).at(0).text()).toEqual('X');
        wrapper.find(Square).at(0).simulate('click');
        expect(wrapper.find(Square).at(0).text()).toEqual('X');
    });

    test('When click event is triggered while a winner was declared should not replace the Square value' , () => {
        const wrapper = mount(
            <Game></Game>
        );
        wrapper.find(Square).at(0).simulate('click');
        wrapper.find(Square).at(1).simulate('click');
        wrapper.find(Square).at(4).simulate('click');
        wrapper.find(Square).at(5).simulate('click');
        wrapper.find(Square).at(8).simulate('click');
        wrapper.find(Square).at(3).simulate('click');
        expect(wrapper.find(Square).at(3).text()).toEqual('');
    });

    [
        [],
        [0, 1, 4, 8, 6, 2]
    ].forEach(boardSquares => {
        test(`Given index Squares "${boardSquares}" should not declare a winner`, () => {
            const wrapper = mount(
                <Game></Game>
            );
            boardSquares.map(indexSquare => {
                wrapper.find(Square).at(indexSquare).simulate('click');
            });
            expect(wrapper.find('div.game-info div').first().text() === "X a gagné").toBeFalsy();
            expect(wrapper.find('div.game-info div').first().text() === "O a gagné").toBeFalsy();
        });
    });

    [
        [0, 4, 1, 5, 2],
        [3, 2, 4, 6, 5],
        [6, 1, 7, 2, 8],
        [0, 5, 3, 1, 6],
        [1, 2, 4, 3, 7],
        [2, 1, 5, 3, 8],
        [0, 1, 4, 5, 8],
        [2, 5, 4, 3, 6]
    ].forEach(boardSquares => {
        test(`Given index Squares "${boardSquares}" should declare a winner`, () => {
            const wrapper = mount(
                <Game></Game>
            );
            boardSquares.map(indexSquare => {
                wrapper.find(Square).at(indexSquare).simulate('click');
            });
            expect(wrapper.find('div.game-info div').first().text()).toEqual("X a gagné");
        });
    });

    test('Given click events on Squares should display moves', () => {
        const wrapper = mount(
            <Game></Game>
        );
        expect(wrapper.findWhere(n => n.text() === "Revenir au début de la partie").exists()).toBeTruthy();  
        expect(wrapper.findWhere(n => n.text() === "Revenir au tour n°1").exists()).toBeFalsy();
        wrapper.find(Square).at(0).simulate('click');
        expect(wrapper.findWhere(n => n.text() === "Revenir au début de la partie").exists()).toBeTruthy();    
        expect(wrapper.findWhere(n => n.text() === "Revenir au tour n°1").exists()).toBeTruthy();  
        expect(wrapper.findWhere(n => n.text() === "Revenir au tour n°2").exists()).toBeFalsy(); 
        wrapper.find(Square).at(1).simulate('click');
        expect(wrapper.findWhere(n => n.text() === "Revenir au début de la partie").exists()).toBeTruthy();    
        expect(wrapper.findWhere(n => n.text() === "Revenir au tour n°1").exists()).toBeTruthy();  
        expect(wrapper.findWhere(n => n.text() === "Revenir au tour n°2").exists()).toBeTruthy();    
        expect(wrapper.findWhere(n => n.text() === "Revenir au tour n°3").exists()).toBeFalsy();
    });

    test('Given click events on Squares should display the status corresponding to the next player', () => {
        const wrapper = mount(
            <Game></Game>
        );
        expect(wrapper.find('div.game-info div').first().text()).toEqual("Prochain joueur : X");
        wrapper.find(Square).at(0).simulate('click');
        expect(wrapper.find('div.game-info div').first().text()).toEqual("Prochain joueur : O");
        wrapper.find(Square).at(0).simulate('click');
        expect(wrapper.find('div.game-info div').first().text()).toEqual("Prochain joueur : O");
        wrapper.find(Square).at(1).simulate('click');
        expect(wrapper.find('div.game-info div').first().text()).toEqual("Prochain joueur : X");
    });

    test('Given click events on Squares corresponding to a winning combination should display the winner', () => {
        const wrapper = mount(
            <Game></Game>
        );
        wrapper.find(Square).at(0).simulate('click');
        wrapper.find(Square).at(1).simulate('click');
        wrapper.find(Square).at(4).simulate('click');
        wrapper.find(Square).at(5).simulate('click');
        wrapper.find(Square).at(8).simulate('click');
        expect(wrapper.find('div.game-info div').first().text()).toEqual("X a gagné");
    });

    test('When player is jumping to previous round, it should reset board with the corresponding state', () => {
        const wrapper = mount(
            <Game></Game>
        );
        wrapper.find(Square).at(0).simulate('click');
        wrapper.find(Square).at(1).simulate('click');
        wrapper.find(Square).at(2).simulate('click');
        wrapper.find(Square).at(3).simulate('click');
        wrapper.find('div.game-info>ol>li>button').at(1).simulate('click');
        expect(wrapper.find(Square).at(0).text()).toEqual('X');
        expect(wrapper.find(Square).at(1).text()).toEqual('');
        expect(wrapper.find(Square).at(2).text()).toEqual('');
        expect(wrapper.find(Square).at(3).text()).toEqual('');
    });

    test('When player is jumping to the beginning, it should reset board with the corresponding state', () => {
        const wrapper = mount(
            <Game></Game>
        );
        wrapper.find(Square).at(0).simulate('click');
        wrapper.find(Square).at(1).simulate('click');
        wrapper.find(Square).at(2).simulate('click');
        wrapper.find(Square).at(3).simulate('click');
        wrapper.find('div.game-info>ol>li>button').at(0).simulate('click');
        expect(wrapper.find(Square).at(0).text()).toEqual('');
        expect(wrapper.find(Square).at(1).text()).toEqual('');
        expect(wrapper.find(Square).at(2).text()).toEqual('');
        expect(wrapper.find(Square).at(3).text()).toEqual('');
    });
});