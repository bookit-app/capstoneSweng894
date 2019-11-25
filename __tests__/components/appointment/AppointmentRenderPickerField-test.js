
import '../../../src/setupTests'
import React from 'react'
import { Text } from 'react-native'
import { shallow } from 'enzyme';
import {AppointmentRenderPickerField} from '../../../src/components/appointment'
import JestMock from 'jest-mock';

describe('Appointment render picker field correctly renders', () => {
    const getLabel = (item) => { return ( <Text>{item}</Text>)}

    test('Appointment Render Picker field renders correctly', () => {

        let props = {
            selectedItem: '',
            defaultText: 'default'
        }
        const appointmentRenderPickerField = shallow(
            <AppointmentRenderPickerField
                {...props}
            />
        )

        expect(appointmentRenderPickerField).toBeTruthy()
    })

    test('Appointment Render Picker field renders correctly select populated', () => {
        let props = {
            selectedItem: 'dkdkl',
            defaultText: 'default',
            getLabel: selectedItem => getLabel(selectedItem)
        }
        const appointmentRenderPickerField = shallow(
            <AppointmentRenderPickerField
                {...props}
            />
        )

        expect(appointmentRenderPickerField).toBeTruthy()
    })
})