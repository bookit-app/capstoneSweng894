import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {PreferenceItem} from '../../../src/components/preference'

describe('Preference Item render correctly', () => {
    test('Preference Item render without crashing with businessName not populated', () => {
        var preferenceItem = shallow(
            <PreferenceItem 
                onProviderSelect={() => {}}
                businessName={''}
            />
        )
        
        expect(preferenceItem).toBeTruthy()
    })

    test('Preference Item render without crashing with businessName populated', () => {
        var preferenceItem = shallow(
            <PreferenceItem 
                onProviderSelect={() => {}}
                businessName={'Test'}
            />
        )
        
        expect(preferenceItem).toBeTruthy()
    })
})
