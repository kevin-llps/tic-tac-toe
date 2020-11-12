import React from 'react';
import { shallow } from '../enzyme';
import Status from '../components/Status';

describe('Status', () => {
    it('Given null winner should return corresponding status', () => {
        const nextPlayer = 'X';
        const wrapper = shallow(
            <Status winner={null} nextPlayer={nextPlayer} />
        );
        const expectedStatus = `Prochain joueur : ${nextPlayer}`;
        expect(wrapper.find('div').text()).toEqual(expectedStatus);
    });

    it.each([
        'O',
        'X'
    ])('Given winner=%s should return corresponding status', (winner) => {
        const wrapper = shallow(
            <Status winner={winner} nextPlayer={'O'} />
        );
        const expectedStatus = `${winner} a gagné`;
        expect(wrapper.find('div').text()).toEqual(expectedStatus);
    });

    it.each([
        'O',
        'X'
    ])('Given nextPlayer=%s should return corresponding status', (nextPlayer) => {
        const wrapper = shallow(
            <Status winner={null} nextPlayer={nextPlayer} />
        );
        const expectedStatus = `Prochain joueur : ${nextPlayer}`;
        expect(wrapper.find('div').text()).toEqual(expectedStatus);
    });
});