import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {PrefTop} from '../../../src/components/preference'

describe('Preference top renders correctly', () => {
    test('Preference top render without crashing', () => {
        var prefTop = shallow(
            <PrefTop
                header={"Test"}
                subHeader={"Test"}
                onClickMoveToNext={() => {}} 
            />
        )
        expect(prefTop).toBeTruthy()
    })
})
