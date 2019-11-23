
import '../../../src/setupTests'
import React from 'react'
import { Text } from 'react-native'
import { shallow } from 'enzyme';
import {PreferenceRenderPickerField} from '../../../src/components/preference'
import JestMock from 'jest-mock';

describe('Preference render picker field correctly renders', () => {
    const getLabel = (item) => { return ( <Text>{item}</Text>)}

    test('Preference Render Picker field renders correctly', () => {

        let props = {
            selectedItem: '',
            defaultText: 'default'
        }
        const preferenceRenderPickerField = shallow(
            <PreferenceRenderPickerField
                {...props}
            />
        )

        expect(preferenceRenderPickerField).toBeTruthy()
    })

    test('Preference Render Picker field renders correctly select populated', () => {
        let props = {
            selectedItem: 'dkdkl',
            defaultText: 'default',
            getLabel: selectedItem => getLabel(selectedItem)
        }
        const preferenceRenderPickerField = shallow(
            <PreferenceRenderPickerField
                {...props}
            />
        )

        expect(preferenceRenderPickerField).toBeTruthy()
    })
})