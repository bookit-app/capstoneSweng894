import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {PreferenceHeader} from '../../../src/components/preference'

describe('Preference header render correctly', () => {
    test('Preference header render without crashing', () => {
        var preferenceHeader = shallow(
            <PreferenceHeader
                PreferenceHeader={'Test'}
            />
        )

        expect(preferenceHeader).toBeTruthy()
    })
})