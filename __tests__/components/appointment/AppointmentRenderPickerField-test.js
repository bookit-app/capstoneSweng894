
import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {AppointmentRenderPickerField} from '../../../src/components/appointment'
import JestMock from 'jest-mock';

describe('Appointment render picker field correctly renders', () => {
    function getLabel(item){}

    let props = {
        selectedItem: '',
        defaultText: 'default'
    }
    test('Appointment Render Picker field renders correctly', () => {
        const appointmentRenderPickerField = shallow(
            <AppointmentRenderPickerField
                {...props}
            />
        )

        expect(appointmentRenderPickerField).toBeTruthy()
    })
})