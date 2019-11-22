
import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {AppointmentRenderPickerField} from '../../../src/components/appointment'
import JestMock from 'jest-mock';

describe('Appointment render picker field correctly renders', () => {
    function getLabel(item){ return 'k'}

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

    // test('Appointment Render Picker field renders correctly select populated', () => {

    //     let props = {
    //         selectedItem: 'dkdkl',
    //         defaultText: 'default',
    //         getLabel: getLabel()
    //     }
    //     const appointmentRenderPickerField = shallow(
    //         <AppointmentRenderPickerField
    //             {...props}
    //         />
    //     )

    //     expect(appointmentRenderPickerField).toBeTruthy()
    // })
})