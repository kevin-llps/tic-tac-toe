import React from 'react';
import { shallow } from '../enzyme';
import Moves from '../components/Moves';

describe('Moves', () => {

    [
        [{
            squares: [null, null, null, null, null, null, null, null, null]
        }],
        [{
            squares: [null, null, null, null, null, null, null, null, null]
        },
        {
            squares: [null, null, null, 'X', null, null, null, null, null]
        },
        {
            squares: [null, null, null, null, null, 'O', null, null, null]
        }]
    ].forEach(history => {
        it(`Given history after ${history.length - 1} played round should return corresponding moves`, () => {
            const wrapper = shallow(
                <Moves history={history} jumpTo={() => {}} />
            );
            const histoLength = wrapper.find('li button').length;
            expect(histoLength).toEqual(history.length);
        });
    });

    it('Given click event button to jump to passed round should call jumpTo function', () => {
        const history = [{ squares: [null, null, null, null, null, null, null, null, null] }];
        const jumpTo = jest.fn(i => i);
        const wrapper = shallow(
            <Moves history={history} jumpTo={jumpTo} />
        );
        wrapper.find('li button').first().simulate('click');
        expect(jumpTo).toHaveBeenCalled();
    });

});