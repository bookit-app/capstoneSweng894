import React from 'react'
import {AppointmentDetailView} from '../../../src/components/appointment'
import {create} from 'react-test-renderer';
import { UpcomingAppointments } from '../../../src/constant'

describe('Appointment Detail View correctly renderer', () => {
    test('Matches to snapshot', () => {
        const replaceItem = () => {}
        const onDisplay = () => {}

        const appointmentDetailView = create(
            <AppointmentDetailView
                edit={false}
                item={UpcomingAppointments[0]}
                profile={''}
                token={''}
                replaceItem={() => replaceItem()}
                onDisplay={() => onDisplay()}
            />
        )
        expect(appointmentDetailView.toJSON()).toMatchSnapshot();
    })
})
